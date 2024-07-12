import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export default function SectionContainer({ children, className }: Props) {
  return (
    <section
      className={`mx-auto max-w-3xl md:max-w-screen-md md:px-11 lg:max-w-screen-lg lg:px-20  xl:max-w-screen-xl xl:px-0 ${className}`}
    >
      {children}
    </section>
  )
}
