import { useEffect } from 'react';
import { GoArrowRight } from 'react-icons/go';
import { IoClose } from 'react-icons/io5';

import { motion, AnimatePresence } from 'framer-motion';
import { WorkType } from '@/types/enums/WorkType';

interface WorkExpCardProps {
  activeWorkType: WorkType | string;
  setActiveWorkType: (workType: WorkType | string) => void;
}

export default function WorkExpCard({ activeWorkType, setActiveWorkType }: WorkExpCardProps) {
  
  useEffect(() => {
    const isMobile = window.innerWidth < 768; 
    
    if (activeWorkType !== '' && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeWorkType]);

  return (
    <>
      <div className="bg-white hidden md:block rounded-[36px] p-6 h-[600px] w-full">
        <motion.div
          className="flex justify-between items-center py-2 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <h3 className="text-gray-400 ">Work Experience</h3>
          <a
            href="#"
            className="group flex items-center gap-2 text-gray-400 hover:text-gray-500 bg-[#F6F5F6] py-2 px-3 rounded-[100px] transition-colors duration-100 ease-in text-sm"
          >
            View full product design resume{' '}
            <span className="relative inline-flex w-5 h-5 overflow-hidden">
              <GoArrowRight className="w-5 h-5 absolute left-0 top-0 transition-transform duration-300 ease-out group-hover:translate-x-5" />
              <GoArrowRight className="w-5 h-5 absolute left-0 top-0 -translate-x-5 transition-transform duration-300 ease-out group-hover:translate-x-0" />
            </span>
          </a>
          <motion.div
            className="absolute bottom-0 left-0 h-px bg-gray-200"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
          />
        </motion.div>
        <motion.div
          className="mt-6 grid gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 0.7, ease: 'easeOut' },
                },
              }}
            >
              <h4 className="text-gray-500 text-xl mb-3 font-medium">
                WishWeaver
              </h4>
              <p className="text-sm text-gray-400">
                March 2025 - Present \ United Kingdom.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

       <AnimatePresence>
         {activeWorkType !== '' && (
           <motion.div
             className="md:hidden fixed top-0 inset-0 flex items-center justify-center p-4 z-[60]"
             aria-modal="true"
             role="dialog"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 0.2 }}
           >
             {/* Backdrop */}
             <motion.div 
               onClick={() => setActiveWorkType('')} 
               className="absolute inset-0 blur-overlay"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
             />

            {/* Modal Content */}
            <motion.div
              className="relative bg-white shadow-sm py-4 px-6 rounded-[24px] w-full max-w-md max-h-[70vh] flex flex-col"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 200,
              }}
            >
          {/* Modal Header */}
           <motion.div 
             className="flex flex-col pb-3 items-start gap-6 border-b border-grey-300 mb-6"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.4, ease: 'easeOut' }}
           >
             <div className="flex items-center justify-between w-full">
               <h3 className="text-gray-400">
                 Work Experience
               </h3>
               <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full transition-colors duration-200 shadow-[0px_4px_10px_1px_#0000001A]" onClick={() => setActiveWorkType('')}>
                 <div className="w-6 h-6 flex items-center justify-center">
                   <IoClose className="text-gray-600 text-xl" />
                 </div>
               </button>
             </div>
             <div>
               <a
                 href="#"
                 className="group flex items-center justify-center gap-2 text-gray-400 hover:text-gray-500 bg-[#F6F5F6] py-2 px-3 rounded-[100px] transition-colors duration-100 ease-in text-sm"
               >
                 View full product design resume{' '}
                 <span className="relative inline-flex w-4 h-4 overflow-hidden">
                   <GoArrowRight className="w-4 h-4 absolute left-0 top-0 transition-transform duration-300 ease-out group-hover:translate-x-4" />
                   <GoArrowRight className="w-4 h-4 absolute left-0 top-0 -translate-x-4 transition-transform duration-300 ease-out group-hover:translate-x-0" />
                 </span>
               </a>
             </div>
             <motion.div
               className="absolute bottom-0 left-0 h-px bg-gray-200 w-full"
               initial={{ width: 0 }}
               animate={{ width: '100%' }}
               transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
             />
           </motion.div>

          {/* Modal Body */}
           <div className="flex-1 overflow-y-auto">
             <motion.div
               className="space-y-6"
               initial="hidden"
               animate="visible"
               variants={{
                 hidden: { opacity: 0 },
                 visible: {
                   opacity: 1,
                   transition: {
                     staggerChildren: 0.1,
                     delayChildren: 0.2,
                   },
                 },
               }}
             >
               {Array.from({ length: 6 }).map((_, index) => (
                 <motion.div
                   key={index}
                   variants={{
                     hidden: { opacity: 0 },
                     visible: {
                       opacity: 1,
                       transition: { duration: 0.4, ease: 'easeOut' },
                     },
                   }}
                   className="pb-4 border-b border-gray-100 last:border-b-0"
                 >
                   <h4 className="text-gray-500 text-xl mb-3 font-medium">
                     WishWeaver
                   </h4>
                   <p className="text-sm text-gray-400">
                     March 2025 - Present \ United Kingdom.
                   </p>
                 </motion.div>
               ))}
             </motion.div>
           </div>
            </motion.div>
           </motion.div>
         )}
       </AnimatePresence>
    </>
  );
}
