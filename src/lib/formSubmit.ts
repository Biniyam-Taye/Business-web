type SubmitPayload = {
  formType: 'home-contact' | 'contact-brief' | 'book-demo';
  data: Record<string, string>;
  pageUrl: string;
  userAgent: string;
  hpField?: string;
};

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? 'http://localhost:5000';

export async function submitLeadForm(payload: SubmitPayload): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/api/forms/submit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorPayload = (await response.json().catch(() => ({}))) as { message?: string };
    throw new Error(errorPayload.message ?? 'Failed to submit the form.');
  }
}
