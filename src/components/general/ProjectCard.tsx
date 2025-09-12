import { GoArrowRight } from 'react-icons/go';

import WishWeaver from '@/assets/images/chibueze-wishweaver.png';

export default function ProjectCard() {
  return (
    <article className="h-[319px] md:h-[531px] w-full p-[5px] rounded-[32px] border border-[#ffffff9e] backdrop-blur-[26.32px] shadow-[2px_3px_40.3px_-10px_#FFFFFFBF]">
      <div className="relative w-full h-full">
        <img
          src={WishWeaver}
          alt="WishWeaver"
          className="w-full h-full object-cover rounded-[28px]"
        />
        <div className="absolute bottom-0 left-0 w-full bg-white rounded-t-[20px] rounded-b-[28px] md:p-6 p-4">
          <h3 className="md:text-[22px] font-semibold text-[#404040] mb-4">
            Redesigning WishWeaver’s website{' '}
          </h3>
          <p className="text-gray-400 mb-6 hidden md:block">
            Worked with a senior designer and a team of engineers during my
            internship to create a landing page for Allawee.
          </p>
          <div className="flex justify-between items-center">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 transition-colors duration-100 ease-in text-xs underline"
            >
              See full case study
            </a>
            <a
              href="#"
              className="group flex items-center gap-2 text-[#A4A4A4] hover:text-gray-400 transition-colors text-xs font-normal bg-[#F6F5F6] rounded-[100px] px-2 py-[9px]"
            >
              View site
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
