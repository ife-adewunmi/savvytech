import { Page } from '@/enums/page'
import { ProductPageInterface } from '@/data/products/productsData'

export const DONALSON_DATA: ProductPageInterface = {
  title: 'DONALSON',
  description: `Donaldson is the world's leading manufacturer of filtration solutions for Gas Turbine Systems`,
  logo: '/static/images/product/donaldson.svg',
  href: Page.PRODUCT.concat('/donaldson'),
  buttonText: 'Read more',
  color: 'bg-client-donaldson',
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
  heroImages: [{ image: 'bg-donaldson_img' }],
}
