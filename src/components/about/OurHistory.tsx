import React from 'react'
import SectionTitle from '@/components/common/section/SectionTitle'
import { AboutBase } from '@/data/abouts/about-data'

interface OurHistoryProps {
  ourHistoryData: AboutBase
}

const OurHistory = ({ ourHistoryData }: OurHistoryProps) => {
  return (
    <div className="relative my-20 lg:my-40  ">
      <div className="mx-auto">
        <SectionTitle text={ourHistoryData.title} tag="h4" className={'mb-8 text-left'} />
        <p className="lg:body-text-2xl-3 md:body-text-xl-3 body-text-lg-3 space-y-14 md:space-y-12">
          {ourHistoryData.description}
        </p>
      </div>
    </div>
  )
}

export default OurHistory
