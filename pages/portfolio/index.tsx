import Link from 'next/link'
import React, { useState } from 'react'
import ContainerBlock from '../../components/ContainerBlock'

import { FaChevronLeft, FaChevronRight, FaTimesCircle } from 'react-icons/fa'

import PortfolioCard from '../../components/home/portfolios-section/PortfolioCard'
import { client } from '../../lib/sanity'
import { Project } from '../../types/project'

interface Props {
  projects: Project[]
}

const Portfolio = (props: Props) => {
  const [filters, setFilters] = useState<number[]>([])
  const [page, setPage] = useState(1)

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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {props?.projects?.map((project) => (
              <PortfolioCard project={project} key={project._id} />
            ))}
          </div>

          {/*  */}
          <div className="mt-5 flex justify-end">
            <div className="flex items-center gap-2">
              <FaChevronLeft
                onClick={() =>
                  setPage((prev) =>
                    props?.projects?.length < 12 + (page - 1) * 10
                      ? prev - 10
                      : prev
                  )
                }
                className={`cursor-pointer text-xl ${
                  props?.projects?.length > 12 + (page - 1) * 10
                    ? 'cursor-not-allowed text-slate-300'
                    : ' cursor-pointer text-slate-900'
                }`}
              />
              <div className="rounded-md bg-primary px-3 py-1 text-sm text-white">
                1
              </div>
              <FaChevronRight
                onClick={() =>
                  setPage((prev) =>
                    props?.projects?.length > 12 + (page - 1) * 10
                      ? prev + 10
                      : prev
                  )
                }
                className={`cursor-pointer text-xl ${
                  props?.projects?.length > 12 + (page - 1) * 10
                    ? 'cursor-not-allowed text-slate-300'
                    : ' cursor-pointer text-slate-900'
                }`}
              />
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </ContainerBlock>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "project"] | order(_createdAt desc)'
  const projects = await client.fetch(query)

  return {
    props: { projects },
  }
}

export default Portfolio
