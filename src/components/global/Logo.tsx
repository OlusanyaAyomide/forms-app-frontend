import { cn } from "@/lib/utils"
import { Pen } from "lucide-react"


export default function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn('text-main flex-center whitespace-nowrap font-medium italic text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] skew-2', className)}>
      Assessly
      <span className="inline-block ml-">
        <Pen />
      </span>
    </span>
  )
}
