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
      <div className="grid h-full grid-cols-2 gap-4">
        <div
          key={1}
          className="h-full rounded-2xl bg-about_img_1 bg-contain bg-right  bg-no-repeat "
        />
        <div
          key={2}
          className="h-full rounded-2xl bg-about_img_2 bg-cover bg-bottom bg-no-repeat "
        />
        <div
          key={3}
          className="h-full rounded-2xl bg-about_img_3 bg-contain bg-right-top bg-no-repeat "
        />
        <div
          key={4}
          className="h-full rounded-2xl bg-about_img_4 bg-contain bg-left bg-no-repeat "
        />
      </div>
    </div>
  )
}

export default HeroImage
