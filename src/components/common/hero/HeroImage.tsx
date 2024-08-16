import React from 'react'
import Carousel from '@/components/Carousel'
import { FaArrowRightLong, FaArrowLeftLong } from 'react-icons/fa6'
import SectionContainer from '@/components/common/section/SectionContainer'

interface HeroCarouselProps {}

const HeroImage = () => {
  const prevButton = <FaArrowLeftLong className={`text-base lg:text-lg xl:text-2xl`} />

  const nextButton = <FaArrowRightLong className={`text-base lg:text-lg xl:text-2xl`} />

  return (
    <div className="h-full">
      <div className="grid grid-cols-2 gap-4">
        <div key={1} className="h-full rounded-3xl bg-hero_image_1 bg-cover bg-center p-4 md:ml-10" />
        <div key={2} className="h-full rounded-3xl bg-hero_image_2 bg-cover bg-center p-4 md:ml-10" />
        <div key={3} className="h-full rounded-3xl bg-hero_image_1 bg-cover bg-center p-4 md:ml-10" />
        <div key={4} className="h-full rounded-3xl bg-hero_image_2 bg-cover bg-center p-4 md:ml-10" />
      </div>
    </div>
  )
}

export default HeroImage
