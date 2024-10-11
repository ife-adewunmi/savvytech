import React from 'react'
import { Product } from '@/data/products/products-data'
import SectionContainer from '../common/section/SectionContainer'
import SectionTitle from '@/components/common/section/SectionTitle'
import ProductCard from '@/components/product/ProductCard'

interface OurProductProps {
  productsData: Array<Product>
}

const PRODUCTS_LIMIT = 6

const OurProduct = ({ productsData }: OurProductProps) => {
  const initialDisplay = productsData.slice(0, PRODUCTS_LIMIT)
  return (
    <SectionContainer className="relative mb-40">
      <SectionTitle text={'Our Product'}></SectionTitle>
      <div className="2xl:px-28">
        <div className="grid grid-cols-1 gap-6 md:gap-10 lg:grid-cols-2">
          {initialDisplay.map((product, index) => (
            <div key={index}>
              <ProductCard index={index} product={product} />
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}

export default OurProduct
