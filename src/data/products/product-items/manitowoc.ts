import { Page } from '@/enums/page'
import { Product } from '@/data/products/productsData'

export const MANITOWOC_DATA: Product = {
  title: 'MANITOWOC',
  description: `Manitowoc is committed to providing the most innovative, 
    advanced and comprehensive range of lifting solutions with products 
    that have long set the standard for excellence worldwide`,
  logo: 'bg-about_img_1',
  href: Page.PRODUCT.concat('/manitowoc'),
  buttonText: 'Read more',
  color: 'bg-secondary-800',
  content: [
    {
      breadcrumb: '',
      hero: {
        title: 'Engineering Excellence for Energy and Beyond',
        description: `From engineering to procurement, Savvytech Limited offers unparalleled expertise and
            reliable services to West Africa's vital industries.`,
      },
      pageContent: [
        {
          title: 'MANITOWOC',
          description: `Manitowoc is committed to providing the most innovative, 
          advanced and comprehensive range of lifting solutions with products 
          that have long set the standard for excellence worldwide`,
          imgSrc: '',
        },
      ],
    },
  ],
}
