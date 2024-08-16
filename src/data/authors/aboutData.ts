// import { JSXElementConstructor } from "react"
// import { IconType } from "react-icons"

export interface AboutBase {
  title: string
  description?: string
}

export interface Passion extends AboutBase {
  attributes: Array<PassionAttributes>
}

export interface PassionAttributes {
  title: string
  icon?: string
}


export const aboutHeroData: AboutBase = {
  title: 'Transforming engineering and procurement industries since 1991',
}

export const ourHistoryData: AboutBase = {
  title: 'A Short History',
  description: `From engineering to procurement, Savvytech Limited offers unparalleled expertise and
                reliable services to West Africa's vital industries.`,
}

export const ourPassionData: Passion = {
  title: 'Our Passion',
  attributes: [
    {
      title: 'Engineering & Technical',
    },
    {
      title: 'Procurement Services'
    },
    {
      title: 'Tested Professionals'
    },
    {
      title: 'Quality Products'
    },
  ]
}
