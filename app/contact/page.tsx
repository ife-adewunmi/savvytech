import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import Image from 'next/image'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import { contactHeroData } from '@/data/hero/heroData'
import ContactUsHero from '@/components/common/hero/ContactUsHero'
import ContactUsBody from '@/components/contact/ContactUsBody'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <ContactUsHero heroData={contactHeroData} />
      <ContactUsBody />
    </>
  )
}
