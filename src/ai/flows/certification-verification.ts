// This file contains the Genkit flow for validating certifications.

'use server';

/**
 * @fileOverview Certification Verification Flow.
 *
 * This file defines a Genkit flow that validates certifications listed in a user profile
 * by cross-referencing them with external sites.
 *
 * @exports verifyCertification - The main function to trigger the certification verification flow.
 * @exports CertificationVerificationInput - The input type for the verifyCertification function.
 * @exports CertificationVerificationOutput - The output type for the verifyCertification function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CertificationVerificationInputSchema = z.object({
  certificationName: z.string().describe('The name of the certification to verify.'),
  issuingOrganization: z.string().describe('The organization that issued the certification.'),
  certificationURL: z.string().url().describe('URL to the certification on the issuer\'s website, if available.'),
  profileDetails: z.string().optional().describe('Additional details from the user profile about the certification.')
});
export type CertificationVerificationInput = z.infer<typeof CertificationVerificationInputSchema>;

const CertificationVerificationOutputSchema = z.object({
  isValid: z.boolean().describe('Whether the certification is valid and verifiable.'),
  verificationDetails: z.string().describe('Details of the verification process, including sources checked and any discrepancies found.'),
});
export type CertificationVerificationOutput = z.infer<typeof CertificationVerificationOutputSchema>;

export async function verifyCertification(input: CertificationVerificationInput): Promise<CertificationVerificationOutput> {
  return certificationVerificationFlow(input);
}

const verifyCertificationPrompt = ai.definePrompt({
  name: 'verifyCertificationPrompt',
  input: { schema: CertificationVerificationInputSchema },
  output: { schema: CertificationVerificationOutputSchema },
  prompt: `You are an AI expert in verifying professional certifications.

  Based on the information provided, determine if the certification is valid and verifiable.
  Consider the issuing organization, the certification name, and any provided URL or profile details.

  Provide a detailed verification status, including sources checked and any discrepancies found.

  Certification Name: {{{certificationName}}}
  Issuing Organization: {{{issuingOrganization}}}
  Certification URL: {{{certificationURL}}}
  Profile Details: {{{profileDetails}}}
  \nOutput in JSON format.
`,
});

const certificationVerificationFlow = ai.defineFlow(
  {
    name: 'certificationVerificationFlow',
    inputSchema: CertificationVerificationInputSchema,
    outputSchema: CertificationVerificationOutputSchema,
  },
  async input => {
    const { output } = await verifyCertificationPrompt(input);
    return output!;
  }
);
