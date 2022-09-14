import { NextPage } from 'next'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ContainerBlock from '../../components/ContainerBlock'
import ContactCallAction from '../../components/ContactCallAction'

import blogsModel from '../../models/blogs.model'

const Blogs: NextPage = ({ blogs, total }: any) => {

  const [blogPosts, setBlogPosts] = useState<any[]>([]);

  useEffect(() => {
    setBlogPosts(typeof blogs === "object" ? [] : JSON.parse(blogs));
  }, [blogs, total])



  return (
    <ContainerBlock
      title="Martin - My Blogs"
      description="Welcome to my blog about ReactJs, NodeJs, Angular, Docker, Typescript, Sequelize, DevOps...etc"
    >
      <div className="bg-primary dark:bg-dim-dark">
        <div className="md-px-6 mx-auto max-w-[900px] bg-primary dark:bg-dim-dark py-10 px-2 sm:px-4">
          <h1 className="text-center text-4xl font-bold uppercase text-white">
            Welcome
          </h1>
          <div className="flex justify-center">
            <p className="my-5 max-w-[500px] text-center text-xl font-[400] text-white">
              Here I share my journey and learning experience in (but not
              limitted to ) web development, docker, aws, kubernetes, React.Js,
              Angular TailwindCss, Graphql, Node.js etc.
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="/programming-journey">
              <a className="rounded-md bg-dark hover:bg-accent py-1.5 px-6 text-white">
                View My Journeys
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-dark">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3">
            {blogPosts.map((blog) => (
              <Link key={blog.id} href={`/blogs/${blog.slug}`}>
                <a className="shadow-hover border cursor-pointer transition-all duration-150 ease-linear group dark:bg-dim-dark dark:text-white">
                  <article className="overflow-hidden rounded cursor-pointer">
                    <img
                      src={
                        blog.cover
                          ? blog.cover
                          : 'https://www.mountaingoatsoftware.com/images/made/uploads/blog/2022-06-21-living-with-uncertainty_600_314.png'
                      }
                      alt="My Blog"
                      className="cursor-pointer h-56 border-b object-cover w-full"
                    />

                    <div className="p-5">
                      <h3 className='text-xl font-bold'>
                        {blog.title}
                      </h3>
                    </div>
                  </article>
                </a>
              </Link>
            ))}
          </div>
          {blogPosts.length === 0 &&
            <div className="flex min-h-[400px]  items-center justify-center">
              <h4 className="text-4xl font-bold uppercase opacity-30">
                No Blog Post Yet
              </h4>
            </div>
          }
        </div>
      </div>

      <div className="bg-gray-400 my-0 h-[1px] hidden dark:block container bg-opacity-20"></div>

      <ContactCallAction />
    </ContainerBlock>
  )
}

export async function getServerSideProps() {
  try {
    const blogs = await blogsModel.getAllBlogs('createdAt', "desc")

    return {
      props: { blogs: JSON.stringify(blogs) || [] },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { blogs: [], total: 0 },
    };
  }
}

export default Blogs
