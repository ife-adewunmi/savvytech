import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export default function SectionContainer({ children, className }: Props) {
  return (
    <section
      className={`mx-auto mb-16 max-w-3xl px-6 md:max-w-screen-md md:px-11 lg:mb-40 lg:max-w-screen-lg lg:px-20 xl:max-w-screen-xl xl:px-[7.75rem] 2xl:max-w-[1360px] 2xl:px-0 ${className}`}
    >
      {children}
    </section>
  )
}
