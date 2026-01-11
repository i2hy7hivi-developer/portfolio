'use client';

import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { certificationsData } from '@/lib/data';
import { verifyCertificationAction } from '@/app/actions';
import type { CertificationVerificationOutput } from '@/ai/flows/certification-verification';
import { Loader, CheckCircle, XCircle, ExternalLink, Bot } from 'lucide-react';

interface VerificationResult {
  [key: string]: {
    loading: boolean;
    data: CertificationVerificationOutput | null;
    error: string | null;
  };
}

export default function CertificationsSection() {
  const [results, setResults] = useState<VerificationResult>({});

  const handleVerify = async (certName: string, certIssuer: string, certUrl: string) => {
    setResults((prev) => ({
      ...prev,
      [certName]: { loading: true, data: null, error: null },
    }));

    const formData = new FormData();
    formData.append('certificationName', certName);
    formData.append('issuingOrganization', certIssuer);
    formData.append('certificationURL', certUrl);

    const result = await verifyCertificationAction(formData);

    setResults((prev) => ({
      ...prev,
      [certName]: { loading: false, data: result.data, error: result.error },
    }));
  };

  return (
    <div className="space-y-12">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Certifications</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          My credentials and professional development.
        </p>
      </div>
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {certificationsData.map((cert) => (
            <AccordionItem key={cert.name} value={cert.name}>
              <AccordionTrigger className="text-lg font-medium hover:no-underline">
                <div className="flex w-full items-center justify-between pr-4">
                  <div className="text-left">
                    <span>{cert.name}</span>
                    <p className="text-sm text-muted-foreground font-normal">
                      {cert.issuer} - {cert.year}
                    </p>
                  </div>
                  <Badge variant="outline" className="hidden sm:inline-flex items-center gap-2">
                    View
                    <ExternalLink className="h-3 w-3" />
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-2">
                <p>This certification covers advanced topics in Laravel, enhancing my skills in building robust and scalable web applications.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="outline">
                    <a href={cert.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Certificate
                    </a>
                  </Button>
                  <Button
                    onClick={() => handleVerify(cert.name, cert.issuer, cert.url)}
                    disabled={results[cert.name]?.loading}
                    className="bg-accent hover:bg-accent/90"
                  >
                    {results[cert.name]?.loading ? (
                      <Loader className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                       <Bot className="mr-2 h-4 w-4" />
                    )}
                    Verify with AI
                  </Button>
                </div>

                {results[cert.name] && (
                  <div className="mt-4 rounded-lg border bg-card p-4">
                    {results[cert.name].loading && <p className="flex items-center gap-2 text-muted-foreground"><Loader className="h-4 w-4 animate-spin" />Verifying...</p>}
                    {results[cert.name].error && <p className="text-destructive flex items-center gap-2"><XCircle className="h-4 w-4" />{results[cert.name].error}</p>}
                    {results[cert.name].data && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 font-semibold">
                          {results[cert.name].data?.isValid ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <XCircle className="h-5 w-5 text-destructive" />
                          )}
                          <span>
                            Verification Status: {results[cert.name].data?.isValid ? 'Valid' : 'Could Not Verify'}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm">{results[cert.name].data?.verificationDetails}</p>
                      </div>
                    )}
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
