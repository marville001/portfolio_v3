import Link from 'next/link'
import React, { useState } from 'react'
import ContainerBlock from '../../components/ContainerBlock'

import { FaChevronLeft, FaChevronRight, FaTimesCircle } from 'react-icons/fa'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const Portfolio = () => {
  const [filters, setFilters] = useState<number[]>([])
  return (
    <ContainerBlock
      title="Martin Mwangi - My Portfolio Projects"
      description="Get in touch with me to know more"
    >
      <div className="bg-primary">
        <div className="md-px-6 mx-auto max-w-[900px] bg-primary py-10 px-2 sm:px-4">
          <h1 className="text-center text-4xl font-light text-white">
            Welcome to My Portfolio
          </h1>
          <div className="flex justify-center">
            <p className="my-5 max-w-[400px] text-center text-sm text-gray-200">
              Take a look of some of the awesome projects project I have been
              working on since I started learning programming. To View the full
              list, click archive button bellow.
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="/archive">
              <a className="rounded-md bg-dark py-1.5 px-6 text-white">
                View Archive
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container  py-12">
          <div className="mb-4">
            <h4>Filter By:</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5, 6, 7].map((tag, i) => (
                <div
                  key={i}
                  onClick={() =>
                    setFilters((prev) =>
                      prev.includes(tag)
                        ? prev.filter((a) => a !== tag)
                        : [...prev, tag]
                    )
                  }
                  className={`duration-50 flex cursor-pointer items-center gap-1 rounded border px-3 py-1 text-center text-xs transition-all  
			  ${
          filters.includes(tag)
            ? 'bg-primary text-white'
            : 'border-primary text-primary'
        }`}
                >
                  React.Js{' '}
                  {filters.includes(tag) && (
                    <span>
                      <FaTimesCircle />
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <hr className="my-4" />
          {/* Portfolios */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((blog) => (
              <div key={blog} className="">
                <article className="overflow-hidden rounded border">
                  <div className="h-[200px] w-full items-stretch overflow-hidden">
                    <Splide
                      options={{
                        pauseOnHover: true,
                        autoplay: true,
                        type: 'loop',
                        rewind: true,
                        //   arrows: false,
                      }}
                      aria-label="Property Images"
                    >
                      {[1, 2, 3, 4].map((i) => (
                        <SplideSlide key={i}>
                          <img
                            src="https://www.radiustheme.com/demo/wordpress/themes/homlisti/wp-content/uploads/classified-listing/2022/03/mike_hussy-400x240.jpg"
                            className="h-[200px] w-full"
                          />
                        </SplideSlide>
                      ))}
                    </Splide>
                  </div>

                  <div className="p-4">
                    <a className="text-md text-primary">
                      <h3>Full Ecommerce Website</h3>
                    </a>

                    <p className="mt-2 text-sm">
                      We might not like ambiguity, but it’s a fact of life. Find
                      out how to plan with uncertainty in mind.
                    </p>

                    <div className="mt-2 flex items-center justify-between">
                      <Link href="/portfolio">
                        <a className="flex-1 rounded-l border border-primary px-3 py-1 text-center text-sm text-primary transition-all duration-150 hover:bg-primary hover:text-white">
                          Demo
                        </a>
                      </Link>
                      <Link href={`/portfolio/slug`}>
                        <a className="flex-1 border border-x-0 border-primary px-3 py-1 text-center text-sm text-primary transition-all duration-150 hover:bg-primary hover:text-white">
                          Read More
                        </a>
                      </Link>

                      <Link href="/portfolio">
                        <a className="flex-1 rounded-r border border-primary px-3 py-1 text-center text-sm text-primary transition-all duration-150 hover:bg-primary hover:text-white">
                          Code
                        </a>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/*  */}
          <div className="mt-5 flex justify-end">
            <div className="flex items-center gap-2">
              <FaChevronLeft className="cursor-not-allowed text-xl text-slate-300" />
              <div className="rounded-md bg-primary px-3 py-1 text-sm text-white">
                1
              </div>
              <FaChevronRight className="cursor-pointer text-xl text-slate-900" />
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </ContainerBlock>
  )
}

export default Portfolio
