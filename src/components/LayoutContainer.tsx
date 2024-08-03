import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export default function LayoutContainer({ children, className }: Props) {
  return <section className={`mx-auto px-0 ${className}`}>{children}</section>
}
