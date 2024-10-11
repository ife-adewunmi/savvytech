import { Hero, ImageInterface } from '@/data/hero/hero-data'
import {
  CALPAK_DATA,
  DONALSON_DATA,
  ELEMENTAL_DATA,
  MANITOWOC_DATA,
  PETITBONE_DATA,
  TURBO_TECT_DATA,
} from '@/data/products/product-items'
import { GROVE_CRANES_DATA } from '@/data/products/product-items/grovecranes'

export interface Product {
  title: string
  description: string
  logo: string
  href?: string
  buttonText?: string
}

export interface ProductPageInterface extends Product {
  content?: Array<ProductContent>
  color?: string
  heroImages?: Array<ImageInterface>
}

export interface ProductContent {
  breadcrumb?: string
  hero?: Hero
  pageContent?: Array<Content>
  contentElement?: string
}

export interface Content {
  title: string
  description: string
  imgSrc?: string
}

export const productsData: Array<Product> = [
  MANITOWOC_DATA,
  DONALSON_DATA,
  CALPAK_DATA,
  ELEMENTAL_DATA,
  PETITBONE_DATA,
  TURBO_TECT_DATA,
  GROVE_CRANES_DATA,
]
