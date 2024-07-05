import Link from '@/components/Link'
import projectsData from '@/data/projectsData'
import clientsData from '@/data/clientsData'
import servicesData from '@/data/servicesData'
import siteMetadata from '@/data/siteMetadata'
import HomeHero from '@/components/common/hero/HomeHero'
import TrustedBy from '@/components/common/ClientsComponent'
import WhatWeDo from '@/components/common/ServicesComponent'

export default function Home({ posts }) {
  return (
    <>
      <div className="absolute top-0 z-0 h-full w-full bg-hero-pattern bg-no-repeat opacity-50" />
      <HomeHero />

      <TrustedBy clientsData={clientsData} />

      <WhatWeDo servicesData={servicesData} />

      {/* Our Project Component */}

      {/* Home CTA Component */}

      {/* Latest New Component */}

      {/* Footer Component */}
    </>
  )
}
