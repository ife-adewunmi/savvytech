export interface ContactBase {
  title: string
  description?: string
}

export interface ContactInfoData extends ContactBase {
  content: Array<OurInfoContent>
}

export interface OurInfoContent {
  title: string
  address: string
  phone?: Array<string>
  email?: string
}

export interface ContactFaqData {
  title: string
  content: Array<ContactFaqItemData>
}

export interface ContactFaqItemData {
  question: string
  answer: string
}

export const contactHeroData: ContactBase = {
  title: 'Contact Us',
  description: `We’re here to help and answer any question you might have. We look forward to hearing from you!`,
}

export const ourContactInfo: ContactInfoData = {
  title: 'Our Offices',
  content: [
    {
      title: 'LAGOS Head Office',
      address: '2, First Avenue, Ismail Estate, Maryland, Lagos State, Nigeria',
      phone: ['+234 1 454 8564', '+234-1-2704409'],
      email: 'info@savvytechweb.com',
    },
    {
      title: 'PORTHARCOURT Office',
      address: 'Igbodo Street Old GRA, Port Harcourt, Rivers State, Nigeria',
      phone: ['string2 | string2'],
    },
    {
      title: 'Accra, GHANA',
      address: '21 Third Close, Off Volta Street, Airport Res. Area, Accra, Ghana',
      phone: ['+233-21-776306', '+233-21-780320'],
    },
  ],
}

export const contactFaqData: ContactFaqData = {
  title: 'Frequently Asked Questions',
  content: [
    {
      question: 'Who is Savvytech Limited?',
      answer: `Savvytech Limited is the authorized representative of Manitowoc Crane Group (Manufacturer of Manitowoc Crawler Cranes and Grove Mobile Cranes), Donaldson Gas Turbine Systems (Manufacturer of Donaldson Gas Turbine Air Intake Housings and Filters) and Pettibone Traverse Lift, LLC (Manufacturer of Pipe Handlers and Material handling equipment) We supply and install genuine parts for all equipment we supply. 
    At Savvytech, We have the capabilities to provide Aftermarket Technical support for all Manitowoc Grove Cranes in Nigeria.`,
    },
    {
      question: 'How does Savvytech work?',
      answer: ``,
    },
    {
      question: 'How can I place an order?',
      answer: ``,
    },
  ],
}
