import { createFileRoute } from '@tanstack/react-router';
import HalfCircle from '@/components/general/HalfCircle';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { cn } from '@/utils/helpers';

function Home() {
  const headlineWords = [
    "Hi👋", "I'm", "Chibueze,", "a", "multidisciplinary",
    "designer", "&", "bioinformatics", "enthusiast.",
  ];

  const ctaWords = ["Use", "the", "tab", "above", "to", "navigate!"];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const ctaContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.15, staggerChildren: 0.08, delayChildren: 0.5 },
    },
  };

  const wordVariants: Variants = {
    hidden: { y: '110%', opacity: 0, filter: 'blur(4px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <div className="relative text-center flex md:items-center md:justify-center h-[100dvh] overflow-hidden px-6">
      <h1 className="text-center text-[40px] h-fit md:text-[64px] mt-[50%] md:mt-0 text-gray-300 max-w-[1238px] mx-auto leading-[120%] tracking-tight font-normal">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-x-1 md:gap-x-2 gap-y-2"
        >
          {headlineWords.map((word, idx) => (
            <div key={`head-${idx}`} className="overflow-hidden h-[1.2em] flex items-center">
              <motion.span
                variants={wordVariants}
                className={cn(
                  'inline-block leading-none',
                  word === 'designer' && 'underline decoration-4 text-black'
                )}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={ctaContainerVariants}
          initial="hidden"
          animate="visible"
          className={cn('mt-1 hidden md:flex flex-wrap justify-center gap-x-2 gap-y-1 text-gray-200')}
        >
          {ctaWords.map((word, idx) => (
            <div key={`cta-${idx}`} className="overflow-hidden h-[1.2em] flex items-center">
              <motion.span variants={wordVariants} className="inline-block leading-none">
                {word}
              </motion.span>
            </div>
          ))}
        </motion.div>
      </h1>
      <HalfCircle />
    </div>
  );
}

export const Route = createFileRoute('/')({
  component: Home,
});
