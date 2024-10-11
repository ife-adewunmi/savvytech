export interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  logo?: string
}

const projectsData: Project[] = [
  {
    title: 'MANITOWOC',
    description: `Manitowoc is committed to providing the most innovative, 
    advanced and comprehensive range of lifting solutions with products 
    that have long set the standard for excellence worldwide`,
    logo: '/static/images/manitowoc.png',
    href: 'https://www.google.com',
  },
  {
    title: 'DONALSON',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    logo: '/static/images/donalson.png',
    href: '/blog/the-time-machine',
  },
  {
    title: 'CALPAK',
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    logo: '/static/images/calpak.png',
    href: 'https://www.google.com',
  },
  {
    title: 'ELEMENTAL',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    logo: '/static/images/elemental.png',
    href: '/blog/the-time-machine',
  },
  {
    title: 'PETITBONE',
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    logo: '/static/images/pettibone.png',
    href: 'https://www.google.com',
  },
  {
    title: 'TURBO TECT',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    logo: '/static/images/turbo_tect.png',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
