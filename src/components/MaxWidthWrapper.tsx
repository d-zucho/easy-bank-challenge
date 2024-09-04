import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div
      className={cn(
        'max-w-screen-xl mx-auto w-full px-6 py-5 md:px-20 lg:px-[164px] lg:py-6',
        className
      )}
    >
      {children}
    </div>
  )
}

export default MaxWidthWrapper
