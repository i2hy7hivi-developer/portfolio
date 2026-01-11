'use server';

import { z } from 'zod';
import { verifyCertification, type CertificationVerificationOutput } from '@/ai/flows/certification-verification';

const certificationSchema = z.object({
  certificationName: z.string(),
  issuingOrganization: z.string(),
  certificationURL: z.string().url(),
});

export async function verifyCertificationAction(formData: FormData): Promise<{
  success: boolean;
  data: CertificationVerificationOutput | null;
  error: string | null;
}> {
  const rawFormData = {
    certificationName: formData.get('certificationName'),
    issuingOrganization: formData.get('issuingOrganization'),
    certificationURL: formData.get('certificationURL'),
  };
  const validatedFields = certificationSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      success: false,
      data: null,
      error: 'Invalid input.',
    };
  }

  try {
    const result = await verifyCertification(validatedFields.data);
    return { success: true, data: result, error: null };
  } catch (error) {
    console.error('AI verification failed:', error);
    return {
      success: false,
      data: null,
      error: 'AI verification failed. Please try again.',
    };
  }
}

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters long.'),
});

export async function sendContactMessage(data) {
  const result = contactSchema.safeParse(data);

  if (!result.success) {
    return { success: false, message: "Invalid form data" };
  }

  try {
    const res = await fetch(
      `https://snazzy-sprite-8b1082.netlify.app/.netlify/functions/send-mail`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const json = await res.json();
    return json; // contains success: true or false
  } catch (error) {
    return { success: false, message: "Something went wrong" };
  }
}
