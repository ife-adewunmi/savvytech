export interface ContactBase {
  title: string
  description?: string
}

export interface ContactInfoData extends ContactBase {
  content: Array<OurInfoContent>
}

export interface OurInfoContent {
  title: string
  address?: string
  email?: string
}

export const contactHeroData: ContactBase = {
  title: 'Contact Us',
  description: `We’re here to help and answer any question you might have. We look forward to hearing from you!`,
}

export const ourContactInfo: ContactInfoData = {
  title: '',
  content: [
    {
      title: 'string',
      address: 'string',
      email: 'number',
    },
    {
      title: 'string2',
      address: 'string2',
      email: 'number',
    },
    {
      title: 'string3',
      address: 'string3',
      email: 'number',
    },
  ],
}
