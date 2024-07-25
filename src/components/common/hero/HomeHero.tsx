import React from 'react'
import HeroCarousel from '@/components/common/hero/HeroCarousel'
import { FaArrowRightLong } from 'react-icons/fa6'
import ButtonComponent from '@/components/common/button/ButtonComponent'
import SectionContainer from '@/components/common/section/SectionContainer'

const HeroBanner = () => {
  return (
    <SectionContainer className="mt-16">
      <div className=" relative flex h-[590px] w-full flex-col items-center justify-between md:flex-row">
        {/* Left Grid */}
        <div className="z-50 flex h-full w-full basis-1/2 flex-col justify-center xl:pr-7 2xl:pr-9  ">
          <div className="flex w-full flex-col gap-8 lg:gap-14">
            <div className="flex w-full flex-col gap-4 lg:gap-6">
              {/* Content Title */}

              <h1 className="2xl:display-text-lg xl:display-text-md heading-text-lg lg:display-text-sm text-neutral-900 dark:text-neutral-10">
                Engineering Excellence for Energy and Beyond
              </h1>

              {/* Content Description */}
              <p className="2xl:body-text-2xl-2 body-text-md-2 xl:body-text-xl-2  text-neutral-600 dark:text-neutral-200">
                From engineering to procurement, Savvytech Limited offers unparalleled expertise and
                reliable services to West Africa's vital industries.
              </p>
            </div>

            <div className="hidden lg:block">
              <ButtonComponent
                buttonStyle={{ size: 'lg', padding: 'lg', color: 'primary', align: 'left' }}
                rightIcon={<FaArrowRightLong size={24} />}
              >
                Book a qoute
              </ButtonComponent>
            </div>
            <div className="hidden md:block lg:hidden">
              <ButtonComponent
                buttonStyle={{ size: 'md', padding: 'md', color: 'primary', align: 'left' }}
                rightIcon={<FaArrowRightLong size={24} />}
              >
                Book a qoute
              </ButtonComponent>
            </div>
            <div className="block md:hidden">
              <ButtonComponent
                buttonStyle={{ size: 'sm', padding: 'sm', color: 'primary', align: 'left' }}
                rightIcon={<FaArrowRightLong size={24} />}
              >
                Book a qoute
              </ButtonComponent>
            </div>
          </div>
        </div>

        {/* Right Grid */}
        <div className="mt-8 flex w-full basis-[55%] flex-col justify-center md:mt-0 md:h-[260px] lg:h-[390px] 2xl:h-[510px]">
          <div className="h-full w-full self-auto">
            <HeroCarousel autoplay />
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default HeroBanner
