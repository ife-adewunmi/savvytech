'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Transition } from '@headlessui/react'

interface CarouselProps {
  children?: React.JSX.Element[]
  autoplay?: boolean
  interval?: number
  showControls?: boolean
  showIndicators?: boolean
  className?: string
  controlClassName?: string
  indicatorClassName?: string
  prevButton?: React.JSX.Element
  nextButton?: React.JSX.Element
  controlSeparator?: boolean
  emptyState?: React.JSX.Element
}

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

const Carousel = ({
  children = [],
  autoplay = false,
  interval = 5000,
  showControls = true,
  showIndicators = true,
  className = '',
  controlClassName = '',
  indicatorClassName = '',
  prevButton,
  nextButton,
  controlSeparator,
  emptyState = <div>No items to display</div>,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? children.length - 1 : prevIndex - 1))
  }

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === children.length - 1 ? 0 : prevIndex + 1))
  }, [children.length])

  useEffect(() => {
    if (!autoplay || children.length === 0) return
    const timer = setInterval(handleNext, interval)
    return () => clearInterval(timer)
  }, [autoplay, interval, children.length, handleNext])

  const defaultPrevButton = (
    <button className={'m-4 h-8 w-8 cursor-pointer rounded-full bg-slate-200'} onClick={handlePrev}>
      {'<'}
    </button>
  )

  const defaultNextButton = (
    <button className={'m-4 h-8 w-8 cursor-pointer rounded-full bg-slate-200'} onClick={handleNext}>
      {'>'}
    </button>
  )

  if (children.length === 0) {
    return <div className={className}>{emptyState}</div>
  }

  return (
    <div className={`relative w-full overflow-hidden text-center ${className}`}>
      <Transition
        show={true}
        appear
        enter="transition-transform duration-500"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition-transform duration-500"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <div key={currentIndex} className="absolute h-full w-full">
          {children[currentIndex]}
        </div>
      </Transition>

      {showControls && children.length > 1 && (
        <div className={`${controlClassName}`}>
          {prevButton ? React.cloneElement(prevButton, { onClick: handlePrev }) : defaultPrevButton}
          {controlSeparator ? '|' : null}
          {nextButton ? React.cloneElement(nextButton, { onClick: handleNext }) : defaultNextButton}
        </div>
      )}

      {showIndicators && children.length > 1 && (
        <div className="absolute top-[125px] flex w-full justify-center gap-4">
          {children.map((_, index) => (
            <div
              key={index}
              className={classNames(
                'h-[4px] w-1/12 duration-1000',
                index !== currentIndex ? 'bg-slate-300' : 'bg-slate-800',
                indicatorClassName
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Carousel
