import Link from '@/components/Link'
import projectsData from '@/data/projectsData'
import clientsData from '@/data/clientsData'
import servicesData from '@/data/servicesData'
import siteMetadata from '@/data/siteMetadata'
import HomeHero from '@/components/common/hero/HomeHero'
import TrustedBy from '@/components/common/ClientsComponent'
import WhatWeDo from '@/components/common/ServicesComponent'
import HomeCTA from '@/components/common/call-to-action/HomeCTA'
import ProductCTA from '@/components/common/call-to-action/ProductCTA'
import OurProduct from '@/components/product/OurProduct'
import LatestNewsComponent from '@/components/post/LatestNewsComponent'

export default function Home({ posts }) {
  return (
    <>
      <div className="absolute top-0 z-0 h-full w-full bg-hero-pattern bg-no-repeat opacity-50 dark:bg-hero-pattern_dark" />

      <HomeHero />

      <TrustedBy clientsData={clientsData} />

      <WhatWeDo servicesData={servicesData} />

      <div className=" z-0 h-full w-full bg-dot-pattern bg-no-repeat dark:bg-dot-pattern_dark">
        <OurProduct productsData={projectsData} />
        <HomeCTA />
      </div>

      <LatestNewsComponent postsData={posts} />
    </>
  )
}
