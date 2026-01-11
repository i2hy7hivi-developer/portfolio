import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projectsData } from '@/lib/data';

export default function ProjectsSection() {
  return (
    <div className="space-y-12">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Notable Projects</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          Here are some of the projects I'm proud to have worked on.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <Card key={project.title} className="flex flex-col overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="relative h-48 w-full">
              <Image
                src={project.image.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
                data-ai-hint={project.image.imageHint}
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <CardDescription className="flex-grow">{project.description}</CardDescription>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
