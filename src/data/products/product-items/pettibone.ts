import { Page } from '@/enums/page'
import { ProductPageInterface } from '@/data/products/productsData'

export const PETITBONE_DATA: ProductPageInterface = {
  title: 'PETITBONE',
  description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
  logo: '/static/images/pettibone.png',
  href: Page.PRODUCT.concat('/pettibone'),
  buttonText: 'Read more',
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
