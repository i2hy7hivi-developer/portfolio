import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { experienceData } from '@/lib/data';
import { Building2 } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <div className="space-y-12">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          A journey through my professional growth and contributions.
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
        {experienceData.map((job, index) => (
          <div
            key={index}
            className={`relative mb-8 flex w-full items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`relative w-full max-w-md ${
                index % 2 === 0 ? 'pl-16 text-left' : 'pr-16 text-right'
              }`}
            >
              <div className="absolute left-1/2 top-5 h-4 w-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background"></div>
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className={index % 2 === 0 ? 'items-start' : 'items-end'}>
                  <CardTitle className="text-xl font-bold text-primary">{job.role}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    {index % 2 !== 0 && (
                      <>
                        <span>{job.duration}</span>
                        <span className="font-bold text-primary">{job.company}</span>
                        <Building2 className="h-4 w-4" />
                      </>
                    )}
                    {index % 2 === 0 && (
                      <>
                        <Building2 className="h-4 w-4" />
                        <span className="font-bold text-primary">{job.company}</span>
                        <span>{job.duration}</span>
                      </>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent className={`space-y-3 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {job.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  {job.keyProjects.length > 0 && (
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                      <span className="font-semibold text-sm">Key Projects:</span>
                      {job.keyProjects.map((project, i) => (
                        <Badge key={i} variant="secondary">
                          {project}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
