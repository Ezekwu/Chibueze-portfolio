import { Link, useRouterState } from '@tanstack/react-router';
import {  useState } from 'react';

import type { FileRouteTypes } from '../../routeTree.gen';
import { motion } from 'framer-motion';
import { cn } from '@/utils/helpers';
import { useIsMobile } from '@/hooks/useIsMobile';

type RoutePath = FileRouteTypes['fullPaths'];

const routes: { label: string; to: RoutePath; activeEmoji: string }[] = [
  { label: 'Work stuff', to: '/work', activeEmoji: '🗂️' },
  { label: 'About me', to: '/about', activeEmoji: '👦🏾' },
  { label: 'Contact me', to: '/contact', activeEmoji: '📞' },
];

export default function Navbar() {
  const location = useRouterState({ select: (s) => s.location });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  


  return (
    <header className="h-[150px] navbar-overlay z-50 top-0 left-0 right-0 pt-8 px-4 ">
      <div
        className={cn(
          'flex items-center justify-center gap-1 w-fit mx-auto z-50',
          
        )}
      >
        <motion.nav
          initial={{ x: 100, opacity: 0 }}
          animate={
            isMenuOpen 
              ? { x: 0, opacity: 1 } 
              : { x: 100, opacity: 0 }
          }
          transition={{
            type: 'tween',
            duration: 0.3,
            ease: 'easeOut',
          }}
          className="md:!translate-x-0 md:!opacity-100 flex h-[53px] md:h-[55px] bg-[#fafafaae] rounded-[100px] p-1 md:p-[6px] items-center justify-center gap-2 md:gap-4 text-sm md:text-base"
        >
          {routes.map((route) => {
            const isActive = location.pathname === route.to;

            return (
              <Link
                to={route.to}
                key={route.label}
                disabled={ !isMenuOpen && isMobile }
                className="relative h-[40px] md:h-[43px] px-2 md:px-3 flex items-center text-sm md:text-base text-gray-300 hover:text-gray-400 transition-colors rounded-[100px] whitespace-nowrap"
              >
                <span className="relative z-10 flex items-center">
                  <motion.div
                    animate={isActive ? { width: 'auto' } : { width: 0 }}
                    transition={{
                      duration: 0.15,
                      ease: 'easeOut',
                    }}
                    className="overflow-hidden"
                  >
                    <motion.span
                      initial={{ x: -20, opacity: 0 }}
                      animate={
                        isActive ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
                      }
                      transition={{
                        duration: 0.15,
                        ease: 'easeOut',
                      }}
                      className=" hidden xs:block"
                    >
                      {route.activeEmoji}
                    </motion.span>
                  </motion.div>
                  <span className="md:ml-2">{route.label}</span>
                </span>
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white rounded-[100px] shadow-[0px_1px_2px_0px_#0000001A_inset,0px_4px_7.4px_1px_#0000001A]"
                    transition={{
                      type: 'tween',
                      stiffness: 200,
                      damping: 25,
                      duration: 0.2,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </motion.nav>
        <button
          type="button"
          onClick={toggleMenu}
          className={cn(
            'outline-none md:hidden z-[60] w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center shadow-[0px_4px_10px_1px_#0000001A]',
          )}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <motion.div
              animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="w-5 h-0.5 bg-gray-400 rounded-full mb-1"
            />
            <motion.div
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="w-5 h-0.5 bg-gray-400 rounded-full mb-1"
            />
            <motion.div
              animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="w-5 h-0.5 bg-gray-400 rounded-full"
            />
          </div>
        </button>
      </div>
    </header>
  );
}
