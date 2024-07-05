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
        'absolute bg-white py-3 px-3.5 items-center justify-between drop-shadow-lg left-2 rounded-xl flex bottom-8 gap-8 flex-row'
      }
      showIndicators={false}
      prevButton={prevButton}
      nextButton={nextButton}
      controlSeparator
      className="h-full"
    >
      <div key={1} className="bg-hero_image_1 ml-10 h-full rounded-3xl p-4">
        <h2 className="text-2xl font-bold">Item 1</h2>
        <p>This is the content 1.</p>
      </div>
      <div key={2} className="bg-hero_image_2 ml-10 h-full rounded-3xl p-4">
        <h2 className="text-2xl font-bold">Item 2</h2>
        <p>This is the content 2.</p>
      </div>
    </Carousel>
  )
}

export default HeroCarousel
