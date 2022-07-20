import { NextPage } from 'next'
import Link from 'next/link'
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
          <div className="flex h-[100px] w-full items-center justify-center rounded-2xl bg-primary p-5 sm:w-[150px]">
            <h2 className="text-5xl font-bold text-white">MM</h2>
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <h2 className="text-3xl font-bold">Posts</h2>
            <p className="mt-3 text-lg">
              Our mind must be free in order to express our qualities.
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <h2 className="text-lg">Posts By Martin</h2>
          <Link href="/admin/blogs/new">
            <a className="flex cursor-pointer items-center gap-2 rounded-md px-4 py-1 hover:bg-primary hover:text-white">
              <div className="">
                <FaPlus />
              </div>
              <span>New Post</span>
            </a>
          </Link>
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
