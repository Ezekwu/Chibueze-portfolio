
import { CgArrowsExpandRight } from 'react-icons/cg';
import { motion, AnimatePresence } from 'framer-motion';

import Chibueze from '@/assets/images/chibueze.jpg';

import useToggle from '@/hooks/useToggle';

import { cn } from '@/utils/helpers';

export default function AboutMeCard() {
  const isTextExpanded = useToggle();

  return (
    <div
      className={cn(
        'relative bg-white rounded-[36px]  max-h-[600px] w-full px-3 pt-6 pb-3 overflow-auto hide-scrollbar'
      )}
    >
      <div className="sticky top-0 z-10 w-full flex justify-end -mb-10">
        <button
          onClick={isTextExpanded.toggle}
          style={{
            backgroundImage: `url(${isTextExpanded.value && Chibueze})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className={cn(
            'rounded-[20px] bg-cover bg-center transition-[padding] duration-300 ease-out relative overflow-hidden',
            isTextExpanded.value ? 'px-[10px] py-2' : 'p-0 border-white'
          )}
        >
          <span className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-[0px_1px_2px_0px_#0000001A_inset,0px_4px_10px_1px_#0000001A]">
            <CgArrowsExpandRight className="w-5 h-5 text-gray-400" />
          </span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {!isTextExpanded.value && (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -3 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.2, ease: 'easeOut' }} 
              className="text-gray-300 text-lg pr-9 mb-4"
            >
              Hi, I'm{' '}
              <span className="text-gray-500 font-medium">Chibueze</span>. I
              love playing Basketball, trying out new food and having new
              experiences.
            </motion.p>
            <motion.div 
              className="w-full h-full overflow-hidden rounded-[32px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut', delay: 0.1 }}
            >
              <motion.img
                src={Chibueze}
                alt="Chibueze"
                className="w-full h-[490px] object-cover object-top"
                initial={{ scale: 1.1, opacity: 0 }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                style={{ willChange: 'transform' }}
              />
            </motion.div>
          </motion.div>
        )}

        {isTextExpanded.value && (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -3 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <h2 className="text-gray-500 text-2xl font-semibold mb-4">
              Hi, I'm Chibueze.{' '}
            </h2>
            <div className="text-gray-300 leading-[150%]">
              <p className="mb-6">
                I love playing Basketball, trying out new food and having new
                experiences. I'm a brand and product designer with a passion for
                building identities and digital products that connect creativity
                with real-world impact. Over the years, I've helped startups and
                growing businesses craft memorable brands, intuitive websites,
                and user-first digital experiences.
              </p>
              <p className="mb-6">
                My work spans from designing end-to-end brand systems for
                premium fashion and lifestyle companies, to building communities
                for creatives, and even leading product design for Web3-focused
                platforms like NFT launchpads and e-card solutions. I've also
                collaborated on campaigns for global markets, creating visuals
                that merge storytelling with strategy. Some highlights include:
              </p>
              <ul className="list-disc list-inside pl-4 mb-6 leading-7">
                <li>
                  Building Crea8torium, a creative community and podcast
                  platform for designers and makers.
                </li>
                <li>
                  Designing Wishweaver, a product that lets people create and
                  share digital cards in meaningful, personal ways.
                </li>
                <li>
                  Working on TON Forge, a no-code launchpad simplifying NFT
                  creation on the TON blockchain.
                </li>
                <li>
                  Creating brand identities for bespoke tailoring houses, luxury
                  living companies, and tech startups.
                </li>
                <li>
                  Developing content for international campaigns, including Eid
                  promotions for luxury and automotive brands in Dubai.
                </li>
              </ul>
              <p>
                What drives me is the belief that design isn't just
                decoration—it's a tool for clarity, connection, and growth.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
