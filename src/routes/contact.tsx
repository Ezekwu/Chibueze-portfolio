import { createFileRoute } from '@tanstack/react-router';
import { GoArrowRight } from 'react-icons/go';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';


import BaseWrapper from '@/components/general/BaseWrapper';
import MailIcon from '@/assets/icons/mail.svg';
import LinkedinIcon from '@/assets/icons/linkedin.svg';
import InstaIcon from '@/assets/icons/insta.svg';
import XIcon from '@/assets/icons/x.svg';

import { cn } from '@/utils/helpers';

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
});

function RouteComponent() {
  const headingWords = ["Please,", "feel", "free", "to", "reach", "out", "to", "me!"];

  const headingContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const wordVariants: Variants = {
    hidden: { y: '110%', opacity: 0,},
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const contactLinks = [
    {
      name: 'nwajiiugo',
      href: 'https://instagram.com/yourhandle',
      icon: InstaIcon,
    },
    {
      name: '@nwajirn',
      href: 'https://x.com/yourhandle',
      icon: XIcon,
    },
    {
      name: 'Chibueze Uchegbu',
      href: 'https://linkedin.com/in/chibueze-uchegbu',
      icon: LinkedinIcon,
    },

    {
      name: 'xavierchibueze@gmail.com',
      href: 'mailto:xavierchibueze@gmail.com',
      icon: MailIcon,
    },
  ];

  return (
    <BaseWrapper className="pt-28 md:pt-40 pb-24 md:pb-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="bg-white  w-full sm:max-w-[513px] mx-auto md:py-8 md:px-6 py-6 px-4 rounded-3xl md:rounded-[32px]">
          <h2 className="md:text-[22px] text-gray-500 font-semibold md:mb-6 mb-4">
            <motion.div
              variants={headingContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-x-1"
            >
              {headingWords.map((word, idx) => (
                <div key={`heading-${idx}`} className="overflow-hidden h-[1.2em] flex items-center">
                  <motion.span
                    variants={wordVariants}
                    className="inline-block leading-none"
                  >
                    {word}
                  </motion.span>
                </div>
              ))}
            </motion.div>
          </h2>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: 0.3, 
                  staggerChildren: 0.15, 
                }
              }
            }}
          >
            {contactLinks.map(({name, href, icon: Icon}, index) => {
              return (
                <motion.a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex flex-col justify-between h-[156px] px-4 py-5 md:rounded-3xl rounded-[20px] bg-gray-100 hover:border-gray-200 border border-transparent transition-all duration-200 group last:sm:col-span-3 overflow-hidden"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { 
                      opacity: 1, 
                      transition: {
                        duration: 0.6,
                        ease: "easeOut"
                      }
                    }
                  }}
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                  <Icon className="w-10 h-10" title={name} />
                  <div
                    className={cn(
                      'flex gap-2 w-full items-center',
                      index === contactLinks.length - 1 && 'justify-between'
                    )}
                  >
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {name}
                    </h3>
                    <span className="relative shrink-0 inline-flex w-5 h-5 overflow-hidden">
                      <GoArrowRight className="w-5 h-5 absolute left-0 top-0 text-[#a4a4a4] transition-transform duration-300 ease-out group-hover:translate-x-5" />
                      <GoArrowRight className="w-5 h-5 absolute left-0 top-0 text-gray-400 -translate-x-5 transition-transform duration-300 ease-out group-hover:translate-x-0" />
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
    </BaseWrapper>
  );
}
