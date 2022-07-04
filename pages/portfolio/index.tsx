import Link from 'next/link'
import React from 'react'
import ContainerBlock from '../../components/ContainerBlock'

const Portfolio = () => {
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
          <div className="mb-4 flex items-center justify-end gap-2">
            <h4>Language</h4>
            <select className='border px-5 py-2 rounded-md' name="" id="">
              <option value="all">All</option>
            </select>
          </div>
          {/* Portfolios */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((blog) => (
              <div key={blog} className="">
                <article className="overflow-hidden rounded border">
                  <Link href="/portfolio">
                    <img
                      src="https://www.mountaingoatsoftware.com/images/made/uploads/blog/2022-06-21-living-with-uncertainty_600_314.png"
                      alt="My Blog"
                      className="h-52 w-full cursor-pointer object-fill"
                    />
                  </Link>

                  <div className="p-4">
                    <a className="text-lg text-primary">
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
        </div>
      </div>
    </ContainerBlock>
  )
}

export default Portfolio
