import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

import BaseWrapper from '@/components/general/BaseWrapper';
import BottomControls from '@/components/general/BottomControls';
import ProjectCard from '@/components/general/ProjectCard';

import { cn } from '@/utils/helpers';
import { WorkType } from '@/types/enums/WorkType';
import projects from '@/utils/constants';

export const Route = createFileRoute('/work')({
  component: RouteComponent,
});

function RouteComponent() {
  const [activeWorkType, setActiveWorkType] = useState(WorkType.Product as string);
  const textWords = [
    "Hi", "👋", "I'm", "Chibueze,", "a", "multidisciplinary", "designer", "&",
    "bioinformatics", "enthusiast."
  ];

  const filteredProjects = projects.filter(project => 
    project.type === activeWorkType.toLowerCase()
  );

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.12 },
    },
  };

  const wordVariants: Variants = {
    hidden: { y: '110%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: 'easeOut' },
    },
  };

  return (
    <div  className="h-screen overflow-y-auto">
      <BaseWrapper className="pt-28 md:pt-[150px] pb-24 md:pb-20">
        <h1 className="text-center hidden md:block max-w-[530px] mx-auto text-2xl text-gray-300 mb-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-x-1 gap-y-1"
          >
            {textWords.map((word, idx) => (
              <div
                key={`word-${idx}`}
                className="overflow-hidden h-[1.2em] flex items-center"
              >
                <motion.span
                  variants={wordVariants}
                  className={cn(
                    'inline-block leading-none word-spacing-tight',
                    word === 'designer' && 'text-black'
                  )}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </motion.div>
        </h1>
        <div className='max-w-[1200px] mx-auto'>
          <motion.div
            key={activeWorkType} 
            className='grid sm:grid-cols-2 gap-y-2 md:gap-y-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.4, 
              ease: 'easeOut'
            }}
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </div>
      </BaseWrapper>

      <div className="blur-overlay h-[120px] md:h-[80px] w-full fixed bottom-0 left-0 flex items-center justify-center">
        <BottomControls
          activeWorkType={activeWorkType}
          setActiveWorkType={setActiveWorkType}
        />
      </div>
    </div>
  );
}
