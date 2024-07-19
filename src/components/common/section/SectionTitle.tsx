import React from 'react'

interface Props {
  text: string
  tag?: string
  hasSubHeading?: boolean
  className?: string
}


export default function SectionTitle({ text, tag, hasSubHeading, className }: Props) {
  return (
    <h2
      className={`display-text-sm mb-14 text-center text-neutral-800 dark:text-neutral-100 ${className}`}
    >
      {text}
    </h2>
  )
}
