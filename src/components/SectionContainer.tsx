import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function SectionContainer({ children }: Props) {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">{children}</section>
  )
}

export default function LayoutContainer({ children }: Props) {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-screen-xl xl:px-0">
      {children}
    </section>
  )
}
