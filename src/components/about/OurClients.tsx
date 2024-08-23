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
    <SectionContainer className="relative my-20 lg:my-40">
      <div className="mx-auto mb-16">
        <SectionTitle text={clientsData.title} tag="h4" className={'mb-8 text-left'} />
        <p className="lg:body-text-2xl-3 md:body-text-xl-3 body-text-lg-3 space-y-14 md:space-y-12">
          {clientsData.description}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2 lg:grid-cols-3 ">
        {clientsData.clients.map((client, index) => (
          <div key={index} className="">
            <div className="lg:body-text-xl-1 md:body-text-lg-1 body-text-md-1">{client}</div>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}

export default OurClients
