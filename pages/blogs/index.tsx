import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import { FaChevronLeft, FaChevronRight, FaSearch } from 'react-icons/fa'
import ContainerBlock from '../../components/ContainerBlock'

const Blogs: NextPage = () => {
  return (
    <ContainerBlock
      title="Martin Mwangi - My Blogs"
      description="Get in touch with me to know more"
    >
      <div className="bg-primary">
        <div className="md-px-6 mx-auto max-w-[900px] bg-primary py-10 px-2 sm:px-4">
          <h1 className="text-center text-4xl font-light text-white">
            Welcome to Martin Mwangi's Blog
          </h1>
          <div className="flex justify-center">
            <p className="my-5 max-w-[400px] text-center text-sm text-gray-200">
              Here I share my journey and learning experience in (but not
              limitted to ) web development, docker, aws, kubernetes, React.Js,
              Angular TailwindCss, Graphql, Node.js etc.
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="/programming-journey">
              <a className="rounded-md bg-dark py-1.5 px-6 text-white">
                View My Journeys
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((blog) => (
              <div key={blog} className="">
                <article className="overflow-hidden rounded border">
                  <Link href="/blogs">
                    <img
                      src="https://www.mountaingoatsoftware.com/images/made/uploads/blog/2022-06-21-living-with-uncertainty_600_314.png"
                      alt="My Blog"
                      className="cursor-pointer"
                    />
                  </Link>

                  <div className="p-5">
                    <Link href="/blogs">
                      <a className="text-lg text-primary hover:underline">
                        <h3>
                          3 Ways to Help Agile Teams Plan Despite Uncertainty
                        </h3>
                      </a>
                    </Link>

                    <p className="mt-3 text-sm">
                      We might not like ambiguity, but it’s a fact of life. Find
                      out how to plan with uncertainty in mind.
                    </p>

                    <div className="mt-5 flex items-center justify-between">
                      <p>Jun 21, 2022</p>

                      <Link href="/blogs">
                        <a className="rounded border border-primary hover:text-white hover:bg-primary transition-all duration-150 px-3 py-1 text-primary">
                          Read
                        </a>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          <div className="mb-8 flex justify-end">
            <div className="flex items-center gap-2">
              <FaChevronLeft className="cursor-not-allowed text-xl text-slate-300" />
              <div className="rounded-md bg-primary px-3 py-1 text-sm text-white">
                1
              </div>
              <FaChevronRight className="cursor-pointer text-xl text-slate-900" />
            </div>
          </div>
        </div>
      </div>
    </ContainerBlock>
  )
}

export default Blogs
