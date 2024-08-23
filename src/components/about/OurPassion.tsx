import React from 'react'
import Image from 'next/image'
import { Service } from '@/data/products/servicesData'
import SectionTitle from '@/components/common/section/SectionTitle'
import { Passion } from '@/data/authors/aboutData'
import { AiFillSetting, AiFillLike, AiFillShopping } from 'react-icons/ai'
import { RiVerifiedBadgeFill } from 'react-icons/ri'

interface OurHistoryProps {
  ourPassionData: Passion
}

const OurPassion = ({ ourPassionData }: OurHistoryProps) => {
  return (
    <div className="relative my-20 border-y-2  border-neutral-100 py-28 lg:my-40">
      <div className=" mx-auto mb-16">
        <SectionTitle text={ourPassionData.title} tag="h4" className={'mb-8 text-left'} />
        <p className="lg:body-text-2xl-3 md:body-text-xl-3 body-text-lg-3 space-y-14 md:space-y-12">
          {ourPassionData.description}
        </p>
      </div>
      <div className="grid transform grid-cols-1 justify-between gap-6 md:grid-cols-2 xl:grid-cols-4 ">
        {ourPassionData.attributes.map((passion, index) => (
          <div
            key={index}
            className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-md dark:bg-neutral-800"
          >
            <div className="rounded bg-purple-50 p-4 dark:bg-neutral-400">
              {passion.icon === 'wheel' && (
                <AiFillSetting size={passion.iconSize} color={passion.iconColour} />
              )}
              {passion.icon === 'bag' && (
                <AiFillShopping size={passion.iconSize} color={passion.iconColour} />
              )}
              {passion.icon === 'verify' && (
                <RiVerifiedBadgeFill size={passion.iconSize} color={passion.iconColour} />
              )}
              {passion.icon === 'thumb' && (
                <AiFillLike size={passion.iconSize} color={passion.iconColour} />
              )}
            </div>
            <div className="body-text-lg-1">{passion.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurPassion
