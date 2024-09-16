export interface Hero {
  title: string
  description?: string
  btnTitle?: string
  heroImages?: Array<ImageInterface>
}

export interface ImageInterface {
  img: string
  pos?: string
}

export const homeHeroData: Hero = {
  title: 'Engineering Excellence for Energy and Beyond',
  description: `From engineering to procurement, Savvytech Limited offers unparalleled expertise and
                reliable services to West Africa's vital industries.`,
  btnTitle: 'Book a qoute',
}

export const aboutHeroData: Hero = {
  title: 'Transforming engineering and procurement industries since 1991',
  heroImages: [
    {img: 'bg-about_img_1', pos: 'bg-right'},
    {img: 'bg-about_img_2', pos: 'bg-bottom'},
    {img: 'bg-about_img_3', pos: 'bg-right-top'},
    {img: 'bg-about_img_4', pos: 'bg-left'},
  ],
}
