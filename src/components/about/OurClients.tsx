import React from 'react'
import Image from 'next/image'
import { Client } from '@/data/clientsData'
import SectionContainer from '@/components/common/section/SectionContainer'
import SectionTitle from '@/components/common/section/SectionTitle'

interface ClientsProps {
  clientsData: Client
}

const OurClients = ({ clientsData }: ClientsProps) => {
  return (
    <SectionContainer className="relative my-20 hidden md:block lg:my-40">
      <div className="header-wrapper mx-auto mb-16">
        <SectionTitle text={clientsData.title} tag="h4" className={'mb-8 text-left'} />
        <p className="lg:body-text-2xl-3 md:body-text-xl-3 body-text-lg-3 space-y-14 md:space-y-12">
          {clientsData.description}
        </p>
      </div>
      <div className="opacity-90">
        {clientsData.clients.map((client, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="body-text-lg-1">{client}</div>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}

export default OurClients
