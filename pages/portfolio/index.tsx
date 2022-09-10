import Link from 'next/link'
import React, { useState } from 'react'
import ContainerBlock from '../../components/ContainerBlock'

import { FaChevronLeft, FaChevronRight, FaTimesCircle } from 'react-icons/fa'

import PortfolioCard from '../../components/home/portfolios-section/PortfolioCard'
import { Project } from '../../types/project'
import ContactCallAction from '../../components/ContactCallAction'

interface Props {
  projects: Project[]
}

const Portfolio = (props: Props) => {
  const [filters, setFilters] = useState<number[]>([])
  const [page, setPage] = useState(1)

  return (
    <ContainerBlock
      title="Martin - My Portfolio Projects"
      description="A list of all my projects. Mostly are website applications"
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

      <div className="bg-gray-400 my-0 h-[1px] hidden dark:block container bg-opacity-20"></div>

      <div className="bg-white dark:bg-dark">
        <div className="container  py-12">

          {/* Portfolios */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {props?.projects?.map((project) => (
              <PortfolioCard project={project} key={project._id} />
            ))}
          </div>

         

          {/*  */}
        </div>
      </div>

      <div className="bg-gray-400 my-0 h-[1px] hidden dark:block container bg-opacity-20"></div>
      <ContactCallAction />
    </ContainerBlock>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "project"] | order(_createdAt desc)'

  return {
    props: { projects: [] },
  }
}

export default Portfolio
