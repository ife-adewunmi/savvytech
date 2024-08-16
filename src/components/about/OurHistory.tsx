import React from 'react'
import SectionTitle from '@/components/common/section/SectionTitle'
import { AboutBase } from '@/data/authors/aboutData'

interface OurHistoryProps {
  ourHistoryData: AboutBase
}

const OurHistory = ({ ourHistoryData }: OurHistoryProps) => {
  return (
    <div className="relative my-20 bg-neutral-50 py-20 dark:bg-neutral-800 lg:my-40 2xl:px-80 ">
      <div className="header-wrapper mx-auto">
        <SectionTitle text={ourHistoryData.title} tag="h1" className={''} />
        <p className="space-y-14 md:space-y-12">{ourHistoryData.description}</p>
      </div>
    </div>
  )
}

export default OurHistory
