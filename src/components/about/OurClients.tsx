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
    <SectionContainer className="relative hidden md:block">
      <SectionTitle text={clientsData.title} tag="h3" className="mb-14 text-center"></SectionTitle>
      <div className="our-client opacity-90">
        {clientsData.clients.map((client, index) => (
          <></>
        ))}
      </div>
    </SectionContainer>
  )
}

export default OurClients
