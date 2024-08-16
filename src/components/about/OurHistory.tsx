import React from 'react'
import Image from 'next/image'
import { Service } from '@/data/products/servicesData'
import ButtonComponent from '@/components/common/button/ButtonComponent'
import SectionTitle from '@/components/common/section/SectionTitle'
import { AboutBaseInterface } from '@/data/authors/aboutData'

interface OurHistoryProps {
  ourHistoryData: AboutBaseInterface
}

const OurHistory = ({ ourHistoryData }: OurHistoryProps) => {
  return (
    <div className="relative my-20 bg-neutral-50 py-20 dark:bg-neutral-800 lg:my-40 2xl:px-80 ">
      <div className="header-wrapper mx-auto">
        <SectionTitle text={ourHistoryData.title} tag="h1" className={''} />
        <p className="space-y-14 md:space-y-12"></p>
      </div>
    </div>
  )
}

export default OurHistory
