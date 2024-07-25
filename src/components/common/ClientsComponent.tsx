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
    <SectionContainer>
      <SectionTitle
        text={'Trusted in the industry by'}
        tag="h3"
        className="mb-14 text-center"
      ></SectionTitle>
      <div className="trusted-by-client-logos">
        {clientsData.map((client, index) => (
          <Image
            key={index}
            src={`/static/images/svgs/clients/${client.name}.svg`}
            alt={`Client Logo ${index + 1}`}
            width={client.width || 225}
            height={client.height || 48}
            className="h-12 w-full"
          />
        ))}
      </div>
    </SectionContainer>
  )
}

export default TrustedBy
