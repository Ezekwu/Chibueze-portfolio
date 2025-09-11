import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

import BaseWrapper from '@components/general/BaseWrapper';
import BottomControls from '@components/general/BottomControls';

import { cn } from '@utils/helpers';
import { WorkType } from '@/types/enums/WorkType';
export const Route = createFileRoute('/work')({
  component: RouteComponent,
});

function RouteComponent() {
  const [activeWorkType, setActiveWorkType] = useState(WorkType.Product);
  const textWords = [
    "Hi", "👋", "I'm", "Chibueze,", "a", "multidisciplinary", "designer", "&",
    "bioinformatics", "enthusiast."
  ];

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
    <div className="h-screen overflow-y-auto">
      <BaseWrapper className="pt-[150px]">
        <h1 className="text-center max-w-[590px] mx-auto text-2xl text-gray-300">
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
                    'inline-block leading-none',
                    word === 'designer' && 'text-black'
                  )}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </motion.div>
        </h1>
      </BaseWrapper>

      <div className="blur-overlay h-[150px] md:h-[100px] w-full fixed bottom-0 left-0 flex items-center justify-center">
        <BottomControls
          activeWorkType={activeWorkType}
          setActiveWorkType={setActiveWorkType}
        />
      </div>
    </div>
  );
}
