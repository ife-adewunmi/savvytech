import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import ButtonComponent from '@/components/common/button/ButtonComponent'

const HomeCTA = () => {
  return (
    <div className=" relative mb-40 mt-[80px] flex h-[590px] w-full items-center justify-between pl-52 pr-6">
      {/* Left Grid */}
      <div className="z-50 flex h-full w-full basis-1/2 flex-col justify-center pr-32 ">
        <div className="flex w-full flex-col gap-14">
          <div className="flex w-full flex-col gap-6">
            {/* Content Title */}
            <h1 className="display-text-lg">Engineering Excellence for Energy and Beyond</h1>
          </div>
        </div>
      </div>

      {/* Right Grid */}
      <div className="h-full w-full basis-[50%]">
        {/* Content Description */}
        <p className="body-text-2xl-3">
          From engineering to procurement, Savvytech Limited offers unparalleled expertise and
          reliable services to West Africa's vital industries.
        </p>
        <ButtonComponent
          buttonStyle={{ size: 'lg', padding: 'lg', color: 'primary', align: 'left' }}
          rightIcon={<FaArrowRightLong size={24} />}
        >
          Book a qoute
        </ButtonComponent>
      </div>
    </div>
  )
}

export default HomeCTA
