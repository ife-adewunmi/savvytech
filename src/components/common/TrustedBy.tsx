import React from 'react'
import Image from 'next/image'
import { TrustedClient } from '@/data/clientsData'
import SectionContainer from '@/components/common/section/SectionContainer'
import SectionTitle from '@/components/common/section/SectionTitle'

interface TrustedByProps {
  trustedByData: TrustedClient
  width?: number
  height?: number
}

const renderImage = (key, client, width = 225, height = 40) => {
  return (
    <Image
      key={key}
      src={`/static/images/svgs/clients/${client.name}.svg`}
      alt={`Client Logo ${key + 1}`}
      width={client.width || width}
      height={client.height || height}
      style={{ width: 'auto', height: 'auto' }}
    />
  )
}

const TrustedBy = ({ trustedByData, width, height }: TrustedByProps) => {
  return (
    <SectionContainer className="relative hidden md:block">
      <SectionTitle
        text={trustedByData.title}
        tag="h3"
        className="mb-14 text-center"
      ></SectionTitle>
      <div className="trusted-by-client-logos opacity-90">
        {trustedByData.clients.map((client, index) => (
          <>
            <div className="hidden h-10 w-fit lg:block">{renderImage(index, client)}</div>
            <div className="hidden h-6 w-fit md:block lg:hidden">
              {renderImage(index, client, 100, 24)}
            </div>
          </>
        ))}
      </div>
    </SectionContainer>
  )
}

export default TrustedBy
