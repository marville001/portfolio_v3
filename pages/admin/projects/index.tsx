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
              Projects
              <span className="rounded-lg bg-primary px-2 pt-2 ml-2 text-base text-white">
                <sup>
                  {blogsContext.blogs.length}
                </sup>
              </span>
            </h2>
            <p className="mt-3 text-lg">
              Our mind must be free in order to express our qualities.
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <h2 className="text-lg dark:text-white">Posts By Martin</h2>
          <Link href="/admin/projects/new">
            <a className="flex cursor-pointer items-center gap-2 rounded-md px-4 py-1 dark:bg-primary dark:text-white hover:bg-primary hover:text-white">
              <div className="">
                <FaPlus />
              </div>
              <span>New Project</span>
            </a>
          </Link>
        </div>

        {blogsContext.blogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 py-12  sm:grid-cols-2 lg:grid-cols-3 ">
            {blogsContext.blogs.map((blog) => (
              <article key={blog?.id} className="overflow-hidden rounded border self-start">
                <Link href={`/blogs/${blog.slug}`}>
                  <img
                    src={
                      blog.cover
                        ? blog.cover
                        : 'https://www.mountaingoatsoftware.com/images/made/uploads/blog/2022-06-21-living-with-uncertainty_600_314.png'
                    }
                    alt="My Blog"
                    className="cursor-pointer object-cover border-b h-48 w-full"
                  />
                </Link>

                <div className="p-5">
                  <Link href={`/blogs/${blog.slug}`}>
                    <a className="text-lg text-primary hover:underline">
                      <h3>
                        {blog.title}
                      </h3>
                    </a>
                  </Link>

                  <div className="mt-5 flex items-center justify-between">
                    <p className='dark:text-white'>{new Date(blog?.createdAt).toDateString().substring(3)}</p>

                    <Link href={`/admin/blogs/${blog.id}`}>
                      <a className="rounded tracking-wider border border-accent px-3 py-1 text-accent transition-all duration-150 hover:bg-accent hover:text-white">
                        Edit
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
