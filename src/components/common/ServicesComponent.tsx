import React from 'react'
import Image from 'next/image'
import { Service } from '@/data/products/servicesData'
import ButtonComponent from '@/components/common/button/ButtonComponent'
import SectionTitle from '@/components/common/section/SectionTitle'

interface WhatWeDoProps {
  servicesData: Array<Service>
  width?: number
  height?: number
}

const WhatWeDo = ({ servicesData, width, height }: WhatWeDoProps) => {
  return (
    <div className="relative my-20 bg-neutral-50 py-20 dark:bg-neutral-800 lg:my-40 2xl:px-80 ">
      <div className="header-wrapper mx-auto">
        <SectionTitle text={'What we do'}></SectionTitle>
        <div className="space-y-14 md:space-y-12">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-14`}
            >
              <div className="overflow-hidden rounded-3xl md:w-1/2">
                <Image
                  key={index}
                  className="w-full rounded-3xl bg-cover bg-center object-cover shadow-lg transition duration-500 hover:scale-110"
                  src={service?.imgSrc || ''}
                  alt={service.title}
                  width={width || 400}
                  height={height || 400}
                  quality={100}
                />
              </div>
              <div className="space-y-4 md:w-1/2">
                {/* <h3 className="text-xl font-semibold">{service.title}</h3> */}
                <p className=" 2xl:body-text-xl-3 body-text-md-3 xl:body-text-lg-3">
                  {service.description}
                </p>

                <div className="hidden md:block">
                  <ButtonComponent
                    buttonStyle={{ size: 'md', padding: 'md', color: 'outline', align: 'left' }}
                  >
                    {service.buttonText}
                  </ButtonComponent>
                </div>
                <div className="block md:hidden">
                  <ButtonComponent
                    buttonStyle={{ size: 'sm', padding: 'sm', color: 'outline', align: 'left' }}
                  >
                    {service.buttonText}
                  </ButtonComponent>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo
