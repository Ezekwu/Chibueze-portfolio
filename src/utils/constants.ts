import WishWeaver from '@/assets/images/chibueze-wishweaver.png';
import Allawee from '@/assets/images/alawee.png';
import Gateman from '@/assets/images/gateman.png';
import TONForge from '@/assets/images/ton-forge.png';
import ELI from '@/assets/images/eli.png';
import Ijoba from '@/assets/images/ijoba.png';
import GriffyBakes from '@/assets/images/griffy-bakes.png';

export type ProjectType = 'product' | 'brand' | 'graphic';

export type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  website?: string;
  caseStudy?: string;
  fullBrandDesign?: string;
  type: ProjectType;
};

export type WorkExperience = {
  id: number;
  name: string;
  duration: string;
  location: string;
  type: ProjectType;
};

export const projects: Project[] = [
  {
    id: 1,
    name: "Redesigning WishWeaver's website",
    description: 'An e-card gifting website to celebrate your friends, lovers and coworkers in style. Worked with a team of engineers to bring this to life!',
    image: WishWeaver,
    website: '#',
    // 'https://mywishweaver.com/',
    caseStudy: 'https://www.figma.com/design/R2FYKCxmxrlPIudOSyoP2M/Portfolio-project?node-id=3179-3958&t=8erJp2ZO6SkFnCTD-4',
    type: 'product'
  },
  {
    id: 2,
    name: 'Allawee Credit Card page',
    description: 'Worked with a senior designer and a team of engineers during my internship to create a landing page for Allawee.',
    image: Allawee,
    website: 'https://allawee.com/credit',
    caseStudy: '#',
    type: 'product'
  },
  {
    id: 3,
    name: 'Gateman',
    description: 'Onboard your users with one click. A responsive platform for credentials and high risk data management.',
    image: Gateman,
    website: '#',
    caseStudy: 'https://www.figma.com/design/R2FYKCxmxrlPIudOSyoP2M/Portfolio-project?node-id=3179-3961&t=8erJp2ZO6SkFnCTD-4',
    type: 'product'
  },
  {
    id: 4,
    name: 'TON Forge website',
    description: 'Worked on a Telegram mini app for the users to sell their NFTS, no code required.',
    image: TONForge,
    website: '#',
    caseStudy: '#',
    type: 'product'
  },
  {
    id: 5,
    name: 'ELI (Engineering Ladies Initiative Unilag) ',
    description: 'Worked with a team of designers in The department of engineering, University of Lagos. The design was based on a Neo-brutalist theme.',
    image: ELI,
    website: '#',
    caseStudy: 'https://www.figma.com/design/R2FYKCxmxrlPIudOSyoP2M/Portfolio-project?node-id=3180-71870&t=8erJp2ZO6SkFnCTD-4',
    type: 'product'
  },
  {
    id: 6,
    name: 'Ijoba',
    description: 'The crown of a modern African renaissance — where heritage meets contemporary style to dress men in legacy, authority, and grace.',
    image: Ijoba,
    fullBrandDesign: '#',
    caseStudy: '#',
    type: 'brand'
  },
  {
    id: 7,
    name: 'Griffy Bakes',
    description: 'Cookies, cakes and cupcakes! Making baking fun again. I explored interesting colours with illustrations in this branding project.',
    image: GriffyBakes,
    fullBrandDesign: '#',
    caseStudy: '#',
    type: 'brand'
  },
];


export const workExperiences: WorkExperience[] = [
  {
    id: 1,
    name: 'WishWeaver',
    duration: 'March 2025 - Present',
    location: 'United Kingdom',
    type: 'product'
  },
  {
    id: 2,
    name: 'TON Forge',
    duration: 'August 2025 - Present ',
    location: 'Lagos, Nigeria.',
    type: 'product'
  },
  {
    id: 3,
    name: 'Gateman',
    duration: 'March 2025 - June 2025',
    location: 'Lagos, Nigeria.',
    type: 'product'
  },
  {
    id: 4,
    name: 'WCCRM Germany',
    duration: 'April 2025 - May 2025',
    location: 'Germany',
    type: 'product'
  },
  {
    id: 5,
    name: 'Allawee',
    duration: 'May 2024 - August 2024',
    location: 'Lagos, Nigeria.',
    type: 'product'
  },
  {
    id: 6,
    name: 'ELD Unilag',
    duration: 'June 2023 - August 2023',
    location: 'Lagos, Nigeria.',
    type: 'product'
  },
  {
    id: 7,
    name: 'Upstairs Entertainment',
    duration: 'August 2023 - Present',
    location: 'Lagos, Nigeria.',
    type: 'graphic'
  },
  {
    id: 8,
    name: 'Crevtus',
    duration: 'January 2025 - Present',
    location: 'Lagos, Nigeria.',
    type: 'graphic'
  },
  {
    id: 9,
    name: 'Wishweaver',
    duration: 'October 2024 - February 2025',
    location: 'United Kingdom',
    type: 'graphic'
  },
  {
    id: 10,
    name: 'Engineering Ladies Initiative, UNILAG',
    duration: 'January 2023 - July 2023 ',
    location: 'Lagos, Nigeria.',
    type: 'graphic'
  },
  {
    id: 11,
    name: 'Crevtus',
    duration: 'January 2025 - Present',
    location: 'Lagos, Nigeria.',
    type: 'brand'
  },
  {
    id: 12,
    name: 'Wishweaver',
    duration: 'October 2024 - February 2025',
    location: 'United Kingdom',
    type: 'brand'
  },
  {
    id: 13,
    name: 'The Growth Grit',
    duration: 'July 2023 - September2023',
    location: 'Ireland',
    type: 'brand'
  },
    {
    id: 14,
    name: 'Engineering Ladies Initiative, UNILAG',
    duration: 'January 2023 - July 2023',
    location: 'Lagos, Nigeria',
    type: 'brand'
  },
];


export const resumes = [
  {
    id: 1,
    type: 'product',
    url: '/Chibueze-Samuel-Uchegbu-Product-Design Portfolio.pdf'
  },
  {
    id: 2,
    type: 'brand',
    url: '/Chibueze-Brand-and-Graphic-Resume.pdf'
  },
]
