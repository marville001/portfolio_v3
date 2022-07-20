import { NextPage } from 'next'
import Link from 'next/link'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaChevronLeft, FaSpinner } from 'react-icons/fa'

import AdminWrapper from '../../../components/admin/AdminWrapper'
import ContainerBlock from '../../../components/ContainerBlock'
import ReactQuillEditor from '../../../components/ReactQuillEditor'

type Inputs = {
  title: string
  blog: string
}

const Blogs: NextPage = () => {
  const [blogContentError, setBlogContentError] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    clearErrors
  } = useForm<Inputs>()

  const handleSaveBlog: SubmitHandler<Inputs> = (data: any) => {
    console.log(data);

    if (!data.blog || data.blog === '') {
      setError('blog', { message: 'Blog content is required' })
      return
    }
    
    const newBlog = {
      title: data.title,
      blog: data.blog.toString().replaceAll('<p><br></p>', ''),
    }

    if (newBlog.blog === '') {
      setError('blog', { message: 'Blog content is required' })
      return
    }
    console.log(newBlog)
  }

  return (
    <ContainerBlock
      title="Martin - Software Developer - REACT,NEXT,NODE..."
      description="I've been developing websites for more than 2 years straight. Get in touch with me to know more."
      showInterest={false}
    >
      <AdminWrapper>
        <div className="_shadow2 relative my-12 flex flex-col items-center rounded-2xl bg-white p-6">
          <Link href="/admin/blogs">
            <a className="absolute top-2 left-2 cursor-pointer p-4 hover:bg-gray-100">
              <FaChevronLeft />
            </a>
          </Link>
          <div className="flex flex-1 justify-center">
            <h2 className="text-3xl font-bold">New Blog</h2>
          </div>

          <form
            onSubmit={handleSubmit(handleSaveBlog)}
            className="my-16 w-full p-4 md:w-[700px]"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-sm">
                Blog Title
              </label>
              <input
                type="text"
                placeholder="Blog Title"
                className={`block w-full rounded-lg bg-grayish p-3 focus:outline-none focus:ring-0 ${
                  errors.title && 'ring-1 ring-red-400'
                }`}
                {...register('title', {
                  required: {
                    value: true,
                    message: 'Title is required',
                  },
                  minLength: {
                    value: 25,
                    message: 'Title should be 25-50 characters',
                  },
                  maxLength: {
                    value: 100,
                    message: 'Title should be 25-50 characters',
                  },
                })}
              />
              {errors.title && (
                <span className="text-sm text-red-600">
                  {errors.title.message}
                </span>
              )}
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <label htmlFor="title" className="text-sm">
                Blog Content
              </label>
              <ReactQuillEditor
                hasErrors={
                  errors?.blog?.message
                    ? errors?.blog?.message?.length > 0
                    : false
                }
                handleChange={(e) => {
                  setValue('blog', e)
                  clearErrors("blog")
                  // setError('blog', { message: '' })
                }}
              />
            </div>

            <button
              className=" mt-4 flex w-full justify-center rounded-lg border border-primary bg-primary py-3
              px-6 text-lg text-white hover:opacity-75 disabled:cursor-not-allowed disabled:bg-opacity-75
              "
            >
              {false ? <FaSpinner className="animate-spin" /> : 'Save'}
            </button>
          </form>
        </div>
      </AdminWrapper>
    </ContainerBlock>
  )
}

export default Blogs
