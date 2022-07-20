import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

import AdminWrapper from '../../../components/admin/AdminWrapper'
import ContainerBlock from '../../../components/ContainerBlock'
import { useBlogs } from '../../../contexts/blogs.context'

const Blogs: NextPage = () => {
  const blogsContext = useBlogs()

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
            <h2 className="text-3xl font-bold">
              Blogs{' '}
              <span className="rounded-lg bg-primary p-2 text-base text-white">
                {blogsContext.blogs.length}
              </span>
            </h2>
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
              <span>New Blog</span>
            </a>
          </Link>
        </div>

        {blogsContext.blogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 py-12  sm:grid-cols-2 lg:grid-cols-3 ">
            {blogsContext.blogs.map((blog) => (
              <article className="overflow-hidden rounded border">
                {console.log(blog)}
                <Link href="/blogs">
                  <img
                    src={
                      blog.cover
                        ? blog.cover
                        : 'https://www.mountaingoatsoftware.com/images/made/uploads/blog/2022-06-21-living-with-uncertainty_600_314.png'
                    }
                    alt="My Blog"
                    className="cursor-pointer border-b h-40 w-full"
                  />
                </Link>

                <div className="p-5">
                  <Link href="/blogs">
                    <a className="text-lg text-primary hover:underline">
                      <h3>
                        {blog.title}
                      </h3>
                    </a>
                  </Link>

                  <p className="mt-3 text-sm">
                    {blog.intro}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <p>Jun 21, 2022</p>

                    <Link href="/blogs">
                      <a className="rounded border border-primary px-3 py-1 text-primary transition-all duration-150 hover:bg-primary hover:text-white">
                        Read
                      </a>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[400px] items-center justify-center">
            <h4 className="text-4xl font-bold uppercase opacity-30">
              No Post Yet
            </h4>
          </div>
        )}
      </AdminWrapper>
    </ContainerBlock>
  )
}

export default Blogs
