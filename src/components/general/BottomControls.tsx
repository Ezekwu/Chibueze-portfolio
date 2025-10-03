import { WorkType } from "@/types/enums/WorkType";
import { motion } from 'framer-motion';

import { cn } from "@/utils/helpers";

interface BottomControlsProps {
  activeWorkType: WorkType | string;
  setActiveWorkType: (workType: WorkType | string) => void;
  isWorkPage?: boolean;
}

const workTypes = [
  {
    label: 'Product',
    value: WorkType.Product,
  },
  {
    label: 'Brand',
    value: WorkType.Brand,
  },
  {
    label: 'Graphic',
    value: WorkType.Graphic,
  },
];

export default function BottomControls({ activeWorkType, setActiveWorkType, isWorkPage = false }: BottomControlsProps) {
  function isActive(workType: WorkType | string) {
    return activeWorkType === workType;
  }

  function handleWorkTypeClick(workType: WorkType | string) {
    if (isWorkPage && workType === WorkType.Graphic) {
      // Navigate to Google Drive folder for graphic work (only on work page)
      window.open('https://drive.google.com/drive/u/0/folders/1HaapqjnNHxYzWxZf8mGBQtfUGvrwUMzZ', '_blank');
    } else {
      setActiveWorkType(workType);
    }
  }
  
  return (
    <nav
      className={cn(
        "z-10 w-fit mx-auto h-[53px] md:h-[55px] bg-[#fafafaae] rounded-[100px] p-[6px] items-center justify-center gap-2 md:gap-4 text-sm md:text-base flex "
      )}
    >
      {workTypes.map((workType) => (
        <button
          key={workType.value}
          onClick={() => handleWorkTypeClick(workType.value)}
          className="relative h-[40px] md:h-[43px] px-2 md:px-3 flex items-center text-gray-300 hover:text-gray-400 transition-colors rounded-[100px] whitespace-nowrap"
        >
          <span className="relative z-10 flex items-center">
            <motion.div
              animate={isActive(workType.value) ? { width: 'auto' } : { width: 0 }}
              transition={{
                duration: 0.15,
                ease: 'easeOut',
              }}
              className="overflow-hidden"
            >
              <motion.span
                initial={{ x: -20, opacity: 0 }}
                animate={
                  isActive(workType.value) ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
                }
                transition={{
                  duration: 0.15,
                  ease: 'easeOut',
                }}
              >
              </motion.span>
            </motion.div>
            <span>{workType.label}</span>
          </span>
          {isActive(workType.value) && (
            <motion.div
              layoutId="active-work-pill"
              className="absolute inset-0 bg-white rounded-[100px] shadow-[0px_1px_2px_0px_#0000001A_inset,0px_4px_7.4px_1px_#0000001A]"
              transition={{
                type: 'tween',
                stiffness: 200,
                damping: 25,
                duration: 0.2,
              }}
            />
          )}
        </button>
      ))}
    </nav>
  );
}
