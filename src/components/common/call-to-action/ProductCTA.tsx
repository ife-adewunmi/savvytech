import React from 'react'
import ButtonComponent from '@/components/common/button/ButtonComponent'
import SectionContainer from '@/components/common/section/SectionContainer'

const ProductCTA = () => {
  return (
    <SectionContainer>
      <div className="relative mb-40 mt-[80px] rounded-3xl bg-primary-900 text-neutral-10 [clip-path:xywh(0_0_100%_100%_round_24px)] dark:bg-red-900 ">
        <div className="relative z-10 flex h-full w-full items-center justify-between px-20 py-16 ">
          {/* Left Grid */}
          {/* Content Title */}
          <h1 className="body-text-2xl-1">FOR SERVICES, SALES AND SUPPORT, GET TO US.</h1>

          {/* Right Grid */}

          {/* Content Description */}
          <div>
            <ButtonComponent
              buttonStyle={{ size: 'lg', padding: 'lg', color: 'white', align: 'left' }}
            >
              Book a qoute
            </ButtonComponent>
          </div>
        </div>

        {/* <div className="absolute -top-56 right-20 h-[300px] w-[300px] rounded-full  opacity-55 outline outline-[7rem] outline-red-500 " /> */}
        <div className="absolute -bottom-56 left-20 h-[300px] w-[300px] rounded-full  opacity-55 outline outline-[7rem] outline-primary-500 " />
      </div>
    </SectionContainer>
  )
}

export default ProductCTA
