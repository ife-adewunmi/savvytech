import React from 'react'
import Image from 'next/image'
import { Service } from '@/data/products/servicesData'
import ButtonComponent from '@/components/common/button/ButtonComponent'
import SectionTitle from '@/components/common/section/SectionTitle'
import { Passion } from '@/data/authors/aboutData'
import { FaArrowRightLong } from 'react-icons/fa6'

interface OurHistoryProps {
  ourPassionData: Passion
}

const OurPassion = ({ ourPassionData }: OurHistoryProps) => {
  return (
    <div className="relative my-20 bg-neutral-50 py-20 dark:bg-neutral-800 lg:my-40">
      <div className="header-wrapper mx-auto">
        <SectionTitle text={ourPassionData.title} tag='h1' className={''}/>
      </div>
      <div className="flex transform flex-row justify-between">
        {ourPassionData.attributes.map((passion, index) => (
          <div
            key={index}
            className="flex transform flex-col justify-between gap-6 rounded-3xl bg-white px-8 py-12 shadow-md
                      transition duration-300 ease-in-out hover:scale-105 hover:bg-card_gradient_hover hover:shadow-xl dark:bg-slate-700  dark:hover:bg-card_gradient_hover_dark"
          >
            <ButtonComponent
              buttonStyle={{ size: 'sm', padding: 'xs', color: 'text_link', align: 'left' }}
              leftIcon={<FaArrowRightLong size={16} />}
            >
              <div>{passion.title}</div>
            </ButtonComponent>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurPassion
