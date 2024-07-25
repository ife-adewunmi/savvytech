import React from 'react'

interface Props {
  text: string
  tag?: string
  hasSubHeading?: boolean
  className?: string
}

export default function SectionTitle({ text, tag, hasSubHeading, className }: Props) {
  let tagClassName = ''

  // Conditionally add class based on tag prop using switch case
  switch (tag) {
    case 'h1':
      tagClassName = 'display-text-sm mb-14 text-center'
      break
    case 'h2':
      tagClassName = 'heading-text-md-1 mb-2'
      break
    case 'h3':
      tagClassName = 'heading-text-md-1'
      break
    default:
      tagClassName = 'display-text-sm mb-14 text-center'
      break
  }
  return (
    <h2 className={`text-neutral-800 dark:text-neutral-100 ${tagClassName}  ${className}`}>
      {text}
    </h2>
  )
}
