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

const projects: Project[] = [
  {
    id: 1,
    name: "Redesigning WishWeaver's website",
    description: 'Worked with a senior designer and a team of engineers during my internship to create a landing page for Allawee.',
    image: WishWeaver,
    website: 'https://mywishweaver.com/',
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
    description: 'Onboard your users with one click.',
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
    description: 'Onboard your users with one click.',
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

export default projects;
