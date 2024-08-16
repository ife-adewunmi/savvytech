import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import AboutUsHeroBanner from '@/components/common/hero/AboutUsHero'
import { aboutHeroData } from '@/data/hero/heroData'
import AboutUsBody from '@/components/about/AboutUsBody'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AboutUsHeroBanner heroData={aboutHeroData} />
      <AboutUsBody />

      {/*<AuthorLayout content={mainContent}>*/}
      {/*  <MDXLayoutRenderer code={author.body.code} />*/}
      {/*</AuthorLayout>*/}
    </>
  )
}
