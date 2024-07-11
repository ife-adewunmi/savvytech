import React from 'react'
import Carousel from '@/components/Carousel'
import { FaArrowRightLong, FaArrowLeftLong } from 'react-icons/fa6'

interface HeroCarouselProps {
  autoplay: boolean
  interval?: number
}

const HeroCarousel = ({ autoplay, interval }: HeroCarouselProps) => {
  const prevButton = <FaArrowLeftLong size={24} className={``} />

  const nextButton = <FaArrowRightLong size={24} className={''} />

  return (
    <Carousel
      autoplay={autoplay}
      interval={interval}
      controlClassName={
        'absolute bg-white dark:bg-neutral-500 py-3 px-3.5 items-center justify-between drop-shadow-lg left-2 rounded-xl flex bottom-8 gap-8 flex-row'
      }
      showIndicators={false}
      prevButton={prevButton}
      nextButton={nextButton}
      controlSeparator
      className="h-full"
    >
      <div key={1} className="ml-10 h-full rounded-3xl bg-hero_image_1 bg-cover bg-center p-4"/>
      <div key={2} className="ml-10 h-full rounded-3xl bg-hero_image_2 bg-cover bg-center p-4"/>
    </Carousel>
  )
}

export default HeroCarousel
