export interface Service {
  title: string,
  description: string,
  imgSrc?: string,
  buttonText?: string,
}

const servicesData: Array<Service> = [
  {
    title: "ENGINEERING SERVICES",
    description: `Here at Savvytech Limited 'satisfactory service delivery' is our watch-word. 
    We are constantly driven by the need to satisfy all our clients by employing 
    innovative measures tailored to meet each and every client specification as this will vary from one client to the other.`,
    imgSrc: '/static/images/hero_img_1.jpg',
    buttonText: 'ENGINEERING SERVICES',
  },
  {
    title: 'TECHNICAL SERVICES',
    description: `Using the products and services available through Savvytech will result in cost savings to your organisation.
    Our confidence is based on the fact that we add value to the products and services of our Principals by modifying them to peculiar market needs`,
    imgSrc: '/static/images/hero_img_2.jpg',
    buttonText: 'TECHNICAL SERVICES',
  },
]

export default servicesData
