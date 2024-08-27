import { genPageMetadata } from 'app/seo'
import { productsData } from '@/data/products/productsData'
import SectionTitle from '@/components/common/section/SectionTitle'
import Link from '@/components/Link'
import SectionContainer from '@/components/common/section/SectionContainer'
import React from 'react'
import ProductCard from '@/components/product/ProductCard'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <SectionContainer className="relative mb-40">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <SectionTitle
            tag={'h1'}
            text={'Products'}
            className={
              'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 ' +
              'dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'
            }
          ></SectionTitle>
        </div>
        <div className="2xl:px-28">
          <Link href={'/#'}>
            <div className="grid grid-cols-1 gap-6 md:gap-10 lg:grid-cols-2">
              {productsData.map((product, index) => (
                <ProductCard index={index} product={product} />
              ))}
            </div>
          </Link>
        </div>
      </div>
    </SectionContainer>
  )
}
