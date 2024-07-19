import React from 'react'
import Image from 'next/image'
import { Service } from '@/data/servicesData'
// import SectionContainer from '../SectionContainer'
import LayoutContainer from '../LayoutContainer'
import ButtonComponent from './button/ButtonComponent'

interface WhatWeDoProps {
  servicesData: Array<Service>
  width?: number
  height?: number
}

const WhatWeDo = ({ servicesData, width, height }: WhatWeDoProps) => {
  return (
    <div className="my-40 bg-neutral-50 px-72 py-20 dark:bg-neutral-800">
      <div className="container mx-auto">
        <h2 className="display-text-sm mb-14 text-center">What we do</h2>
        <div className="space-y-12">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-14`}
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
                <p className="body-text-2xl-3  ">{service.description}</p>
                <ButtonComponent
                  buttonStyle={{ size: 'md', padding: 'md', color: 'outline', align: 'left' }}
                >
                  {service.buttonText}
                </ButtonComponent>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo
