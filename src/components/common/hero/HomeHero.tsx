import React from 'react'
import HeroCarousel from '@/components/common/hero/HeroCarousel'
import ButtonMain from '@/components/button/Button'
import { FaArrowRightLong } from 'react-icons/fa6'

function Button() {
  return null
}

const HeroBanner = () => {
  return (
    <div className="mt-[80px] flex h-[590px] w-[100%] items-center justify-between">
      {/* Left Grid */}
      <div className="flex h-full w-[585px] flex-col gap-[52px]">
        <div className="flex h-[348px] w-full flex-col gap-6">
          {/* Content Title */}
          <h1 className="display-text-xl">Engineering Excellence for Energy and Beyond</h1>

          {/* Content Description */}
          <p className="body-text-2xl-3">
            From engineering to procurement, Savvytech Limited offers unparalleled expertise and
            reliable services to West Africa's vital industries.
          </p>

          <ButtonMain
            buttonStyle={{ size: 'sm', padding: 'sm', color: 'primary', align: 'left' }}
           rightIcon={<FaArrowRightLong size={24} />}
          >
            Book a qoute
          </ButtonMain>
        </div>
      </div>

      {/* Right Grid */}
      <div className="h-[590px] w-[823px]">
        <HeroCarousel autoplay />
      </div>
    </div>
  )
}

export default HeroBanner
