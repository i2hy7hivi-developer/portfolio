import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skillsData } from '@/lib/data';

const skillCategories = [
  { title: 'Languages', skills: skillsData.languages },
  { title: 'Frameworks', skills: skillsData.frameworks },
  { title: 'Frontend', skills: skillsData.frontend },
  { title: 'Tools & Cloud', skills: skillsData.toolsAndCloud },
  { title: 'Database', skills: skillsData.database },
  { title: 'Other Skills', skills: skillsData.other },
];

export default function SkillsSection() {
  return (
    <div className="space-y-12">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          A collection of technologies I'm proficient with.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <Card key={category.title} className="shadow-sm hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-primary">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-lg py-1 px-3 border-accent text-accent-dark hover:bg-accent/10 cursor-pointer">
                    {skill}
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
