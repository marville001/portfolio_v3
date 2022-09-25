import { NextPage } from 'next'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaSpinner } from 'react-icons/fa'
import ContainerBlock from '../components/ContainerBlock'

const contact: NextPage = () => {
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

  return (
    <ContainerBlock
      title="Martin - Contact Me"
      description="Get in touch with me to know more"
    >
      <div className="md:px-6 dark:text-white mx-auto min-h-[60vh] max-w-[900px] py-10 md:py-24 px-2 sm:px-4">
        <div className='flex justify-center'>
          <h1 className="text-3xl lg:text-5xl font-bold text-center space-y-2">
            Archive
          </h1>
        </div>



        <div className="mt-5 flex justify-center flex-wrap">
          <h1 className='text-center max-w-xl text-3xl mt-24 uppercase font-bold opacity-50'>
            COMING SOON
          </h1>
        </div>
      </div>
    </ContainerBlock>
  )
}

export default contact
