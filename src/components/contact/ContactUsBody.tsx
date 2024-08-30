import React from 'react'
import Image from 'next/image'
import ButtonComponent from '@/components/common/button/ButtonComponent'
import SectionContainer from '@/components/common/section/SectionContainer'
import { ourContactInfo } from '@/data/contact/contactData'
import OurHistory from '@/components/about/OurHistory'
import OurPassion from '@/components/about/OurPassion'
import LayoutContainer from '@/components/LayoutContainer'
import ContactInfo from '@/components/contact/ContactInfo'
import { clientsData } from '@/data/clientsData'
import ContactForm from '@/components/contact/ContactForm'

const ContactUsBody = () => {
  return (
    <>
      <ContactInfo contactData={ourContactInfo} />
      <ContactForm />
    </>
  )
}

export default ContactUsBody
