import Image from 'next/image';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profileData } from '@/lib/data';
import Link from 'next/link';

export default function HeroSection() {
  const { name, title, about, profilePicture, contact } = profileData;

  return (
    <section id="hero" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        {/* <div className="relative mx-auto w-48 h-48 lg:w-80 lg:h-80">
          <Image
            src={profilePicture.imageUrl}
            alt={name}
            width={320}
            height={320}
            priority
            data-ai-hint={profilePicture.imageHint}
            className="rounded-full object-cover border-4 border-primary shadow-lg"
          />
        </div> */}
        {/* <div className="space-y-4 text-center lg:text-left"> */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              {name}
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-primary">{title}</h2>
          </div>
          <div className="text-muted-foreground md:text-lg space-y-3">
            {about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start pt-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10 hover:text-accent">
              <a href="/RhythmDubey_Resume.pdf" download>
                Download CV
              </a>
            </Button>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-accent" />
                <span>{contact.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <a href={contact.emailLink} className="flex items-center gap-2 hover:text-primary">
                  <Mail className="h-5 w-5 text-accent" />
                  <span className="hidden sm:inline">{contact.email}</span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
                  <Linkedin className="h-5 w-5 text-accent" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              </div>
          </div>
        {/* </div> */}
      </div>
    </section>
  );
}
