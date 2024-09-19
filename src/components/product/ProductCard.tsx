'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ButtonComponent from '@/components/common/button/ButtonComponent'
import { FaArrowRightLong } from 'react-icons/fa6'
import Link from '@/components/Link'
import { Product } from '@/data/products/productsData'

interface ProductCardProps {
  index?: number
  product: Product
}

const ProductCard = ({ index, product }: ProductCardProps) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <div
      key={index}
      className="flex transform flex-col justify-between gap-6 rounded-3xl bg-white px-8 py-12 shadow-md
                  transition duration-300 ease-in-out hover:scale-105 hover:bg-card_gradient_hover hover:shadow-xl dark:bg-slate-700  dark:hover:bg-card_gradient_hover_dark"
    >
      <Link href={product.buttonText && product.href ? product.href : '/#'}>
        <div>
          <h3 className="heading-text-md-1 mb-4 text-neutral-800 dark:text-neutral-50">
            {product.title}
          </h3>
          <p className="md:body-text-lg-3 body-text-md-3 line-clamp-4 text-neutral-500 dark:text-neutral-100">
            {product.description}
          </p>
          {!!product.buttonText && (
            <div className="mt-2">
              <ButtonComponent
                buttonStyle={{ size: 'sm', padding: 'xs', color: 'text_link', align: 'left' }}
                rightIcon={<FaArrowRightLong size={16} />}
              >
                {product.buttonText}
              </ButtonComponent>
            </div>
          )}
        </div>
        <div className="self-end">
          <Image
            src={product.logo || ''}
            alt={`${product.title} logo`}
            className="float-end mt-4 h-14 w-40 object-contain"
            width={100}
            height={100}
          />
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
