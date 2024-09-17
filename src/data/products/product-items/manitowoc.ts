import { Page } from '@/enums/page'
import { ProductPageInterface } from '@/data/products/productsData'

export const MANITOWOC_DATA: ProductPageInterface = {
  title: 'MANITOWOC',
  description: `Manitowoc is committed to providing the most innovative, 
    advanced and comprehensive range of lifting solutions with products 
    that have long set the standard for excellence worldwide`,
  logo: '/static/images/productImages/manitowoc.svg',
  href: Page.PRODUCT.concat('/manitowoc'),
  buttonText: 'Read more',
  color: 'bg-secondary-900',
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
  heroImages: [{ image: 'bg-manitowoc_img'}],
}
