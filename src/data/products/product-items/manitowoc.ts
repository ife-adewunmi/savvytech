import { Page } from '@/enums/page'
import { ProductPageInterface } from '@/data/products/productsData'

export const MANITOWOC_DATA: ProductPageInterface = {
  title: 'MANITOWOC',
  description: `Manitowoc is committed to providing the most innovative, 
    advanced and comprehensive range of lifting solutions with products 
    that have long set the standard for excellence worldwide`,
  logo: '/static/images/product/manitowoc.svg',
  href: Page.PRODUCT.concat('/manitowoc'),
  buttonText: 'Read more',
  color: 'bg-client-manitowoc',
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
          title: 'Rough Terrain (RT) Cranes',
          description: `Grove RT's feature rugged deep box section frames designed to handle the tough 
          conditions found on job sites. Four steering modes allow easy maneuvering in tight quarters. 
          Since pick and carry applications are typical for RT's, Grove units feature excellent on-rubber 
          operation to enhance productivity. Manitowoc offers several models of the Grove RT cranes with 
          capacities ranging from 30T to 135T`,
          imgSrc: '',
        },
        {
          title: 'All Terrain (AT) Cranes',
          description: `Grove ATs combine fast highway speeds with excellent off-road performance and very 
          powerful lifting capabilities. All wheel multiple mode steering provides unrivaled job site mobility 
          and the exclusive MEGATRAK suspension system, standard on GMK models, enhances driveability and traction 
          both on and off-road. Manitowoc offers several models of the Grove AT cranes with capacities ranging 
          from 50T to 450T.`,
          imgSrc: '',
        },
        {
          title: 'Manitowoc Crawler Cranes',
          description: `Manitowoc Cranes has been manufacturing a comprehensive range of products to support your 
          lattice-boom crane lifting needs since 1925. The range of product includes crawler cranes, lattice-boom truck, 
          luffing jibs, MAX-ER attachments and RINGERS. Manitowoc Cranes products range in lifting capacity from 73 t to 2300 t.`,
          imgSrc: '',
        },
      ],
    },
  ],
  heroImages: [{ image: 'bg-manitowoc_img' }],
}
