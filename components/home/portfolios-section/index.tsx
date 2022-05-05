import React from 'react'
import { FaArrowsAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Portfolios = () => {
  return (
    <div className="">
      <div className="container py-8">
        {/* Header */}
        <div className="flex flex-col">
          <div className="flex gap-5">
            <h2 className="text-3xl font-bold text-slate-900">Briefcase</h2>
            <div className="flex items-center rounded-md bg-grayish px-4 py-1">
              44 Projects
            </div>
          </div>
          <p className="mt-3">Compilation of some of our previous works</p>
        </div>

        {/* Portfolios */}
        <div className="my-8 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((project) => (
            <div
              key={project}
              className="group relative min-h-[225px] cursor-pointer rounded-md bg-slate-400 p-5"
            >
              {/* Maximize Icon */}
              <div className="absolute right-5 top-5 cursor-pointer p-2  bg-slate-200 bg-opacity-25 rounded-md  hidden group-hover:block transition-all duration-150 ease-linear">
                <FaArrowsAlt className="text-2xl rotate-45 origin-center opacity-50" />
              </div>

              {/* Arrow - left */}
              <div className="absolute left-0 top-1/2 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-gray-800 p-1 text-white">
                <FaChevronLeft className="text-sm" />
              </div>

              {/* Arrow - right */}
              <div className="absolute right-0 top-1/2 flex translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-gray-800 p-1 text-white">
                <FaChevronRight className="text-sm" />
              </div>
            </div>
          ))}
        </div>

        {/* Show More */}
        <div className="my-10 flex justify-center">
          <button className="rounded-full bg-primary px-16 py-3 text-white">
            Show more
          </button>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Portfolios
