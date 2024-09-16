'use client'
import React, { useEffect, useState } from 'react'
import { ProductPageInterface, productsData } from '@/data/products/productsData'
import NotFound from '../../not-found'
import ProductHero from '@/components/common/hero/ProductHero'

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const product: ProductPageInterface | undefined = productsData.find((p) =>
    p.href ? p.href.split('/').pop() === params.slug : ''
  )
  if (!product) {
    return <NotFound />
  }

  if (!isClient) return null

  return (
    <>
      {!!product.content &&
        product.content.map((content, index) => (
          <div key={index} className="">
            <ProductHero product={product} content={content} />

            {/* Content Section */}
            <div className=" h-full bg-white">
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
