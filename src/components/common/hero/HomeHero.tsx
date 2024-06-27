import React from 'react';
import HeroCarousel from "@/components/common/hero/HeroCarousel";

function Button() {
  return null
}

const HeroBanner = () => {
  return (
    <div className="flex items-center w-[100%] h-[590px] mt-[80px] justify-between">
        {/* Left Grid */}
        <div className="w-[585px] h-full flex flex-col gap-[52px]">
            <div className="w-full h-[348px] flex flex-col gap-6">
                {/* Content Title */}
                <h1 className="display-text-xl">
                    Engineering Excellence for Energy and Beyond
                </h1>

                {/* Content Description */}
                <p className="body-text-2xl-3">
                    From engineering to procurement, Savvytech Limited offers unparalleled expertise and reliable services to West Africa's vital industries.
                </p>
            </div>
        </div>

        {/* Right Grid */}
        <div className="w-[823px] h-[590px]">
            <HeroCarousel autoplay />
        </div>
    </div>
  )
}

export default HeroBanner
