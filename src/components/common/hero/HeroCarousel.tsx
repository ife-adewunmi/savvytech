import React from 'react'
import Carousel from '@/components/Carousel'
import { FaArrowRightLong, FaArrowLeftLong } from 'react-icons/fa6'

interface HeroCarouselProps {
  autoplay: boolean
  interval?: number
}

const HeroCarousel = ({ autoplay, interval }: HeroCarouselProps) => {
  const prevButton = <FaArrowLeftLong className={`text-base lg:text-lg xl:text-2xl`} />

  const nextButton = <FaArrowRightLong className={`text-base lg:text-lg xl:text-2xl`} />

  return (
    <Carousel
      autoplay={autoplay}
      interval={interval}
      controlClassName={
        'absolute bg-white dark:bg-neutral-500 xl:py-3 xl:px-3.5 lg:py-2 lg:px-2.5 py-1 px-2 items-center justify-between drop-shadow-lg left-2 rounded-xl flex bottom-8 lg:gap-8 gap-5 flex-row'
      }
      showIndicators={false}
      prevButton={prevButton}
      nextButton={nextButton}
      controlSeparator
      className="h-full"
    >
      <div key={1} className="ml-10 h-full rounded-3xl bg-hero_image_1 bg-cover bg-center p-4" />
      <div key={2} className="ml-10 h-full rounded-3xl bg-hero_image_2 bg-cover bg-center p-4" />
    </Carousel>
  )
}

export default HeroCarousel
