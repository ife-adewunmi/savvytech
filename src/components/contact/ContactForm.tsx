'use client'
import { useState } from 'react'
import ButtonComponent from '../common/button/ButtonComponent'
// import axios from "axios";

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  //   function submit(e) {
  //     // This will prevent page refresh
  //     e.preventDefault();

  //     axios
  //       .post(
  //         // replace this with your own unique endpoint URL
  //         "https://formcarry.com/s/XXXXXXX",
  //         {
  //           email: email,
  //           message: message
  //         },
  //         {
  //           headers: {
  //             Accept: "application/json"
  //           }
  //         }
  //       )
  //       .then((res) => {
  //         // success http code
  //         if (res.data.code === 200) {
  //           setSubmitted(true);
  //         } else {
  //           setError(res.data.message);
  //         }
  //       });
  //   }

  if (error) {
    return <p>{error}</p>
  }

  if (submitted) {
    return <p>We've received your message, thank you for contacting us!</p>
  }

  return (
    <form className="">
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>

      <button type="submit">Send</button>

      <div className="hidden lg:block">
        <ButtonComponent
          buttonStyle={{ size: 'lg', padding: 'lg', color: 'neutral', align: 'left' }}
        >
          Send Message
        </ButtonComponent>
      </div>
      <div className="hidden md:block lg:hidden">
        <ButtonComponent
          buttonStyle={{ size: 'md', padding: 'md', color: 'neutral', align: 'left' }}
        >
          Send Message
        </ButtonComponent>
      </div>
      <div className="block md:hidden">
        <ButtonComponent
          buttonStyle={{ size: 'sm', padding: 'sm', color: 'neutral', align: 'left' }}
        >
          Send Message
        </ButtonComponent>
      </div>
    </form>
  )
}
