export interface Hero {
  title: string
  description?: string
  btnTitle?: string
}

export const homeHeroData: Hero = {
  title: 'Engineering Excellence for Energy and Beyond',
  description: `From engineering to procurement, Savvytech Limited offers unparalleled expertise and
                reliable services to West Africa's vital industries.`,
  btnTitle: 'Book a qoute',
}

export const aboutHeroData: Hero = {
  title: 'Transforming engineering and procurement industries since 1991',
}

export const contactHeroData: Hero = {
  title: 'Contact Us',
  description: `We’re here to help and answer any question you might have. We look forward to hearing from you!`,
}
