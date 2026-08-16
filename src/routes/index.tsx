import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import WorkSection from '@/components/general/WorkSection';
import { Preloader } from '@/components/general/Preloader';

let hasShownPreloader = false;

function Home() {
  const [showPreloader, setShowPreloader] = useState(() => !hasShownPreloader);

  function handlePreloaderComplete() {
    hasShownPreloader = true;
    setShowPreloader(false);
  }

  return (
    <>
      <WorkSection />

      {showPreloader ? (
        <Preloader onComplete={handlePreloaderComplete} />
      ) : null}
    </>
  );
}

export const Route = createFileRoute('/')({
  component: Home,
});
