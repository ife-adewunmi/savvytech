import Image from 'next/image'
import { Blog } from 'contentlayer/generated'
import SectionTitle from '@/components/common/section/SectionTitle'
import React from 'react'
import SectionContainer from '@/components/common/section/SectionContainer'
import { formatDate } from 'pliny/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'
import { CoreContent } from 'pliny/utils/contentlayer'
import Link from '@/components/Link'
import { IsoDateTimeString } from '@contentlayer2/core'

interface LatestNewsProps {
  postsData: CoreContent<Array<Blog>>
}

interface NewsItemProps {
  title: string
  slug: string
  date: IsoDateTimeString
  summary?: string
  images?: string
  structuredData: object
}

const MAX_DISPLAY = 3

const NewsItem = ({ title, slug, images, date, summary }: NewsItemProps) => (
  <div key={slug} className="overflow-hidden rounded-lg bg-white shadow-md">
    <Link
      href={`/blog/${slug}`}
      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      aria-label={`Read more: "${title}"`}
    >
      <Image
        src={images ?? ''}
        alt={title}
        width={400}
        height={300}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <time
          className="mb-2 text-sm text-gray-600"
          dateTime={date}
        >{`NEWS • ${formatDate(date, siteMetadata.locale)}`}</time>
        <SectionTitle tag={'h3'} text={title}></SectionTitle>
        <p className="text-gray-700">{summary}</p>
      </div>
    </Link>
  </div>
)

const LatestNewsComponent = ({ postsData }: LatestNewsProps) => {
  if (!postsData.length) return null

  return (
    <SectionContainer>
      <SectionTitle text={'Latest News'}></SectionTitle>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {postsData.slice(0, MAX_DISPLAY).map((item, index) => {
          return <NewsItem key={index} {...item} />
        })}
      </div>
    </SectionContainer>
  )
}

export default LatestNewsComponent
