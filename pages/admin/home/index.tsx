import { NextPage } from 'next'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

import AdminWrapper from '../../../components/admin/AdminWrapper'
import ContainerBlock from '../../../components/ContainerBlock'

const Blogs: NextPage = () => {
  return (
    <ContainerBlock
      title="Martin - Software Developer - REACT,NEXT,NODE..."
      description="I've been developing websites for more than 2 years straight. Get in touch with me to know more."
      showInterest={false}
    >
      <AdminWrapper>
        <div className="my-12 flex flex-wrap gap-8 rounded-2xl bg-pale-orange p-6">
          <div className="flex h-[200px] w-full items-center justify-center rounded-2xl bg-primary p-5 sm:w-[250px]">
            <h2 className="text-9xl font-bold text-white">GM</h2>
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <h2 className="text-3xl font-bold">Martin Mwangi</h2>
            <p className="mt-3 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              adipisci a quidem eli
            </p>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">

          {/* Blogs */}
          <div className="rounded-md bg-dark p-5 text-white">
            <div className="flex items-center gap-2">
              <h2 className="text-5xl font-bold">12</h2>
              <p className="text-xl">Blogs</p>
            </div>
            <div className="mt-3 flex cursor-pointer items-center gap-2 rounded-md p-1 hover:bg-primary hover:text-white">
              <div className="">
                <FaPlus />
              </div>
              <span>New Blog</span>
            </div>
          </div>


          {/* Book Notes */}
          <div className="rounded-md bg-dark p-5 text-white">
            <div className="flex items-center gap-2">
              <h2 className="text-5xl font-bold">12</h2>
              <p className="text-xl">Book Notes</p>
            </div>
            <div className="mt-3 flex cursor-pointer items-center gap-2 justify-start rounded-md p-1 hover:bg-primary hover:text-white">
              <div className="">
                <FaPlus />
              </div>
              <span>New Book Notes</span>
            </div>
          </div>

          {/* Projects */}
          <div className="rounded-md bg-dark p-5 text-white">
            <div className="flex items-center gap-2">
              <h2 className="text-5xl font-bold">12</h2>
              <p className="text-xl">Projects</p>
            </div>
            <div className="mt-3 flex cursor-pointer items-center gap-2 rounded-md p-1 hover:bg-primary hover:text-white">
              <div className="">
                <FaPlus />
              </div>
              <span>New Project</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <h2 className="text-lg">Posts By Martin</h2>
          <div className="flex cursor-pointer items-center gap-2 rounded-md px-4 py-1 hover:bg-primary hover:text-white">
            <div className="">
              <FaPlus />
            </div>
            <span>New Post</span>
          </div>
        </div>

        <div className="flex min-h-[400px] items-center justify-center">
          <h4 className="text-4xl font-bold uppercase opacity-30">
            No Post Yet
          </h4>
        </div>
      </AdminWrapper>
    </ContainerBlock>
  )
}

export default Blogs
