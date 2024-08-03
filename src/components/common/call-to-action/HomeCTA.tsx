import React from 'react'
import ButtonComponent from '@/components/common/button/ButtonComponent'
import SectionContainer from '@/components/common/section/SectionContainer'

const HomeCTA = () => {
  return (
    <SectionContainer>
      <div className="relative mb-40 mt-[80px] rounded-3xl bg-red-800 text-white [clip-path:xywh(0_0_100%_100%_round_24px)] dark:bg-red-900 ">
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-between gap-2 px-8 py-6 md:flex-row md:px-14 md:py-6 lg:px-16 lg:py-10 xl:px-20 xl:py-14 2xl:px-32 2xl:py-24 ">
          {/* Left Grid */}
          <div className="h-full w-full basis-1/2   ">
            {/* Content Title */}
            <h1 className="xl:display-text-md lg:display-text-sm md:heading-text-lg heading-text-md-1 ">
              Premium Equipment with Unmatched Support
            </h1>
          </div>

          {/* Right Grid */}
          <div className="flex h-full w-full basis-1/2 flex-col gap-8">
            {/* Content Description */}
            <p className="xl:body-text-xl-2  body-text-sm-3 md:body-text-md-3">
              Connecting innovation with reliability for your most demanding projects. Trust
              Savvytech to deliver excellence in every detail.
            </p>
            <div className="hidden lg:block">
              <ButtonComponent
                buttonStyle={{ size: 'lg', padding: 'lg', color: 'white', align: 'left' }}
              >
                Book a qoute
              </ButtonComponent>
            </div>
            <div className="hidden md:block lg:hidden">
              <ButtonComponent
                buttonStyle={{ size: 'md', padding: 'md', color: 'white', align: 'left' }}
              >
                Book a qoute
              </ButtonComponent>
            </div>
            <div className="block md:hidden">
              <ButtonComponent
                buttonStyle={{ size: 'sm', padding: 'sm', color: 'white', align: 'left' }}
              >
                Book a qoute
              </ButtonComponent>
            </div>
          </div>
        </div>

        <div className="absolute -top-56 right-20 h-[300px] w-[300px] rounded-full  opacity-55 outline outline-[7rem] outline-red-500 " />
        <div className="absolute -bottom-56 left-20 h-[300px] w-[300px] rounded-full  opacity-55 outline outline-[7rem] outline-red-500 " />
      </div>
    </SectionContainer>
  )
}

export default HomeCTA
