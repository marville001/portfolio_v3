import { NextPage } from 'next'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FaSpinner } from 'react-icons/fa'
import ContainerBlock from '../components/ContainerBlock'
import useFormSpree from '../hooks/useFormSpree'

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const contact: NextPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>()

  const { state, handleSubmit: handleFormSpreeSubmit, resetSpreeState } = useFormSpree('xjvzvdrd');

  const handleSendMessage = async (data: FormValues) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("subject", data.subject);
    formData.append("message", data.message);

    const succcess = await handleFormSpreeSubmit(formData);
    if (succcess) reset();
  }

  return (
    <ContainerBlock
      title="Martin - Contact Me"
      description="Get in touch with me to know more"
    >
      <div className="md:px-6 dark:text-white mx-auto min-h-[60vh] max-w-[900px] py-10 md:py-24 px-2 sm:px-4">
        <div className='flex justify-center'>
          <h1 className="text-3xl lg:text-5xl font-bold text-center space-y-2">
            Love to hear from you, <br /><span className='mt-3 block' /> Get in touch 👋
          </h1>
        </div>

        <div className="mt-5 flex justify-center flex-wrap">
          <p className='text-center max-w-xl text-lg lg:text-xl'>
            Feel free to contact me with questions about
            any of my project or services. I'll get back to you within 24 hours!{" "}
            <a href='tel:+254700207054' className="text-accent hover:underline">+254700207054</a> {" "}
            <a href='mailto:me@thereactivedeveloper.pro' className="text-accent hover:underline">me@thereactivedeveloper.pro</a>
          </p>
        </div>

        <form
          onSubmit={handleSubmit(handleSendMessage)}
          autoComplete="off"
          className='lg:my-16'
        >
          {state?.message && state.errored && (
            <div className="my-4 bg-red-300 py-2 text-center text-red-700">
              <p>{state?.message}</p>
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
                className={`w-full border-0 py-3 px-3 text-lg dark:bg-dim-dark outline-none ring-1 ${errors.name ? 'ring-red-400' : 'ring-primary'
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
                className={`w-full border-0 py-3 px-3 outline-none ring-1 dark:bg-dim-dark text-lg ${errors.email ? 'ring-red-400' : 'ring-primary'
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
              className={`w-full border-0 py-3 px-3 outline-none ring-1 dark:bg-dim-dark text-lg ${errors.subject ? 'ring-red-400' : 'ring-primary'
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
              className={`w-full border-0 py-3 px-3 outline-none ring-1 dark:bg-dim-dark  text-lg ${errors.message ? 'ring-red-400' : 'ring-primary'
                } focus:border-0 focus:outline-none`}
            ></textarea>
          </div>

          {(state.message && state.succeeded) ? (
            <div className="my-4 bg-green-200 py-6 text-center rounded-md text-green-700">
              <p>{state.message}</p>

              <button
                onClick={resetSpreeState}
                type='submit'
                className="mt-3 rounded-lg bg-accent px-4 py-2 text-sm text-white"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <div className="my-5 flex justify-center">
              <button
                type="submit"
                disabled={state.submitting}
                className="cursor-pointer border-0 bg-accent px-10 py-2 rounded-full text-white outline-none ring-1 ring-accent focus:border-0 focus:outline-none disabled:cursor-not-allowed disabled:bg-opacity-75"
              >
                {state.submitting ? (
                  <FaSpinner className="animate-spin" />
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          )}
        </form>
      </div>
    </ContainerBlock>
  )
}

export default contact
