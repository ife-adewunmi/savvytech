import React from 'react'
import Image from 'next/image'
import SectionContainer from '@/components/common/section/SectionContainer'
import { ourHistoryData, ourPassionData } from '@/data/abouts/about-data'
import OurHistory from '@/components/about/OurHistory'
import OurPassion from '@/components/about/OurPassion'
import LayoutContainer from '@/components/LayoutContainer'
import OurClients from '@/components/about/OurClients'
import { clientsData } from '@/data/abouts/clients-data'

const AboutUsBody = () => {
  return (
    <>
      <SectionContainer>
        <OurHistory ourHistoryData={ourHistoryData} />

        <OurPassion ourPassionData={ourPassionData} />
      </SectionContainer>

      <LayoutContainer className={'relative h-[25rem] lg:h-[35rem]'}>
        <Image
          src={'/static/images/about/solar_view.jpg'}
          alt={`logo`}
          className="h-full object-cover"
          style={{ objectFit: 'cover' }}
          fill
        />
      </LayoutContainer>

      <OurClients clientsData={clientsData} />
    </>
  )
}

export default AboutUsBody
