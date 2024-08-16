import React from 'react'
import SectionContainer from '@/components/common/section/SectionContainer'
import { Hero } from '@/data/hero/heroData'
import HeroImage from '@/components/common/hero/HeroImage'

interface AboutHeroProps {
  heroData: Hero
}

const AboutUsHeroBanner = ({ heroData }: AboutHeroProps) => {
  return (
    <SectionContainer className="mt-14 xl:mt-28">
      <div className=" relative flex  w-full flex-col items-center justify-between md:flex-row">
        <div className="z-0 flex h-full w-full basis-1/2 flex-col justify-center xl:pr-7 2xl:pr-9  ">
          <div className="flex w-full flex-col gap-8 lg:gap-14">
            <div className="flex w-full flex-col gap-4 lg:gap-6">
              <h1 className="2xl:display-text-lg xl:display-text-md heading-text-lg lg:display-text-sm text-neutral-900 dark:text-neutral-10">
                {heroData.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="mt-8 flex h-72 w-full flex-col justify-center md:mt-0 md:h-[260px] md:basis-[55%] lg:h-[390px] 2xl:h-[510px]">
          <div className="h-full w-full self-auto">
            <HeroImage />
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default AboutUsHeroBanner
