export interface Hero {
  title: string
  description?: string
  btnTitle?: string
  heroImages?: Array<ImageInterface>
}

export interface ImageInterface {
  image: string
  position?: string
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
    { image: 'bg-about_img_1', position: 'bg-contain bg-right' },
    { image: 'bg-about_img_2', position: 'bg-cover bg-bottom' },
    { image: 'bg-about_img_3', position: 'bg-contain bg-right-top' },
    { image: 'bg-about_img_4', position: 'bg-contain bg-left' },
  ],
}
