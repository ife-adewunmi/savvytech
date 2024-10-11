import { Page } from '@/enums/page'
import { ProductPageInterface } from '@/data/products/productsData'

export const CALPAK_DATA: ProductPageInterface = {
  title: 'CALPAK',
  description: `Calpak is a world leading manufacturer of high quality solar thermal products. 
  Calpak’s product range includes a wide variety of collectors (flat selective and vacuum), 
  hot water tanks, thermosiphon systems, forced circulation systems and accessories, 
  which in turn are directed to the residential and non-residential sector.`,
  logo: '/static/images/product/calpak.svg',
  href: Page.PRODUCT.concat('/calpak'),
  buttonText: 'Read more',
  color: 'bg-client-calpak',
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
  heroImages: [{ image: 'bg-calpak_img' }],
}
