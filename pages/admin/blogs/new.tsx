import { Menu, Transition } from '@headlessui/react'
import { NextPage } from 'next'
import Link from 'next/link'
import React, { ChangeEvent, Fragment, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaChevronLeft, FaRegImage, FaSpinner, FaTimes } from 'react-icons/fa'

import AdminWrapper from '../../../components/admin/AdminWrapper'
import ContainerBlock from '../../../components/ContainerBlock'
import ReactQuillEditor from '../../../components/ReactQuillEditor'
import fileUploader from '../../../lib/fileUploader'
// import fileUploader from "../../../lib/fileUploader"

type Inputs = {
  title: string
  blog: string
}

const Blogs: NextPage = () => {
  const [uploading, setUploading] = useState(false)
  const [cover, setCover] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
  } = useForm<Inputs>()

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    console.log('Uploading IMAGE')

    const { files } = e.target
    if (files!.length === 0) return

    try {
      setUploading(true)
      const data = await fileUploader(files![0])
      setCover(data)
      setUploading(false)
    } catch (error) {
      setUploading(false)
      console.log(error)
    }
  }

  const handleSaveBlog: SubmitHandler<Inputs> = (data: any) => {
    console.log(data)

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
            {/* Blog Cover Image */}
            {cover ? (
              <div className="relative">
                <div
                  onClick={() => setCover('')}
                  className="absolute right-2 top-2 cursor-pointer rounded-lg bg-white p-2"
                >
                  <FaTimes className="text-xl" />
                </div>
                <img
                  src={cover}
                  alt="Cover Blog"
                  className="h-auto max-h-[400px] w-full rounded-lg object-cover"
                />
              </div>
            ) : (
              <div className="flex gap-2">
                <Menu
                  as="div"
                  className="relative z-[542542542] inline-block text-left ring-0 focus:ring-0"
                >
                  <div>
                    <Menu.Button className="">
                      <div className="flex cursor-pointer items-center gap-2 rounded-full border py-1 px-4 hover:bg-gray-200">
                        <FaRegImage className="text-xl" />
                        <span className="font-semibold opacity-75">
                          Add Cover
                        </span>
                      </div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="_shadow absolute left-0 mt-2 flex h-[150px] w-[300px] origin-top-right items-center justify-center divide-y divide-gray-100 rounded-md bg-white focus:outline-none">
                      <div className="mt-5 px-1 py-1">
                        <label
                          htmlFor="cover-uploader"
                          className={`cursor-pointer border bg-white ${
                            uploading && 'cursor-not-allowed'
                          }  flex  items-center justify-start gap-2 rounded-full bg-primary px-8 py-3 text-white`}
                        >
                          {uploading && (
                            <FaSpinner className="animate-spin text-lg" />
                          )}{' '}
                          Choose An Image
                          <input
                            type="file"
                            name=""
                            disabled={uploading}
                            className="hidden"
                            id="cover-uploader"
                            accept="image/png, image/jpeg"
                            onChange={handleImageChange}
                          />
                        </label>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            )}

            {/* Title */}
            <div className="mt-6 flex flex-col gap-2">
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
                  clearErrors('blog')
                  // setError('blog', { message: '' })
                }}
              />
              {errors.blog && (
                <span className="text-sm text-red-600">
                  {errors.blog.message}
                </span>
              )}
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
