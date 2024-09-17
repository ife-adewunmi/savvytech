import React from 'react'
import SectionContainer from '@/components/common/section/SectionContainer'
import HeroImage from '@/components/common/hero/HeroImage'
import Link from '@/components/Link'
import { Page } from '@/enums/page'
import ButtonComponent from '@/components/common/button/ButtonComponent'
import { ProductContent, ProductPageInterface } from '@/data/products/productsData'

interface ProductHeroProps {
  product: ProductPageInterface
  content: ProductContent
}

const renderButton = (size: string) => {
  return (
    <ButtonComponent buttonStyle={{ size: size, padding: size, color: 'white', align: 'left' }}>
      Contact us
    </ButtonComponent>
  )
}

const ProductHero = ({ product, content }: ProductHeroProps) => {
  return (
    <>
      <div
        className={`${product.color || 'bg-secondary-900'} fixed top-0 -z-50 h-full w-full lg:w-2/4`}
      />
      <SectionContainer className="mt-14 min-h-96 xl:mt-28">
        <div className="header-wrapper-2 fixed -z-20 mx-auto flex flex-col lg:flex-row">
          <div className="flex basis-1/2 flex-col text-center text-neutral-10 lg:p-6 lg:text-start">
            <p className="cta-text-sm mb-12">
              <Link href={Page.PRODUCT}>Products </Link>
              <span>/ {content.breadcrumb?.toUpperCase() || product.title.toLowerCase()}</span>
            </p>

            <div className="">
              <div className="mb-8">
                <h1 className="xl:display-text-lg display-text-sm lg:display-text-md  mb-6 font-bold">
                  {product.title}
                </h1>
                <p className="body-text-2xl-3">{product.description}</p>
              </div>
              <div className="hidden lg:block">{renderButton('lg')}</div>
              <div className="hidden md:block lg:hidden">{renderButton('md')}</div>
              <div className="block md:hidden">{renderButton('sm')}</div>
            </div>
          </div>
          <div className="w-full basis-1/2 self-auto p-16">
            {product.heroImages && <HeroImage images={product.heroImages} gridCols={1} />}
          </div>
        </div>
      </SectionContainer>
    </>
  )
}

export default ProductHero
