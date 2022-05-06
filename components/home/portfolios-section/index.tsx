import React, { useState } from 'react'

import { Project } from '../../../types/project'
import PortfolioCard from './PortfolioCard'

const Portfolios = (props: any) => {
  const projects: Project[] = props.projects

  const [pageSize, setPageSize] = useState(6)

  return (
    <div className="">
      <div className="container py-8">
        {/* Header */}
        <div className="flex flex-col">
          <div className="flex gap-5">
            <h2 className="text-3xl font-bold text-slate-900">Briefcase</h2>
            <div className="flex items-center rounded-md bg-grayish px-4 py-1">
              {projects?.length ?? 0} Projects
            </div>
          </div>
          <p className="mt-3">Compilation of some of our previous works</p>
        </div>

        {/* Portfolios */}
        <div className="my-8 grid select-none grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {[...projects].splice(0, pageSize)?.map((project: Project) => (
            <PortfolioCard project={project} key={project?._id} />
          ))}
        </div>

        {/* Show More */}
        <div className="my-10 flex justify-center">
          <button
            onClick={() => setPageSize(pageSize + 6)}
            className="rounded-full bg-primary px-16 py-3 text-white disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={pageSize > projects?.length}
          >
            Show more
          </button>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Portfolios
