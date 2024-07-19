import React from 'react'
import { Project } from '@/data/projectsData'
import Image from '@/components/Image'
import SectionContainer from '../SectionContainer'
import { FaArrowRightLong } from 'react-icons/fa6'
import ButtonComponent from '../common/button/ButtonComponent'
import Link from '@/components/Link'

interface OurProductProps {
  products: Array<Project>
}

const OurProduct = ({ products }: OurProductProps) => {
  return (
    <SectionContainer className="relative mb-40 xl:px-16">
      <Link href={'#'}>
        <h2 className="display-text-sm mb-14 text-center text-neutral-800 dark:text-neutral-100">
          Our Product
        </h2>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex transform flex-col justify-between gap-6 rounded-3xl bg-white px-8 py-12
                          shadow-md transition duration-300 ease-in-out hover:scale-105 hover:bg-card_gradient_hover hover:shadow-xl"
            >
              <div>
                <h3 className="heading-text-md-1 mb-4 text-neutral-800 dark:text-neutral-100">
                  {product.title}
                </h3>
                <p className="body-text-lg-3 text-neutral-500 dark:text-neutral-300">
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
    </SectionContainer>
  )
}

export default OurProduct
