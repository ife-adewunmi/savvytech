import { Page } from '@/enums/page'

const headerNavLinks = [
  { href: Page.HOME, title: 'HOME' },
  { href: Page.ABOUT_US, title: 'ABOUT US' },
  {
    href: Page.PRODUCT,
    title: `PRODUCTS`,
    dropdown: [
      { href: Page.PRODUCT.concat('/manitowoc'), title: 'MANITOWOC' },
      { href: Page.PRODUCT.concat('/donaldson'), title: 'DONALDSON' },
      { href: Page.PRODUCT.concat('/grove-cranes'), title: 'GROVE CRANES' },
      { href: Page.PRODUCT.concat('/pettibone'), title: 'PETTIBONE' },
      { href: Page.PRODUCT.concat('/calpak'), title: 'CALPAK' },
      { href: Page.PRODUCT.concat('/turbotect'), title: 'TURBOTECT' },
      { href: Page.PRODUCT.concat('/elemental'), title: 'ELEMENTAL' },
    ],
  },
  { href: Page.BLOG, title: 'NEWS' },
  { href: Page.CONTACT_US, title: 'CONTACT US' },
]

export default headerNavLinks
