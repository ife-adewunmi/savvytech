import React from 'react'
import { Project } from '@/data/products/projectsData'
import Image from '@/components/Image'
import SectionContainer from '../common/section/SectionContainer'
import { FaArrowRightLong } from 'react-icons/fa6'
import ButtonComponent from '../common/button/ButtonComponent'
import Link from '@/components/Link'
import SectionTitle from '@/components/common/section/SectionTitle'

interface OurProductProps {
  productsData: Array<Project>
}

const OurProduct = ({ productsData }: OurProductProps) => {
  return (
    <SectionContainer className="relative mb-40">
      <SectionTitle text={'Our Product'}></SectionTitle>
      <div className="2xl:px-28">
        <Link href={'/#'}>
          <div className="grid grid-cols-1 gap-6 md:gap-10 lg:grid-cols-2">
            {productsData.map((product, index) => (
              <div
                key={index}
                className="flex transform flex-col justify-between gap-6 rounded-3xl bg-white px-8 py-12 shadow-md
                          transition duration-300 ease-in-out hover:scale-105 hover:bg-card_gradient_hover hover:shadow-xl dark:bg-slate-700  dark:hover:bg-card_gradient_hover_dark"
              >
                <div>
                  <h3 className="heading-text-md-1 mb-4 text-neutral-800 dark:text-neutral-50">
                    {product.title}
                  </h3>
                  <p className="md:body-text-lg-3 body-text-md-3 text-neutral-500 dark:text-neutral-100">
                    {product.description}
                  </p>
                  <div className="mt-2">
                    <ButtonComponent
                      buttonStyle={{ size: 'sm', padding: 'xs', color: 'text_link', align: 'left' }}
                      rightIcon={<FaArrowRightLong size={16} />}
                    >
                      Read more
                    </ButtonComponent>
                  </div>
                </div>
                <div className="self-end">
                  <Image
                    src={product.logo || ''}
                    alt={`${product.title} logo`}
                    className="float-end mt-4 h-14 w-48 object-contain"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            ))}
          </div>
        </Link>
      </div>
    </SectionContainer>
  )
}

export default OurProduct
