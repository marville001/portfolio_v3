import Link from 'next/link'
import React, { useState } from 'react'

import { Project } from '../../../types/project'
import PortfolioCard from './PortfolioCard'

const Portfolios = (props: any) => {
  const projects: Project[] = props.projects

  return (
    <div className="">
      <div className="container py-8">
        {/* Header */}
        <div className="flex flex-col">
          <div className="flex gap-5">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Featured Projects
            </h2>
            <div className="flex items-center rounded-md bg-grayish px-4 py-1">
              15+ Projects
            </div>
          </div>
          <p className="mt-3 dark:text-white">
            Compilation of some of my previous works
          </p>
        </div>

        {/* Portfolios */}
        <div className="my-8 grid select-none grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects?.map((project: Project) => (
            <PortfolioCard project={project} key={project?._id} />
          ))}
        </div>

        {/* Show More */}
        <div className="my-10 flex justify-center">
          <Link href="/portfolio">
            <a className="rounded-full bg-primary px-16 py-3 text-white disabled:cursor-not-allowed disabled:opacity-60">
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
