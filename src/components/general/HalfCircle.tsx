import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function HalfCircleSection() {
  const controls = useAnimation();

  useEffect(() => {
    startRotation();
  }, []);

  const startRotation = () => {
    controls.start({
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      },
    });
  };

  return (
    <div className="absolute md:bottom-[-166px] bottom-[-190px] left-1/2 -translate-x-1/2 w-full h-[332px] flex items-center justify-center">
      <div
        className="relative w-[332px] h-[332px] rounded-full shadow-md"
        style={{
          background:
            'linear-gradient(180deg, #F0E1E6 0%, #F2E8DC 44.23%, #F3E9DC 100%)',
        }}
      >
        <div
          className="absolute inset-0 m-auto w-[177px] h-[177px] rounded-full"
          style={{
            backgroundColor: '#FFFFFF80',
          }}
        />

        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 332 332"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={controls}
          onHoverStart={() => controls.stop()}
          onHoverEnd={startRotation}
        >
          <defs>
            <path
              id="circlePath"
              d="
                M 166,166
                m -130,0
                a 130,130 0 1,1 260,0
                a 130,130 0 1,1 -260,0
              "
            />
          </defs>

          <text
            fill="#96949A"
            fontSize="16"
            fontWeight="bold"
            letterSpacing="2"
            wordSpacing="15"
            textAnchor="middle"
          >
            <textPath
              href="#circlePath"
              startOffset="50%"
            >
              EXPLORE • CREATE • ELEVATE • EXPLORE • CREATE • ELEVATE •
            </textPath>
          </text>
        </motion.svg>
      </div>
    </div>
  );
}
