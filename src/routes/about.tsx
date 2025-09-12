import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import BaseWrapper from '@/components/general/BaseWrapper';
import AboutMeCard from '@/components/general/AboutMeCard';
import WorkExpCard from '@/components/general/WorkExpCard';
import BottomControls from '@/components/general/BottomControls';
import { WorkType } from '@/types/enums/WorkType';
import { useState } from 'react';

export const Route = createFileRoute('/about')({
  component: RouteComponent,
});

function RouteComponent() {
  const [activeWorkType, setActiveWorkType] = useState(WorkType.Product);
  return (
    <BaseWrapper className="pt-28 md:pt-40 pb-24 md:pb-20">
      <motion.div
        initial={{ opacity: 0.5, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.2, ease: 'easeIn' }}
        className="max-w-[1200px] w-full mx-auto flex gap-6"
      >
        <AboutMeCard />
        <WorkExpCard />
      </motion.div>

      <div className="blur-overlay h-[120px] md:h-[80px] w-full fixed bottom-0 left-0 flex items-center justify-center">
        <BottomControls
          activeWorkType={activeWorkType}
          setActiveWorkType={setActiveWorkType}
        />
      </div>
    </BaseWrapper>
  );
}
