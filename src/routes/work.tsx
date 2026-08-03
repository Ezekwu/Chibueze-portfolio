import { createFileRoute } from '@tanstack/react-router';
import WorkSection from '@/components/general/WorkSection';

export const Route = createFileRoute('/work')({
  component: WorkSection,
});
