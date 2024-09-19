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
  iconSize?: number
  iconColour?: string
}

export const aboutHeroData: AboutBase = {
  title: 'Transforming engineering and procurement industries since 1991',
}

export const ourHistoryData: AboutBase = {
  title: 'A Short History',
  description: `Savvytech Limited commenced operations in 1997 as a limited liability company geared towards engineering services and procurement for the Energy, Oil & Gas, Construction and Mining industries.  The main focus of the company is the provision of turn-key services to assist clients accomplish operations in West Africa. The company’s Head Office is in Lagos, Nigeria with Operations Offices located in Port Harcourt, Nigeria and Accra, Ghana.
Using the products and services available through Savvytech will result in cost savings to your organisation. Our confidence is based on the fact that we add value to the products and services of our Principals by modifying them to peculiar market needs.
To this end we have developed services and worked on projects that employ the products and knowledge of our principals in novel ways in the search for solutions for our clients.`,
}

export const ourPassionData: Passion = {
  title: 'Our Passion',
  description: `Savvytech Limited is ably managed by time tested professionals in their various aspects of specialization who employ the products and knowledge of our principals in novel ways in the search for solutions for our clients.`,
  attributes: [
    {
      title: 'Engineering & Technical',
      icon: 'wheel',
      iconSize: 32,
      iconColour: '#442D84',
    },
    {
      title: 'Procurement Services',
      icon: 'bag',
      iconSize: 32,
      iconColour: '#442D84',
    },
    {
      title: 'Tested Professionals',
      icon: 'verify',
      iconSize: 32,
      iconColour: '#442D84',
    },
    {
      title: 'Quality Products',
      icon: 'thumb',
      iconSize: 32,
      iconColour: '#442D84',
    },
  ],
}
