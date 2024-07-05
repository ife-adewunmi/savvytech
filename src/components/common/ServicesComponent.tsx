import React from 'react'
import Image from 'next/image'
import { Service } from '@/data/servicesData'
import SectionContainer from '../SectionContainer'

interface WhatWeDoProps {
  servicesData: Array<Service>
  width?: number
  height?: number
}

const WhatWeDo = ({ servicesData, width, height }: WhatWeDoProps) => {
  return (
    <SectionContainer>
      <div className="container mx-auto px-4 py-12">
        <h2 className="mb-12 text-center text-3xl font-bold">What we do</h2>
        <div className="space-y-12">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
            >
              <div className="md:w-1/2">
                <Image
                  key={index}
                  className="w-full rounded-lg shadow-lg"
                  src={service?.imgSrc || ''}
                  alt={service.title}
                  width={width || 100}
                  height={height || 100}
                />
              </div>
              <div className="space-y-4 md:w-1/2">
                {/* <h3 className="text-xl font-semibold">{service.title}</h3> */}
                <p className="text-gray-600">{service.description}</p>
                <span className="inline-block rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800">
                  {service.buttonText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}

export default WhatWeDo
