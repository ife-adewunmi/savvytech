'use client'

import React, { useEffect, useRef } from 'react'
import ButtonComponent from '../common/button/ButtonComponent'
import SectionTitle from '@/components/common/section/SectionTitle'
import { useDispatch, useSelector } from '@/state/store/store'
import {
  ContactFormParams,
  resetForm,
  sendMessageAsync,
  setFormData,
} from '@/state/slices/contactFormSlice'

export type FormData = {
  name: string
  email: string
  message: string
  recaptchaToken?: string
}

declare global {
  interface Window {
    grecaptcha: any
    onRecaptchaLoad: () => void
  }
}

export default function ContactForm() {
  const { formData, isLoading, error, successMessage } = useSelector((state) => state.contact)
  // const recaptchaRef = useRef(null);
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      dispatch(resetForm())
    }
  }, [dispatch])

  useEffect(() => {
    // Load the reCAPTCHA script
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    dispatch(setFormData({ [name]: value } as Partial<ContactFormParams>))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const captchaToken = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action: 'submit' }
      )
      dispatch(sendMessageAsync({ ...formData, captchaToken }))
    } catch (error) {
      console.error('reCAPTCHA error:', error)
    }
  }

  return (
    <>
      <div className="mx-auto mb-16">
        <SectionTitle text={'Write us'} tag="h4" className={'mb-8 text-left'} />
      </div>
      <form onSubmit={handleSubmit} method="POST" className="space-y-4">
        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full rounded border p-2"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full rounded border p-2"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full rounded border p-2"
          />
        </div>

        <div className="hidden lg:block">
          <ButtonComponent
            buttonStyle={{ size: 'lg', padding: 'lg', color: 'neutral', align: 'left' }}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'SEND MESSAGE'}
          </ButtonComponent>
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div className="hidden md:block lg:hidden">
          <ButtonComponent
            buttonStyle={{ size: 'md', padding: 'md', color: 'neutral', align: 'left' }}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'SEND MESSAGE'}
          </ButtonComponent>
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div className="block md:hidden">
          <ButtonComponent
            buttonStyle={{ size: 'sm', padding: 'sm', color: 'neutral', align: 'left' }}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'SEND MESSAGE'}
          </ButtonComponent>
          {error && <p className="text-red-500">{error}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}
        </div>
      </form>
    </>
  )
}
