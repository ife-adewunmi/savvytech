import React from 'react'
import SectionContainer from '@/components/common/section/SectionContainer'
import { ContactBase } from '@/data/contact/contact-data'

interface ContactHeroProps {
  heroData: ContactBase
}

const ContactUsHero = ({ heroData }: ContactHeroProps) => {
  return (
    <SectionContainer className="mt-14 xl:mt-28">
      <div className=" relative flex  w-full flex-col items-center justify-between md:flex-row">
        <div className="z-0 flex h-full w-full basis-1/2 flex-col justify-center gap-4 lg:gap-6 xl:pr-7 2xl:pr-9">
          <h1 className="2xl:display-text-md xl:display-text-md heading-text-lg lg:display-text-sm text-neutral-900 dark:text-neutral-10">
            {heroData.title}
          </h1>
          <p className="2xl:body-text-2xl-2 body-text-md-2 xl:body-text-xl-2  text-neutral-900 dark:text-neutral-10">
            {heroData.description}{' '}
          </p>
        </div>

        <div className="sticky top-0  h-72 w-full   md:mt-0 md:h-[260px] md:basis-[70%] lg:h-[390px] 2xl:h-[510px]">
          <div
            key={1}
            className="h-full rounded-2xl bg-about_img_1 bg-contain bg-right  bg-no-repeat "
          />
        </div>
      </div>
    </SectionContainer>
  )
}

export default ContactUsHero
