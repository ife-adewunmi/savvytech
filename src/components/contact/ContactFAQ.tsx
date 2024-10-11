'use client'
import { ContactFaqData } from '@/data/contact/contact-data'
import React, { useState } from 'react'
import SectionContainer from '@/components/common/section/SectionContainer'
import SectionTitle from '@/components/common/section/SectionTitle'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'

interface ContactFAQProps {
  faqData: ContactFaqData
}

interface FAQItemProps {
  question: string
  answer: string
}

const FAQItem = ({ question, answer, key }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b">
      <button
        className="flex w-full items-center justify-between py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <SectionTitle tag={'h3'} className="font-medium" text={question} />
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && <div className="pb-4">{answer}</div>}
    </div>
  )
}

export default function ContactFAQ({ faqData }: ContactFAQProps) {
  return (
    <SectionContainer className="relative my-20 lg:my-40">
      <div className="mx-auto mb-16">
        <SectionTitle text={faqData.title} tag="h4" className={'mb-8 text-left'} />

        {faqData.content.map((faqs, index) => (
          <div key={index}>
            <FAQItem {...faqs} />
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
