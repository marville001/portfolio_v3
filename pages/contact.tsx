import { NextPage } from 'next'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaSpinner } from 'react-icons/fa'
import Recaptcha from 'react-recaptcha'
import ContainerBlock from '../components/ContainerBlock'

const contact: NextPage = () => {
  const [isVerified, setisVerified] = useState(false)
  const [verifyError, setVerifyError] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const handleSendMessage = async (data: any) => {
    if (!isVerified) {
      setVerifyError(true)
      return
    }

    setVerifyError(false)

    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
      })

      const { message, success } = await res.json()
      setMessage(message)
      setLoading(false)
      reset()
    } catch (error) {
      setLoading(false)
      setError('Failed to send message. Please try again later!')
      setTimeout(() => {
        setError('')
      }, 4000)
    }
  }

  const verifyCallback = (response: any) => {
    setVerifyError(false)

    if (response) {
      setisVerified(true)
    }
  }

  const expiredCallback = () => {
    setisVerified(false)
  }

  return (
    <ContainerBlock
      title="Martin Mwangi - Contact Me"
      description="Get in touch with me to know more"
    >
      <div className="md-px-6 mx-auto min-h-[60vh] max-w-[900px] py-10 px-2 sm:px-4">
        <div>
          <h1 className="text-3xl font-bold">
            Love to hear from you, <br /> Get in touch 👋
          </h1>
        </div>

        <div className="mt-5 flex flex-col text-sm">
          <p>
            Reach me on{' '}
            <a
              href="tel:+254700207054"
              className="text-primary underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              +254700207054
            </a>{' '}
            |{' '}
            <a
              href="mailto:mwangimartin1904@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              mwangimartin1904@gmail.com
            </a>
          </p>
        </div>

        <h2 className="mt-6 font-bold">OR</h2>

        <form
          onSubmit={handleSubmit((data) => handleSendMessage(data))}
          autoComplete="off"
        >
          {error && (
            <div className="my-4 bg-red-300 py-2 text-center text-red-700">
              <p>{error}</p>
            </div>
          )}

          <div className="mt-6 flex flex-col gap-5 sm:flex-row">
            <div className="flex-1">
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
                className={`w-full border-0 py-2 px-3 outline-none ring-1 ${
                  errors.name ? 'ring-red-400' : 'ring-primary'
                } focus:border-0 focus:outline-none`}
              />
            </div>

            <div className="flex-1">
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
                className={`w-full border-0 py-2 px-3 outline-none ring-1 ${
                  errors.email ? 'ring-red-400' : 'ring-primary'
                } focus:border-0 focus:outline-none`}
              />
            </div>
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
              className={`w-full border-0 py-2 px-3 outline-none ring-1 ${
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
              className={`w-full border-0 py-2 px-3 outline-none ring-1 ${
                errors.message ? 'ring-red-400' : 'ring-primary'
              } focus:border-0 focus:outline-none`}
            ></textarea>
          </div>

          {message ? (
            <div className="my-4 bg-green-200 py-6 text-center text-green-700">
              <p>{message}</p>

              <button
                onClick={() => setMessage('')}
                className="mt-3 rounded-lg bg-primary px-4 py-2 text-sm text-white"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <>
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
                <button
                  type="submit"
                  disabled={loading}
                  className="cursor-pointer border-0 bg-primary px-10 py-2 text-white outline-none ring-1 ring-primary focus:border-0 focus:outline-none disabled:cursor-not-allowed disabled:bg-opacity-75"
                >
                  {loading ? (
                    <FaSpinner className="animate-spin" />
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </ContainerBlock>
  )
}

export default contact
