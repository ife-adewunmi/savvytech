import projectsData from '@/data/products/projectsData'
import clientsData from '@/data/clientsData'
import servicesData from '@/data/products/servicesData'
import HomeHero from '@/components/common/hero/HomeHero'
import TrustedBy from '@/components/common/ClientsComponent'
import WhatWeDo from '@/components/common/ServicesComponent'
import HomeCTA from '@/components/common/call-to-action/HomeCTA'
import OurProduct from '@/components/product/OurProduct'
import LatestNewsComponent from '@/components/post/LatestNewsComponent'
import { homeHeroData } from '@/data/hero/heroData'

export default function Home({ posts }) {
  return (
    <>
      <div className="absolute top-0 z-0 h-full w-full bg-hero-pattern bg-no-repeat opacity-50 dark:bg-hero-pattern_dark" />

      <HomeHero heroData={homeHeroData} />

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
