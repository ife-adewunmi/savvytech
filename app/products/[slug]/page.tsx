'use client'
import React, { useEffect, useState } from 'react'
import { Product, productsData } from '@/data/products/productsData'
import NotFound from '../../not-found'
import Link from '@/components/Link'
import { Page } from '@/enums/page'
import Image from 'next/image'
import ButtonComponent from '@/components/common/button/ButtonComponent'
import SectionContainer from '@/components/common/section/SectionContainer'

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const product: Product | undefined = productsData.find((p) =>
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
            <div
              className={`${product.color} fixed top-0 -z-50 h-full w-full bg-secondary-900 lg:w-2/4`}
            />
            <SectionContainer className="mt-14 min-h-96 xl:mt-28">
              <div className="header-wrapper-2 fixed -z-20 mx-auto flex flex-col lg:flex-row">
                <div className="flex basis-1/2 flex-col text-center text-neutral-10 lg:p-6 lg:text-start">
                  <p className="cta-text-sm mb-12">
                    <Link href={Page.PRODUCT}>Products </Link>
                    <span>
                      / {content.breadcrumb?.toUpperCase() || product.title.toLowerCase()}
                    </span>
                  </p>

                  <div className="">
                    <div className="mb-8">
                      <h1 className="xl:display-text-lg display-text-sm lg:display-text-md  mb-6 font-bold">
                        {product.title}
                      </h1>
                      <p className="body-text-2xl-3">{product.description}</p>
                    </div>
                    <div className="hidden lg:block">
                      <ButtonComponent
                        buttonStyle={{ size: 'lg', padding: 'lg', color: 'white', align: 'left' }}
                      >
                        Contact us
                      </ButtonComponent>
                    </div>
                    <div className="hidden md:block lg:hidden">
                      <ButtonComponent
                        buttonStyle={{ size: 'md', padding: 'md', color: 'white', align: 'left' }}
                      >
                        Contact us
                      </ButtonComponent>
                    </div>
                    <div className="block md:hidden">
                      <ButtonComponent
                        buttonStyle={{ size: 'sm', padding: 'sm', color: 'white', align: 'left' }}
                      >
                        Contact us
                      </ButtonComponent>
                    </div>
                  </div>
                </div>
                <div className="w-full basis-1/2 p-16">
                  <div className="h-full">
                    <div className="grid h-full grid-cols-1 gap-4">
                      <div
                        key={1}
                        className={`h-full rounded-2xl ${product.logo} bg-contain bg-right  bg-no-repeat`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SectionContainer>

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
