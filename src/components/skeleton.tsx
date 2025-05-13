import { cn } from "@/lib/utils";

type skeletonProps = {
  className?: string;
};

export default function Skeleton({ className }: skeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse h-4 w-[550px] rounded-md bg-white/5",
        className
      )}
    />
  );
}
