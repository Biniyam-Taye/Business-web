import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import rateLimit from 'express-rate-limit';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const port = Number(process.env.PORT ?? 5000);

const allowedOrigins = (process.env.ALLOWED_ORIGINS ?? 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
  }),
);
app.use(express.json({ limit: '1mb' }));

const submitLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 40,
  standardHeaders: true,
  legacyHeaders: false,
});

const formSubmissionSchema = new mongoose.Schema(
  {
    formType: { type: String, required: true, trim: true },
    data: { type: mongoose.Schema.Types.Mixed, default: {} },
    fields: {
      type: [
        {
          key: { type: String, default: '' },
          label: { type: String, default: '' },
          value: { type: String, default: '' },
        },
      ],
      default: [],
    },
    pageUrl: { type: String, default: '' },
    userAgent: { type: String, default: '' },
    ip: { type: String, default: '' },
  },
  { timestamps: true, minimize: false },
);

const FormSubmission = mongoose.model('FormSubmission', formSubmissionSchema);

function sanitizeRecord(record) {
  const sanitized = {};
  for (const [key, value] of Object.entries(record ?? {})) {
    sanitized[key] = String(value ?? '').trim().slice(0, 5000);
  }
  return sanitized;
}

const formFieldTemplates = {
  'home-contact': [
    ['firstName', 'First Name'],
    ['lastName', 'Last Name'],
    ['email', 'Email Address'],
    ['projectDetails', 'Project Details'],
  ],
  'contact-brief': [
    ['name', 'Full Name'],
    ['email', 'Work Email'],
    ['company', 'Company / Team'],
    ['budget', 'Budget Range'],
    ['message', 'What Should We Know?'],
  ],
  'book-demo': [
    ['fullName', 'Full Name'],
    ['email', 'Work Email'],
    ['company', 'Company'],
    ['message', 'Demo Discussion'],
  ],
};

function toTitleCase(text) {
  return text
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (match) => match.toUpperCase());
}

function buildStoredFields(formType, sanitizedData) {
  const template = formFieldTemplates[formType] ?? [];
  const ordered = {};

  for (const [key] of template) {
    ordered[key] = sanitizedData[key] ?? '';
  }
  for (const [key, value] of Object.entries(sanitizedData)) {
    if (!(key in ordered)) {
      ordered[key] = value;
    }
  }

  const labels = new Map(template.map(([key, label]) => [key, label]));
  const fields = Object.entries(ordered).map(([key, value]) => ({
    key,
    label: labels.get(key) ?? toTitleCase(key),
    value: String(value ?? ''),
  }));

  return {
    normalizedData: ordered,
    fields,
  };
}

async function sendNotificationEmail(payload) {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_FROM,
    SMTP_TO,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_FROM || !SMTP_TO) {
    return;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const fieldsHtml = Object.entries(payload.data)
    .map(([key, value]) => `<li><strong>${key}:</strong> ${value || '-'}</li>`)
    .join('');

  await transporter.sendMail({
    from: SMTP_FROM,
    to: SMTP_TO,
    subject: `New form submission: ${payload.formType}`,
    text: `Form type: ${payload.formType}\nPage: ${payload.pageUrl}\n\n${Object.entries(payload.data)
      .map(([key, value]) => `${key}: ${value || '-'}`)
      .join('\n')}`,
    html: `
      <h2>New form submission</h2>
      <p><strong>Form type:</strong> ${payload.formType}</p>
      <p><strong>Page URL:</strong> ${payload.pageUrl || '-'}</p>
      <ul>${fieldsHtml}</ul>
    `,
  });
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/forms/submit', submitLimiter, async (req, res) => {
  try {
    const hpField = String(req.body?.hpField ?? '').trim();
    if (hpField) {
      return res.status(200).json({ ok: true });
    }

    const formType = String(req.body?.formType ?? '').trim();
    if (!formType) {
      return res.status(400).json({ message: 'Form type is required.' });
    }

    const sanitizedData = sanitizeRecord(req.body?.data);
    const { normalizedData, fields } = buildStoredFields(formType, sanitizedData);

    const payload = {
      formType,
      data: normalizedData,
      fields,
      pageUrl: String(req.body?.pageUrl ?? '').slice(0, 2000),
      userAgent: String(req.body?.userAgent ?? '').slice(0, 1000),
      ip: String(req.headers['x-forwarded-for'] ?? req.socket.remoteAddress ?? ''),
    };

    await FormSubmission.create(payload);
    await sendNotificationEmail(payload);

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Form submission failed:', error);
    return res.status(500).json({ message: 'Could not submit form right now.' });
  }
});

async function start() {
  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    throw new Error('MONGODB_URI is missing in environment variables.');
  }

  await mongoose.connect(mongoUri);
  app.listen(port, () => {
    console.log(`API server running on http://localhost:${port}`);
  });
}

start().catch((error) => {
  console.error('Server startup failed:', error);
  process.exit(1);
});
