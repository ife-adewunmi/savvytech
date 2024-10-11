import React from 'react'

export enum HeaderTag {
  ONE = 'h1',
  TWO = 'h2',
  THREE = 'h3',
  FOUR = 'h4',
  FIVE = 'h5',
  SIX = 'h6',
}

interface Props {
  text: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  subHeadingText?: string
  hasSubHeading?: boolean
  className?: string
  subHeadingClassName?: string
}

export default function SectionTitle({
  text,
  tag = HeaderTag.ONE,
  subHeadingText = '',
  hasSubHeading = false,
  className = '',
  subHeadingClassName = '',
}: Props) {
  let tagClassName = ''

  switch (tag) {
    case HeaderTag.ONE:
      tagClassName = 'md:display-text-sm heading-text-lg mb-14 text-center'
      break
    case HeaderTag.TWO:
      tagClassName = 'md:heading-text-md-1 heading-text-sm-1 mb-2'
      break
    case HeaderTag.THREE:
      tagClassName = 'md:heading-text-md-1 heading-text-sm-1'
      break
    case HeaderTag.FOUR:
      tagClassName = 'lg:display-text-md heading-text-lg'
      break
    default:
      tagClassName = 'md:display-text-sm heading-text-lg mb-14 text-center'
      break
  }

  const validTag = tag || 'h1'

  const HeadingTag = React.createElement(
    validTag,
    {
      className: `text-neutral-800 dark:text-neutral-100 ${tagClassName} ${className}`,
    },
    text
  )

  return (
    <>
      {HeadingTag}

      {hasSubHeading && subHeadingText && (
        <p className={`mt-4 text-neutral-600 dark:text-neutral-300 ${subHeadingClassName}`}>
          {subHeadingText}
        </p>
      )}
    </>
  )
}
