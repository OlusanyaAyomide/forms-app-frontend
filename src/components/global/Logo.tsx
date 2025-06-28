import { cn } from "@/lib/utils"

export default function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn('text-main flex-center whitespace-nowrap font-medium italic text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px]', className)}>
      Assessly
    </span>
  )
}
