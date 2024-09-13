import { Hero } from '@/data/hero/heroData'
import {
  CALPAK_DATA,
  DONALSON_DATA,
  ELEMENTAL_DATA,
  MANITOWOC_DATA,
  PETITBONE_DATA,
  TURBO_TECT_DATA,
} from '@/data/products/product-items'
import { GROVE_CRANES_DATA } from '@/data/products/product-items/grovecranes'

export interface Base {
  title: string
  description: string
  href?: string
  imgSrc?: string
  buttonText?: string
}

export interface Product extends Base {
  logo: string
  content?: Array<ProductContent>
  color?: string
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
