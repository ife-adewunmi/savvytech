import React from 'react'
import Image from 'next/image'
import { Product, productsData } from '@/data/products/productsData'
import NotFound from '../../not-found'
import Link from '@/components/Link'
import { Page } from '@/enums/page'

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.href ? product.href.split('/').pop() : '',
  }))
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product: Product | undefined = productsData.find((p) =>
    p.href ? p.href.split('/').pop() === params.slug : ''
  )
  if (!product) {
    return <NotFound />
  }

  return (
    <>
      {!!product.content &&
        product.content.map((content, index) => (
          <div className="flex min-h-screen flex-col">
            <div className="sticky top-0 z-0 h-screen">
              <p className="mb-4 text-sm text-gray-500">
                <Link href={Page.PRODUCT}>Products </Link>
                <span>/ {content.breadcrumb?.toUpperCase() || product.title.toLowerCase()}</span>
              </p>

              <div className="mb-12">
                <h1 className="mb-4 text-5xl font-bold text-white">{product.title}</h1>
                <p className="mb-6 text-xl text-white">{product.description}</p>
                <button className="rounded bg-white px-6 py-2 font-semibold text-blue-600 transition duration-300 hover:bg-blue-50">
                  CONTACT US
                </button>
              </div>

              {/*<div className="absolute inset-0 bg-blue-600">*/}
              {/*    <Image*/}
              {/*        src={product.logo}*/}
              {/*        alt={product.title}*/}
              {/*        layout="fill"*/}
              {/*        objectFit="cover"*/}
              {/*        className="mix-blend-overlay opacity-50"*/}
              {/*    />*/}
              {/*</div>*/}
            </div>

            {/* Content Section */}
            <div className="relative z-10 mt-[80vh] bg-white">
              <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                {!!content.pageContent &&
                  content.pageContent.map((item, index) => (
                    <div key={index} className="mb-8 flex items-start rounded-lg bg-gray-100 p-6">
                      <div className="w-1/3 pr-6">
                        <div className="h-48 w-full rounded-lg bg-gray-300">
                          {/* Placeholder for product image */}
                        </div>
                      </div>
                      <div className="w-2/3">
                        <h2 className="mb-4 text-2xl font-semibold text-gray-900">{item.title}</h2>
                        {content.contentElement === 'li' && item.description.includes('•') ? (
                          <ul className="list-disc pl-5 text-gray-700">
                            {item.description
                              .split('•')
                              .filter(Boolean)
                              .map((point, idx) => (
                                <li key={idx}>{point}</li>
                              ))}
                          </ul>
                        ) : (
                          <p className="text-gray-700">{item.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
    </>
  )
}
