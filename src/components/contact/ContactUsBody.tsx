import React from 'react'
import { ourContactInfo } from '@/data/contact/contact-data'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactForm from '@/components/contact/ContactForm'
import SectionContainer from '@/components/common/section/SectionContainer'

const ContactUsBody = () => {
  return (
    <SectionContainer className="relative my-20 flex lg:my-40">
      <div className="w-full md:w-1/2">
        <ContactInfo contactData={ourContactInfo} />
      </div>

      <div className="w-full md:w-1/2">
        <ContactForm />
      </div>
    </SectionContainer>
  )
}

export default ContactUsBody
