import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import Image from 'next/image'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import { contactHeroData } from '@/data/hero/hero-data'
import ContactUsHero from '@/components/common/hero/ContactUsHero'
import ContactUsBody from '@/components/contact/ContactUsBody'
import { contactFaqData } from '@/data/contact/contact-data'
import ContactFAQ from '@/components/contact/ContactFAQ'
import React from 'react'

export const metadata = genPageMetadata({ title: 'Contact' })

export default function Page() {
  return (
    <>
      <ContactUsHero heroData={contactHeroData} />
      <ContactUsBody />
      <ContactFAQ faqData={contactFaqData} />
    </>
  )
}
