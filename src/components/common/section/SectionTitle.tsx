import React from 'react'

interface Props {
  text: string
  tag?: string
  hasSubHeading?: boolean
  className?: string
}

export default function SectionTitle({ text, tag, hasSubHeading, className }: Props) {
  let tagClassName = ''

  // Conditionally add class based on tag prop using switch case display-text-md
  switch (tag) {
    case 'h1':
      tagClassName = 'md:display-text-sm heading-text-lg mb-14 text-center'
      break
    case 'h2':
      tagClassName = 'md:heading-text-md-1 heading-text-sm-1 mb-2'
      break
    case 'h3':
      tagClassName = 'md:heading-text-md-1 heading-text-sm-1'
      break
    case 'h4':
      tagClassName = 'lg:display-text-md heading-text-lg'
      break
    default:
      tagClassName = 'md:display-text-sm heading-text-lg mb-14 text-center'
      break
  }
  return (
    <h2 className={`text-neutral-800 dark:text-neutral-100 ${tagClassName}  ${className}`}>
      {text}
    </h2>
  )
}
