import React from 'react'
import ButtonComponent from '@/components/common/button/ButtonComponent'
import SectionContainer from '@/components/SectionContainer'

const HomeCTA = () => {
  return (
    <SectionContainer>
      <div className="relative mb-40 mt-[80px] rounded-3xl bg-red-800 text-white [clip-path:xywh(0_0_100%_100%_round_24px)] dark:bg-red-900 ">
        <div className="relative z-10 flex h-full w-full items-center justify-between px-32 py-24 ">
          {/* Left Grid */}
          <div className="h-full w-full basis-1/2   ">
            {/* Content Title */}
            <h1 className="display-text-md">Premium Equipment with Unmatched Support</h1>
          </div>

          {/* Right Grid */}
          <div className="flex h-full w-full basis-1/2 flex-col gap-8">
            {/* Content Description */}
            <p className="body-text-xl-2">
              Connecting innovation with reliability for your most demanding projects. Trust
              Savvytech to deliver excellence in every detail.
            </p>
            <ButtonComponent
              buttonStyle={{ size: 'lg', padding: 'lg', color: 'white', align: 'left' }}
            >
              Book a qoute
            </ButtonComponent>
          </div>
        </div>

        <div className="absolute -top-56 right-20 h-[300px] w-[300px] rounded-full  opacity-55 outline outline-[7rem] outline-red-500 " />
        <div className="absolute -bottom-56 left-20 h-[300px] w-[300px] rounded-full  opacity-55 outline outline-[7rem] outline-red-500 " />
      </div>
    </SectionContainer>
  )
}

export default HomeCTA
