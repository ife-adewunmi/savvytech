import React from 'react'
import HeroCarousel from '@/components/common/hero/HeroCarousel'
import { FaArrowRightLong } from 'react-icons/fa6'
import ButtonComponent from '@/components/common/button/ButtonComponent'

const HeroBanner = () => {
  return (
    <div className=" relative mb-40 mt-[80px] flex h-[590px] w-full items-center justify-between px-0 sm:pr-6 md:pl-11 lg:pl-20  xl:pl-56">
      {/* Left Grid */}
      <div className="z-50 flex h-full w-full basis-1/2 flex-col justify-center md:pr-11 lg:pr-20 xl:pr-8 ">
        <div className="flex w-full flex-col gap-14">
          <div className="flex w-full flex-col gap-6">
            {/* Content Title */}

            <h1 className="xl:display-text-lg display-text-sm">
              Engineering Excellence for Energy and Beyond
            </h1>

            {/* Content Description */}
            <p className="body-text-2xl-2">
              From engineering to procurement, Savvytech Limited offers unparalleled expertise and
              reliable services to West Africa's vital industries.
            </p>
          </div>

          <ButtonComponent
            buttonStyle={{ size: 'lg', padding: 'lg', color: 'primary', align: 'left' }}
            rightIcon={<FaArrowRightLong size={24} />}
          >
            Book a qoute
          </ButtonComponent>
        </div>
      </div>

      {/* Right Grid */}
      <div className="h-full w-full basis-[55%]">
        <HeroCarousel autoplay />
      </div>
    </div>
  )
}

export default HeroBanner
