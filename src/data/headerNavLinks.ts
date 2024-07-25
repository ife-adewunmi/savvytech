import { Page } from '../enums/page'

const headerNavLinks = [
  { href: Page.HOME, title: 'HOME' },
  { href: Page.ABOUT_US, title: 'ABOUT US' },
  {
    href: Page.PROJECT,
    title: 'PRODUCTS',
    dropdown: [
      { href: Page.PROJECT.concat('/manitowoc'), title: 'MANITOWOC' },
      { href: Page.PROJECT.concat('/donaldson'), title: 'DONALDSON' },
      { href: Page.PROJECT.concat('/grove-cranes'), title: 'GROVE CRANES' },
      { href: Page.PROJECT.concat('/pettibone'), title: 'PETTIBONE' },
      { href: Page.PROJECT.concat('/calpak'), title: 'CALPAK' },
      { href: Page.PROJECT.concat('/turbotect'), title: 'TURBOTECT' },
      { href: Page.PROJECT.concat('/elemental'), title: 'ELEMENTAL' },
    ],
  },
  { href: Page.BLOG, title: 'NEWS' },
  { href: Page.CONTACT_US, title: 'CONTACT US' },
]

export default headerNavLinks
