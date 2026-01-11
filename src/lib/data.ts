import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    // Fallback image
    return {
      id: 'fallback',
      imageUrl: 'https://picsum.photos/seed/fallback/600/400',
      description: 'A placeholder image.',
      imageHint: 'placeholder',
    };
  }
  return image;
};

export const profileData = {
  name: 'Rhythm Dubey',
  title: 'Passionate Web Developer',
  about: [
    'I’m a passionate Web Developer from Jodhpur, Rajasthan, with hands-on experience in building scalable web applications using Laravel, CodeIgniter, and modern PHP frameworks.',
    'Over the past few years, I’ve contributed to diverse projects — from Transport CRM and Property Management Systems to full-scale quotation and catering platforms.',
    'I focus on clean, efficient code and enjoy taking on challenging projects that merge functionality with great user experience.',
    'Currently, I’m working at Web Techno Software, where I specialize in Laravel Filament-based systems and legacy code modernization.',
  ],
  profilePicture: getImage('profile-picture'),
  contact: {
    location: 'Jodhpur, Rajasthan, India',
    email: 'rhythm.dubey.connect@gmail.com',
    emailLink: 'mailto:rhythm.dubey.connect@gmail.com',
    linkedin: 'https://www.linkedin.com/in/rhythm-dubey-7770882b8',
  },
};

export const experienceData = [
  {
    role: 'Web Developer',
    company: 'Web Techno Software',
    duration: 'Apr 2024 – Present',
    location: 'Jodhpur, Rajasthan (On-site)',
    description: [
      'Leading development and modernization of enterprise CRM systems using Laravel and Filament.',
      'Contributed to large-scale backend structures and workflow automation.',
      'Involved in ongoing maintenance of Property and Rent Management legacy systems.',
      'Actively participate in system design discussions and deployment testing.',
    ],
    keyProjects: ['Transport CRM Project', 'Property Management System', 'Accounts Management System'],
  },
  {
    role: 'Web Developer',
    company: 'Fistreet Systems Pvt. Ltd.',
    duration: 'Nov 2023 – Feb 2024',
    location: 'Jodhpur, Rajasthan',
    description: [
      'Developed and optimized Catering Order Management System.',
      'Assisted in CRM feature implementation and client-side UI improvements.',
      'Delivered high-quality, maintainable backend and frontend code using PHP & JavaScript.',
    ],
    keyProjects: [],
  },
  {
    role: 'Web Developer',
    company: 'Webitute',
    duration: 'Nov 2022 – Oct 2023',
    location: 'Jodhpur, Rajasthan',
    description: [
      'Built scalable e-commerce solutions using CodeIgniter, JavaScript, and CSS.',
      'Managed WordPress installations, plugins, and custom themes.',
      'Delivered responsive UI and API integrations for smooth data flow.',
    ],
    keyProjects: [],
  },
  {
    role: 'Junior Web Developer',
    company: 'Web Techno Software',
    duration: 'Jun 2022 – Oct 2022',
    location: 'Jodhpur, Rajasthan',
    description: [
      'Collaborated with teams to design and deploy new features.',
      'Worked on Jira tickets for bug fixes and performance updates.',
      'Gained strong exposure to Laravel and cross-functional teamwork.',
    ],
    keyProjects: [],
  },
];

export const skillsData = {
  languages: ['PHP', 'JavaScript', 'Python', 'SQL'],
  frameworks: ['Laravel', 'CodeIgniter', 'Filament'],
  frontend: ['HTML5', 'CSS3', 'jQuery', 'Bootstrap'],
  toolsAndCloud: ['Git', 'GitHub', 'Jira', 'AWS EC2', 'S3'],
  database: ['MySQL', 'PostgreSQL'],
  other: ['RESTful APIs', 'MVC Design', 'Problem Solving', 'Legacy Migration'],
};

export const projectsData = [
  {
    title: 'Transport CRM Project',
    description: 'Enhanced quoting and client tracking modules.',
    techStack: ['Laravel', 'Filament', 'PHP'],
    image: getImage('project-transport-crm'),
  },
  {
    title: 'Property Management System',
    description: 'Modernized legacy modules to Laravel Filament for better performance and maintainability.',
    techStack: ['Laravel', 'Filament', 'Legacy Migration'],
    image: getImage('project-property-mgmt'),
  },
  {
    title: 'Accounts Management System',
    description: 'Implemented automation for workflows and report generation.',
    techStack: ['Laravel', 'MySQL', 'Automation'],
    image: getImage('project-accounts-mgmt'),
  },
  {
    title: 'Catering Order Management',
    description: 'Developed and optimized a system for managing catering orders efficiently.',
    techStack: ['PHP', 'JavaScript', 'MySQL'],
    image: getImage('project-catering-order'),
  },
  {
    title: 'E-commerce Solutions',
    description: 'Built scalable e-commerce websites with custom features and API integrations.',
    techStack: ['CodeIgniter', 'JavaScript', 'CSS', 'API Integration'],
    image: getImage('project-ecommerce'),
  },
];

export const certificationsData = [
  {
    name: 'Laravel Advanced Topics',
    issuer: 'Alison',
    year: '2025',
    url: 'https://alison.com/course/laravel-advanced-topics',
  },
];

export const achievementsData = [
  {
    title: 'Google DevFest 2025',
    description: 'Attended Google DevFest 2025, gaining insights into modern development practices and cloud technologies.',
    icon: 'award',
  },
  {
    title: 'Growing Community',
    description: 'Active on LinkedIn with 500+ connections and a growing professional community.',
    icon: 'users',
  },
  {
    title: 'Continuous Learning',
    description: 'Regularly explore new tools, frameworks, and AI-assisted development workflows to stay on the cutting edge.',
    icon: 'brain-circuit',
  },
];
