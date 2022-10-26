import { serverTimestamp } from 'firebase/firestore'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { ChangeEvent, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { FaChevronLeft, FaSpinner, FaTimes } from 'react-icons/fa'

import AdminWrapper from '../../../components/admin/AdminWrapper'
import ContainerBlock from '../../../components/ContainerBlock'
import ReactQuillEditor from '../../../components/ReactQuillEditor'
import fileUploader from '../../../lib/fileUploader'
import projectsModel from '../../../models/projects.model.ts'
import { IProject } from '../../../types/project'

type Inputs = {
  name: string
  description: string
  intro: string
  tag: string
  draft: boolean
  featured: boolean
  archived: boolean
  website: boolean
  github: boolean
}

const NewProject: NextPage = () => {
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [image, setImage] = useState('')
  const [state, setState] = useState({
    draft: false,
    featured: false,
    archived: false
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
    reset,
  } = useForm<Inputs>()
  const router = useRouter()

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    if (files!.length === 0) return

    try {
      setUploading(true)
      const data = await fileUploader(files![0])
      setImage(data)
      setUploading(false)
    } catch (error) {
      setUploading(false)
    }
  }

  const clearForm = () => {
    setValue('description', '')
    setImage('')
    reset()
  }

  const handleSaveProject: SubmitHandler<Inputs> = async (data: any) => {
    if (!data.description || data.description === '') {
      setError('description', { message: 'Project description is required' })
      return
    }

    const id = Math.ceil(Math.random() * 100000000)
    const newProject: IProject = {
      name: data.name,
      intro: data.intro,
      website: data.website,
      github: data.github,
      tag: data.tag,
      slug: id + "-" + data.name.split(' ').join('-').toLowerCase(),
      description: data.description.toString().replaceAll('<p><br></p>', ''),
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      images: [image],
      ...state
    }

    const notification = toast.loading("Saving Project!")
    setSaving(true)
    try {

      await projectsModel.createProject(newProject);
      setSaving(false)
      toast.success("Project Saved Successfully!", { id: notification })
      clearForm()
      router.push('/admin/projects')
    } catch (error) {
      setSaving(false)
      console.log(error);

      toast.success("An error occurred. Check console log", { id: notification })
    }

  }

  // useEffect(() => {
  //   setValue

  // }, [setValue])



  return (
    <ContainerBlock>
      <AdminWrapper>
        <div className="_shadow2 relative my-12 flex flex-col items-center rounded-2xl bg-white dark:bg-dim-dark  p-6">
          <Link href="/admin/projects">
            <a className="absolute top-2 left-2 cursor-pointer rounded-lg dark:hover:text-dark dark:text-white p-4 hover:bg-gray-100">
              <FaChevronLeft />
            </a>
          </Link>
          <div className="flex flex-1 justify-center dark:text-white">
            <h2 className="text-3xl font-bold">New Project</h2>
          </div>

          <form onSubmit={handleSubmit(handleSaveProject)} className="flex flex-col md:flex-row my-16 w-full">
            <div className="w-full md:w-[300px] dark:bg-dark dark:text-white rounded-md shadow h-min p-5">
              <h2 className='font-bold mb-2'>Settings</h2>
              <hr className='mb-3' />
              <label htmlFor="isDraft" className='flex items-center space-x-3 mt-4'>
                <input
                  checked={state.draft} onChange={e => setState(prev => ({ ...prev, draft: e.target.checked }))}
                  type="checkbox" className='h-5 w-5' name="" id="isDraft" />
                <span>Save as draft</span>
              </label>
              <label htmlFor="isFeatured" className='flex items-center space-x-3 mt-4'>
                <input checked={state.featured} onChange={e => setState(prev => ({ ...prev, featured: e.target.checked }))}
                  type="checkbox" className='h-5 w-5' name="" id="isFeatured" />
                <span>Featured Project</span>
              </label>
              <label htmlFor="isArchived" className='flex items-center space-x-3 mt-4'>
                <input
                  checked={state.archived} onChange={e => setState(prev => ({ ...prev, archived: e.target.checked }))}
                  type="checkbox" className='h-5 w-5' name="" id="isArchived" />
                <span>Archived Project</span>
              </label>
            </div>

            <div

              className=" w-full flex-1 p-4"
            >
              {/* Blog Cover Image */}
              {image ? (
                <div className="relative">
                  <div
                    onClick={() => setImage('')}
                    className="absolute right-2 top-2 cursor-pointer rounded-lg bg-white p-2"
                  >
                    <FaTimes className="text-xl" />
                  </div>
                  <img
                    src={image}
                    alt="Project"
                    className="h-auto max-h-[400px] w-full rounded-lg object-cover"
                  />
                </div>
              ) : (
                <label
                  htmlFor="cover-uploader"
                  className={`cursor-pointer ${uploading && 'cursor-not-allowed'
                    }  flex  items-center border h-48 justify-center gap-2 px-8 py-3 text-accent`}
                >
                  {uploading && (
                    <FaSpinner className="animate-spin text-lg" />
                  )}{' '}
                  Choose Project Image
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
              )}

              {/* Name */}
              <div className="mt-6 flex flex-col gap-2">
                <label htmlFor="name" className="dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Project Name"
                  className={`block w-full rounded-lg bg-grayish p-3 focus:outline-none focus:ring-0 ${errors.name && 'ring-1 ring-red-400'
                    }`}
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Name is required',
                    },
                  })}
                />
                {errors.name && (
                  <span className="text-sm text-red-600">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Intro */}
              <div className="mt-6 flex flex-col gap-2">
                <label htmlFor="intro" className="dark:text-white">
                  Intro
                </label>
                <textarea
                  placeholder="Blog Intro"
                  className={`block w-full rounded-lg bg-grayish p-3 focus:outline-none focus:ring-0 ${errors.intro && 'ring-1 ring-red-400'
                    }`}
                  {...register('intro', {
                    required: {
                      value: true,
                      message: 'Intro is required',
                    }
                  })}
                ></textarea>
                {errors.intro && (
                  <span className="text-sm text-red-600">
                    {errors.intro.message}
                  </span>
                )}
              </div>

              {/* Tag */}
              <div className="mt-6 flex flex-col gap-2">
                <label htmlFor="intro" className="dark:text-white">
                  Tag
                </label>
                <input
                  type="text"
                  placeholder="Eg. Reactjs"
                  className={`block w-full rounded-lg bg-grayish p-3 focus:outline-none focus:ring-0`}
                  {...register('tag')}
                />
              </div>

              {/* Demo Link */}
              <div className="mt-6 flex flex-col gap-2">
                <label htmlFor="intro" className="dark:text-white">
                  Demo Link
                </label>
                <input
                  type="text"
                  placeholder="www.example.com"
                  className={`block w-full rounded-lg bg-grayish p-3 focus:outline-none focus:ring-0`}
                  {...register('website')}
                />
              </div>

              {/* Github Link */}
              <div className="mt-6 flex flex-col gap-2">
                <label htmlFor="intro" className="dark:text-white">
                  Github Link
                </label>
                <input
                  type="text"
                  placeholder="https://github.com/repository"
                  className={`block w-full rounded-lg bg-grayish p-3 focus:outline-none focus:ring-0`}
                  {...register('github')}
                />
              </div>

              {/* description */}
              <div className="mt-6 flex flex-col gap-2">
                <label htmlFor="" className="">
                  Description
                </label>
                <ReactQuillEditor
                  hasErrors={
                    errors?.description?.message
                      ? errors?.description?.message?.length > 0
                      : false
                  }
                  handleChange={(description) => {
                    setValue('description', description)
                    clearErrors('description')
                  }}
                />
                {errors.description && (
                  <span className="text-sm text-red-600">
                    {errors.description.message}
                  </span>
                )}
              </div>

              <button
                disabled={saving}
                className=" mt-4 flex w-full justify-center rounded-lg border border-primary bg-primary py-3
              px-6 text-lg text-white hover:opacity-75 disabled:cursor-not-allowed disabled:bg-opacity-75
              "
              >
                {saving ? (
                  <FaSpinner className="animate-spin" />
                ) : (
                  'Save'
                )}
              </button>
            </div>
          </form>
        </div>
      </AdminWrapper>
    </ContainerBlock>
  )
}

export default NewProject
