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
  <div key={slug} className="overflow-hidden rounded-3xl bg-white dark:bg-slate-700 shadow-md">
    <Link
      href={`/blog/${slug}`}
      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      aria-label={`Read more: "${title}"`}
    >
      <Image
        src={images ?? '/static/images/svgs/logo.svg'}
        alt={title}
        width={400}
        height={300}
        className="h-48 w-full object-cover"
      />
      <div className="px-6 pt-4 pb-8">
        <time
          className="label-text-md-1 text-sm text-neutral-400 dark:text-neutral-100"
          dateTime={date}
        >{`new • ${formatDate(date, siteMetadata.locale)}`}</time>
        <div className="mt-2">
          <SectionTitle tag={'h2'} text={title}></SectionTitle>
          <p className="body-text-md-3 line-clamp-3 text-neutral-500 dark:text-neutral-100">
            {summary}
          </p>
        </div>
      </div>
    </Link>
  </div>
)

const LatestNewsComponent = ({ postsData }: LatestNewsProps) => {
  if (!postsData.length) return null

  return (
    <SectionContainer>
      <SectionTitle text={'Latest News'}></SectionTitle>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {postsData.slice(0, MAX_DISPLAY).map((item, index) => {
          return <NewsItem key={index} {...item} />
        })}
      </div>
    </SectionContainer>
  )
}

export default LatestNewsComponent
