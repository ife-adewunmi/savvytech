import React from 'react'
import Image from 'next/image'
import { Client } from '@/data/clientsData'
import SectionContainer from './section/SectionContainer'
import SectionTitle from '@/components/common/section/SectionTitle'

interface TrustedByProps {
  clientsData: Array<Client>
  width?: number
  height?: number
}

const TrustedBy = ({ clientsData, width, height }: TrustedByProps) => {
  return (
    <SectionContainer className="relative hidden md:block">
      <SectionTitle
        text={'Trusted in the industry by'}
        tag="h3"
        className="mb-14 text-center"
      ></SectionTitle>
      <div className="trusted-by-client-logos opacity-90">
        {clientsData.map((client, index) => (
          <>
            <Image
              key={index}
              src={`/static/images/svgs/clients/${client.name}.svg`}
              alt={`Client Logo ${index + 1}`}
              width={client.width || 225}
              height={client.height || 40}
              className="hidden h-10 w-fit lg:block"
            />
            <Image
              key={index}
              src={`/static/images/svgs/clients/${client.name}_sm.svg`}
              alt={`Client Logo ${index + 1}`}
              width={client.width || 100}
              height={client.height || 24}
              className="hidden h-6 w-fit md:block lg:hidden"
            />
          </>
        ))}
      </div>
    </SectionContainer>
  )
}

export default TrustedBy
