import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function LayoutContainer({ children }: Props) {
  return (
    <section className="mx-auto px-4 sm:px-6 xl:px-0">
      {children}
    </section>
  )
}
