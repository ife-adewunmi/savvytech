import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export default function SectionContainer({ children, className }: Props) {
  return (
    <section className={`mx-auto max-w-3xl xl:max-w-screen-xl xl:px-0 ${className}`}>
      {children}
    </section>
  )
}
