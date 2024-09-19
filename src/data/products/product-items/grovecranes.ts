import { Page } from '@/enums/page'
import { ProductPageInterface } from '@/data/products/productsData'

export const GROVE_CRANES_DATA: ProductPageInterface = {
  title: 'GROVE CRANES',
  description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
  logo: '/static/images/product/grove.svg',
  href: Page.PRODUCT.concat('/grove-cranes'),
  buttonText: 'Read more',
  color: 'bg-client-grove',
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
          title: 'GROVE CRANES',
          description: `Manitowoc is committed to providing the most innovative, 
          advanced and comprehensive range of lifting solutions with products 
          that have long set the standard for excellence worldwide`,
          imgSrc: '',
        },
      ],
    },
  ],
  heroImages: [{ image: 'bg-grove_img' }],
}
