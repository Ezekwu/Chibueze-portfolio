import { Link, useRouterState } from '@tanstack/react-router';
import { IoMenu } from 'react-icons/io5';
import { useState } from 'react';

import type { FileRouteTypes } from '../../routeTree.gen';
import { motion } from 'framer-motion';

type RoutePath = FileRouteTypes['fullPaths'];

const routes: { label: string; to: RoutePath; activeEmoji: string }[] = [
  { label: 'Work stuff', to: '/work', activeEmoji: '🗂️' },
  { label: 'About me', to: '/about', activeEmoji: '👦🏾' },
  { label: 'Contact me', to: '/contact', activeEmoji: '📞' },
];

export default function Navbar() {
  const location = useRouterState({ select: (s) => s.location });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed z-50 top-8 left-0 right-0">
      {/* Floating hamburger when menu is closed */}
      {!isMenuOpen && (
        <button
          type="button"
          onClick={toggleMenu}
          className="absolute right-8 top-[6px] outline-none w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-[0px_4px_10px_1px_#0000001A]"
        >
          <IoMenu className="text-gray-400" />
        </button>
      )}

      {/* Navigation pill when menu is open */}
      <nav
        className={`${isMenuOpen ? 'flex' : 'hidden'} w-fit mx-auto h-[53px] md:h-[55px] bg-[#fafafaae] rounded-[100px] p-[6px] items-center justify-center gap-2 md:gap-4 text-sm md:text-base`}
      >
        {routes.map((route) => {
          const isActive = location.pathname === route.to;

          return (
            <Link
              to={route.to}
              key={route.label}
              className="relative h-[40px] md:h-[43px] px-2 md:px-3 flex items-center text-gray-300 hover:text-gray-400 transition-colors rounded-[100px] whitespace-nowrap"
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
                  >
                    {route.activeEmoji}
                  </motion.span>
                </motion.div>
                <span className="ml-1 md:ml-2">{route.label}</span>
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
        <button
          type="button"
          onClick={toggleMenu}
          className="outline-none w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-[0px_4px_10px_1px_#0000001A]"
        >
          <IoMenu className="text-gray-400" />
        </button>
      </nav>
    </header>
  );
}
