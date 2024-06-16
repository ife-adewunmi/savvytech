import React from 'react';
import Image from "@/components/Image";

function Button() {
    return null;
}

const HeroBanner = () => {
    return (
        <div className="flex items-center w-[100%] h-[590px] mt-[80px] justify-between">
            {/* Left Grid */}
            <div className="w-[585px] h-full flex flex-col gap-[52px]">
                <div className="w-full h-[348px] flex flex-col gap-6">
                    {/* Content Title */}
                    <h1 className="font-gopher text-6xl text-black font-bold leading-[72px] tracking-[-0.5px]">
                        Engineering Excellence for Energy and Beyond
                    </h1>
                    {/* Content Description */}
                    <p className="font-openSans text-2xl leading-9">
                        From engineering to procurement, Savvytech Limited offers unparalleled expertise and reliable services to West Africa's vital industries.
                    </p>
                </div>
                <Button />
            </div>

            {/* Right Grid */}
            <div className="w-[823px] h-[590px]">
                <img
                    src="/images/ocean.jpeg"
                    alt="Hero Banner"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default HeroBanner;