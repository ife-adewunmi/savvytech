import React from 'react'
import Image from 'next/image'
import { Client } from '@/data/clientsData'
import SectionContainer from '../SectionContainer'

interface TrustedByProps {
  clientsData: Array<Client>
  width?: number
  height?: number
}

const TrustedBy = ({ clientsData, width, height }: TrustedByProps) => {
  return (
    <SectionContainer>
      <h2 className="trusted-by-title ">Trusted in the industry by</h2>
      <div className="trusted-by-client-logos">
        {clientsData.map((client, index) => (
          <Image
            key={index}
            src={`/static/images/svgs/clients/${client.name}.svg`}
            alt={`Client Logo ${index + 1}`}
            width={client.width || 225}
            height={client.height || 48}
            className='h-12 w-full'
          />
        ))}
      </div>
    </SectionContainer>
  )
}

export default TrustedBy
