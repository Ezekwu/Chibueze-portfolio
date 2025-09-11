import { cn } from "@/utils/helpers";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function BaseWrapper({ children, className }: Props) {
  return (
    <div className={cn('max-w-[1200px] mx-auto px-4', className)}>
      {children}
    </div>
  );
}
