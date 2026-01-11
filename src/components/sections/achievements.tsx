'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { achievementsData } from '@/lib/data';
import { Award, Users, BrainCircuit } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  award: Award,
  users: Users,
  'brain-circuit': BrainCircuit,
};

export default function AchievementsSection() {
  return (
    <div className="space-y-12">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Achievements & Community</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          Milestones from my journey in tech.
        </p>
      </div>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {achievementsData.map((achievement, index) => {
            const Icon = iconMap[achievement.icon] || Award;
            return (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col text-center shadow-lg hover:bg-card/90 transition-colors">
                    <CardHeader className="items-center">
                      <div className="p-4 rounded-full bg-primary/10 mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle>{achievement.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
}
