import React from 'react'
import Image from 'next/image'
import { Client } from '@/data/clientsData'
import { ContactInfoData } from '@/data/contact/contactData'
import SectionContainer from '@/components/common/section/SectionContainer'
import SectionTitle from '@/components/common/section/SectionTitle'

interface ContactInfoProps {
  contactData: ContactInfoData
}

const ContactInfo = ({ contactData }: ContactInfoProps) => {
  return (
    <SectionContainer className="relative my-20 lg:my-40">
      <div className="mx-auto mb-16">
        <SectionTitle text={contactData.title} tag="h4" className={'mb-8 text-left'} />
        <p className="lg:body-text-2xl-3 md:body-text-xl-3 body-text-lg-3 space-y-14 md:space-y-12">
          {contactData.description}
        </p>
      </div>
      <div className="">
        {contactData.content.map((contact, index) => (
          <div key={index} className="">
            <div>{contact.title} </div>
            <div>{contact.address} </div>
            <div>{contact.email} </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}

export default ContactInfo
