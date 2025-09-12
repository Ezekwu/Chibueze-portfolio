import { GoArrowRight } from 'react-icons/go';
import { motion } from 'framer-motion';

export default function WorkExpCard() {
  return (
    <div className="bg-white rounded-[36px] p-6 h-[600px] w-full">
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
        className='mt-6 grid gap-6'
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3
            }
          }
        }}
      >
        {
          Array.from({ length: 6 }).map((_, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, },
                visible: { 
                  opacity: 1, 
                  transition: { duration: 0.7, ease: 'easeOut' }
                }
              }}
            >
              <h4 className="text-gray-500 text-xl mb-3 font-medium">WishWeaver</h4>
              <p className='text-sm text-gray-400'>March 2025 - Present \ United Kingdom.</p>
            </motion.div>
          ))
        }
      </motion.div>
    </div>
  );
}
