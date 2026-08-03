import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import WorkSection from '@/components/general/WorkSection';
import { Preloader } from '@/components/general/Preloader';

function Home() {
  const [showPreloader, setShowPreloader] = useState(true);

  function handlePreloaderComplete() {
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
