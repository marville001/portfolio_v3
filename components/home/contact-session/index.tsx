import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Recaptcha from 'react-recaptcha'

const recaptureSitekey = process.env.NEXT_PUBLIC_RECAPTURE_SITE_KEY

const ContactSection = () => {
  const [isVerified, setisVerified] = useState(false)
  const [verifyError, setVerifyError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const handleSendMessage = () => {
    if (!isVerified) {
      setVerifyError(true)
      return
    }

    setVerifyError(false)
  }

  const verifyCallback = (response: any) => {
    console.log({ response })

    if (response) {
      setVerifyError(false)
      setisVerified(true)
    }
  }

  const expiredCallback = () => {
    setisVerified(false)
  }

  return (
    <div className="section bg-gray-100 dark:bg-dark">
      <div className="container py-10">
        <h1 className="mb-2 select-none text-center text-xl font-bold uppercase opacity-50">
          Contact Me
        </h1>
        <h2 className="text-center text-3xl font-bold capitalize text-dim-dark dark:text-white">
          Let's tak about a Project
        </h2>

        <div className="my-8 grid grid-cols-1 gap-8 rounded-lg bg-white py-2 px-2 sm:grid-cols-2 md:my-16">
          <div className="row-span-1 min-h-[250px] overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15958.828463147733!2d36.94335825!3d-0.42778285!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1653428237401!5m2!1sen!2ske"
              className="h-full w-full border-0"
              loading="lazy"
            ></iframe>
          </div>
          <div>
            <form
              onSubmit={handleSubmit(handleSendMessage)}
              autoComplete="off"
              className="md:px-4"
            >
              <div className="my-5">
                <label htmlFor="name" className="text-md my-2 block">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Name is required',
                    },
                  })}
                  placeholder="Enter your name here."
                  className={`w-full rounded-md border-0 py-2 px-3 outline-none ring-1 ${
                    errors.name ? 'ring-red-400' : 'ring-primary'
                  } focus:border-0 focus:outline-none`}
                />
              </div>

              <div className="my-5">
                <label htmlFor="email" className="text-md my-2 block">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'Email is required',
                    },
                  })}
                  placeholder="Enter your email here."
                  className={`w-full rounded-md border-0 py-2 px-3 outline-none ring-1 ${
                    errors.email ? 'ring-red-400' : 'ring-primary'
                  } focus:border-0 focus:outline-none`}
                />
              </div>

              <div className="my-5">
                <label htmlFor="subject" className="text-md my-2 block">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject', {
                    required: {
                      value: true,
                      message: 'Subject is required',
                    },
                  })}
                  placeholder="Enter the subject here."
                  className={`w-full rounded-md border-0 py-2 px-3 outline-none ring-1 ${
                    errors.subject ? 'ring-red-400' : 'ring-primary'
                  } focus:border-0 focus:outline-none`}
                />
              </div>

              <div className="my-5">
                <label htmlFor="message" className="text-md my-2 block">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register('message', {
                    required: {
                      value: true,
                      message: 'Message is required',
                    },
                  })}
                  placeholder="Enter the message."
                  rows={5}
                  className={`w-full rounded-md border-0 py-2 px-3 outline-none ring-1 ${
                    errors.message ? 'ring-red-400' : 'ring-primary'
                  } focus:border-0 focus:outline-none`}
                ></textarea>
              </div>

              <div className="my-5 flex flex-col items-end">
                <Recaptcha
                  render="explicit"
                  size="normal"
                  sitekey={'6Ldk7RcgAAAAAHWlxwTNeSA4SMIlRDWkXiFZwcaZ'}
                  verifyCallback={verifyCallback}
                  expiredCallback={expiredCallback}
                />
                {verifyError && (
                  <p className="mt-1 text-red-400">Please verify recapture</p>
                )}
              </div>

              <div className="my-5 flex justify-end">
                <input
                  type="submit"
                  placeholder="Enter the subject here."
                  value={'Send Message'}
                  className="cursor-pointer rounded-md border-0 bg-primary px-10 py-2 text-white outline-none ring-1 ring-primary focus:border-0 focus:outline-none"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
