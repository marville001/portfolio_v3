import { Menu, Transition } from '@headlessui/react'
import { serverTimestamp } from 'firebase/firestore'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { ChangeEvent, Fragment, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaChevronLeft, FaRegImage, FaSpinner, FaTimes } from 'react-icons/fa'

import AdminWrapper from '../../../components/admin/AdminWrapper'
import ContainerBlock from '../../../components/ContainerBlock'
import ReactQuillEditor from '../../../components/ReactQuillEditor'
import { useBlogs } from '../../../contexts/blogs.context'
import fileUploader from '../../../lib/fileUploader'
import { firestore } from '../../../lib/firebaseConfig'
import { Blog } from '../../../types/blog'
// import fileUploader from "../../../lib/fileUploader"

type Inputs = {
  title: string
  blog: string
  intro: string
  tags: string
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
    reset,
  } = useForm<Inputs>()
  const blogsContext = useBlogs()
  const router = useRouter()

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
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

  const clearForm = () => {
    setValue('blog', '')
    setCover('')
    reset()
  }

  const handleSaveBlog: SubmitHandler<Inputs> = async (data: any) => {
    if (!data.blog || data.blog === '') {
      setError('blog', { message: 'Blog content is required' })
      return
    }

    const id = Math.ceil(Math.random() * 100000000)
    const newBlog: Blog = {
      title: data.title,
      intro: data.intro,
      slug: data.title.split(' ').join('-').toLowerCase() + "-" + id,
      blog: data.blog.toString().replaceAll('<p><br></p>', ''),
      tags: data.tags && data.tags.length > 5
        ? data.tags.trim().split(",").map((tag: string) => tag.trim())
        : [],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      publishedAt: serverTimestamp(),
      draft: false,
      published: false
    }

    if (cover) newBlog.cover = cover

    if (newBlog.blog === '') {
      setError('blog', { message: 'Blog content is required' })
      return
    }

    const response = await blogsContext.createBlog(newBlog)
    if (response.success) {
      clearForm()
      router.push('/admin/blogs')
    }


  }

  // useEffect(() => {
  //   setValue

  // }, [setValue])


  return (
    <ContainerBlock>
      <AdminWrapper>
        <div className="_shadow2 relative my-12 flex flex-col items-center rounded-2xl bg-white p-6">
          <Link href="/admin/blogs">
            <a className="absolute top-2 left-2 cursor-pointer rounded-lg p-4 hover:bg-gray-100">
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
                  className="relative z-[542] inline-block text-left ring-0 focus:ring-0"
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
                          className={`cursor-pointer border bg-white ${uploading && 'cursor-not-allowed'
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
                className={`block w-full rounded-lg bg-grayish p-3 focus:outline-none focus:ring-0 ${errors.title && 'ring-1 ring-red-400'
                  }`}
                {...register('title', {
                  required: {
                    value: true,
                    message: 'Title is required',
                  },
                  minLength: {
                    value: 10,
                    message: 'Title should be 10-100 characters',
                  },
                  maxLength: {
                    value: 100,
                    message: 'Title should be 10-100 characters',
                  },
                })}
              />
              {errors.title && (
                <span className="text-sm text-red-600">
                  {errors.title.message}
                </span>
              )}
            </div>

            {/* Intro */}
            <div className="mt-6 flex flex-col gap-2">
              <label htmlFor="intro" className="text-sm">
                Blog Intro
              </label>
              <input
                type="text"
                placeholder="Blog Intro"
                className={`block w-full rounded-lg bg-grayish p-3 focus:outline-none focus:ring-0 ${errors.title && 'ring-1 ring-red-400'
                  }`}
                {...register('intro', {
                  required: {
                    value: true,
                    message: 'Intro is required',
                  },
                  minLength: {
                    value: 25,
                    message: 'Intro should be more than 25 characters',
                  }
                })}
              />
              {errors.intro && (
                <span className="text-sm text-red-600">
                  {errors.intro.message}
                </span>
              )}
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-col gap-2">
              <label htmlFor="intro" className="text-sm">
                Blog Tags
              </label>
              <input
                type="text"
                placeholder="tags1, tag 2, tag-3,"
                className={`block w-full rounded-lg bg-grayish p-3 focus:outline-none focus:ring-0`}
                {...register('tags')}
              />
            </div>

            {/* Blog */}
            <div className="mt-6 flex flex-col gap-2">
              <label htmlFor="" className="text-sm">
                Blog Content
              </label>
              <ReactQuillEditor
                hasErrors={
                  errors?.blog?.message
                    ? errors?.blog?.message?.length > 0
                    : false
                }
                handleChange={(blog) => {
                  console.log(blog);

                  setValue('blog', blog)
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
              disabled={blogsContext.creating}
              className=" mt-4 flex w-full justify-center rounded-lg border border-primary bg-primary py-3
              px-6 text-lg text-white hover:opacity-75 disabled:cursor-not-allowed disabled:bg-opacity-75
              "
            >
              {blogsContext.creating ? (
                <FaSpinner className="animate-spin" />
              ) : (
                'Save'
              )}
            </button>
          </form>
        </div>
      </AdminWrapper>
    </ContainerBlock>
  )
}

export default Blogs
