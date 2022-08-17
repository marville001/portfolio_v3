import Link from 'next/link'
import React from 'react'

import { Project } from '../../../types/project'
import PortfolioCard from './PortfolioCard'

const Portfolios = (props: any) => {
  const projects: Project[] = props.projects

  return (
    <div className="">
      <div className="container py-8">

        <h1 className="mb-2 select-none text-center text-xl font-bold uppercase opacity-50">
          featured projects
        </h1>
        <h2 className="text-center text-3xl mt-5 font-bold capitalize text-dim-dark dark:text-white">
          What I have worked on
        </h2>

        {/* Portfolios */}
        <div className="my-8 lg:my-16 grid select-none grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map(project => (
            <div key={project}
              className="relative min-h-[225px] group bg-opacity-40 hover:bg-opacity-100 justify-center 
                      rounded-xl duration-150 ease-linear  p-4 flex flex-col items-center cursor-pointer">

                <img className='rounded-lg border h-auto md:h-52 w-full' src="https://cdn.sanity.io/images/dgoqf851/production/7af39add5b4c748bb1e6bb2492cbd95e7bfcae70-1428x917.png" alt="" />
                <h4 className='self-start mt-4'>The New Project Around Lorem ipsum dolor sit.</h4>
              </div>
          ))}


        </div>

        {/* Show More */}
        <div className="my-10 flex justify-center">
          <Link href="/portfolio">
            <a className="rounded-full bg-primary bg-opacity-80 hover:bg-opacity-100 tracking-wider px-8 py-2 uppercase text-sm text-white">
              View more
            </a>
          </Link>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Portfolios
