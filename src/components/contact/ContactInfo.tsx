import React from 'react'
import { ContactInfoData, OurInfoContent } from '@/data/contact/contact-data'
import SectionTitle from '@/components/common/section/SectionTitle'
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'

interface ContactInfoProps {
  contactData: ContactInfoData
}

const OfficeInfo = ({ title, address, phone, email }: OurInfoContent) => {
  return (
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 flex items-start">
        <FaMapMarkerAlt className="mr-2 mt-1 flex-shrink-0" />
        {address}
      </p>
      {phone && (
        <p className="mt-1 flex items-center">
          <AiOutlinePhone className="mr-2 flex-shrink-0" />
          {phone.join(' | ')}
        </p>
      )}
      {email && (
        <p className="mt-1 flex items-center">
          <AiOutlineMail className="mr-2 flex-shrink-0" />
          {email}
        </p>
      )}
    </div>
  )
}

const ContactInfo = ({ contactData }: ContactInfoProps) => {
  return (
    <>
      <div className="mx-auto mb-16">
        <SectionTitle text={contactData.title} tag="h4" className={'mb-8 text-left'} />
        <p className="lg:body-text-2xl-3 md:body-text-xl-3 body-text-lg-3 space-y-14 md:space-y-12">
          {contactData.description}
        </p>
      </div>
      <div className="space-y-6">
        {contactData.content.map((offices, index) => (
          <div key={index} className="">
            <OfficeInfo {...offices} />
          </div>
        ))}

        <div className="mt-6 flex space-x-4">
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="x" href={siteMetadata.x} size={6} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
        </div>
      </div>
    </>
  )
}

export default ContactInfo
