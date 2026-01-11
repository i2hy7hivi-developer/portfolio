import Header from '@/components/layout/header';
import AchievementsSection from '@/components/sections/achievements';
import CertificationsSection from '@/components/sections/certifications';
import ContactSection from '@/components/sections/contact';
import ExperienceSection from '@/components/sections/experience';
import HeroSection from '@/components/sections/hero';
import ProjectsSection from '@/components/sections/projects';
import SkillsSection from '@/components/sections/skills';
import { Mail, Linkedin, Github } from 'lucide-react';
import { profileData } from '@/lib/data';

export default function Home() {
  return (
    <div className="flex min-h-dvh w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SectionWrapper id="experience">
          <ExperienceSection />
        </SectionWrapper>
        <SectionWrapper id="skills">
          <SkillsSection />
        </SectionWrapper>
        <SectionWrapper id="projects">
          <ProjectsSection />
        </SectionWrapper>
        <SectionWrapper id="certifications">
          <CertificationsSection />
        </SectionWrapper>
        <SectionWrapper id="achievements">
          <AchievementsSection />
        </SectionWrapper>
        <SectionWrapper id="contact">
          <ContactSection />
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}

const SectionWrapper = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <section id={id} className="w-full border-t py-16 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">{children}</div>
  </section>
);

const Footer = () => (
  <footer className="border-t bg-card text-card-foreground">
    <div className="container flex flex-col items-center justify-between gap-4 px-4 py-8 md:px-6 sm:flex-row">
      <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Rhythm Dubey. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <a href={profileData.contact.emailLink} aria-label="Email" className="text-muted-foreground hover:text-primary">
          <Mail className="h-5 w-5" />
        </a>
        <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
          <Linkedin className="h-5 w-5" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary">
          <Github className="h-5 w-5" />
        </a>
      </div>
    </div>
  </footer>
);
