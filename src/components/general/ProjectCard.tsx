import { GoArrowRight } from 'react-icons/go';
import type { Project } from '@/utils/constants';
import { cn } from '@/utils/helpers';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  function isLinkDisabled(link: string) {
    return link === '#';
  } 

  return (
    <article className="h-[319px] md:h-[531px] w-full p-[5px] rounded-[20px] md:rounded-[32px] border border-[#ffffff9e] backdrop-blur-[26.32px] shadow-[2px_3px_40.3px_-10px_#FFFFFFBF]">
      <div className="relative w-full h-full">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover object-[top_70%] rounded-[16px] md:rounded-[28px] bg-gray-100"
        />
        <div className="absolute bottom-0 left-0 w-full bg-white rounded-[20px] md:p-6 p-4">
          <h3 className="md:text-[22px] font-semibold text-[#404040] mb-4">
            {project.name}
          </h3>
          <p className="text-gray-400 mb-6 hidden md:block">
            {project.description}
          </p>
          <div className="flex justify-between items-center">
            <a
              href={project.caseStudy || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={
                cn(
                  "text-gray-400 hover:text-gray-500 transition-colors duration-100 ease-in text-xs underline",
                  isLinkDisabled(project.caseStudy || '#') && 'pointer-events-none opacity-30'
                )
              }
            >
              {project.type === 'brand' ? 'See full brand design' : 'View link in figma'}
            </a>
            <a
              href={project.type === 'brand' ? project.fullBrandDesign || '#' : project.website || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={
                cn(
                  "group flex items-center gap-2 text-[#A4A4A4] hover:text-gray-400 transition-colors text-xs font-normal bg-[#F6F5F6] rounded-[100px] py-2 px-3",
                  isLinkDisabled(project.type === 'brand'? project.fullBrandDesign  || '#' : project.website || '#') && 'pointer-events-none opacity-40'
                )
              }
            >
              {project.type === 'brand' ? 'View brand' : 'View site'}
              <span className="relative inline-flex w-5 h-5 overflow-hidden">
                <GoArrowRight
                  className="w-5 h-5 absolute left-0 top-0 transition-transform duration-300 ease-out group-hover:translate-x-5"
                />
                <GoArrowRight
                  className="w-5 h-5 absolute left-0 top-0 -translate-x-5 transition-transform duration-300 ease-out group-hover:translate-x-0"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
