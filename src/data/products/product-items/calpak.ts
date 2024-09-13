import { Page } from '@/enums/page'
import { Product } from '@/data/products/productsData'

export const CALPAK_DATA: Product = {
  title: 'CALPAK',
  description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
  logo: '/static/images/productImages/calpak.svg',
  href: Page.PRODUCT.concat('/calpak'),
  buttonText: 'Read more',
  color: 'bg-green',
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
