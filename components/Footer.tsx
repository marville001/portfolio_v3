import Link from 'next/link'
import React from 'react'

export const Footer = ({ showInterest = true }) => {
  return (
    <div className="bg-dim-dark">
      {showInterest && (
        <div className="container min-h-[200px] py-6 text-white">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h4 className="text-lg">Positions Of Interest</h4>
              <div className="my-2 h-[1px] w-16 bg-white bg-opacity-40"></div>

              <div className="mt-6 flex flex-wrap gap-2 text-sm">
                <div className="cursor-pointer rounded-xl bg-white bg-opacity-5 py-2 px-5 hover:bg-opacity-20">
                  React Js Developer
                </div>
                <div className="cursor-pointer rounded-xl bg-white bg-opacity-5 py-2 px-5 hover:bg-opacity-20">
                  Node Js Developer
                </div>
                <div className="cursor-pointer rounded-xl bg-white bg-opacity-5 py-2 px-5 hover:bg-opacity-20">
                  Angular Developer
                </div>
                <div className="cursor-pointer rounded-xl bg-white bg-opacity-5 py-2 px-5 hover:bg-opacity-20">
                  Full Stack Developer
                </div>
                <div className="cursor-pointer rounded-xl bg-white bg-opacity-5 py-2 px-5 hover:bg-opacity-20">
                  Lead Web Developer
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg">Salary Range</h4>
              <div className="my-2 h-[1px] w-16 bg-white bg-opacity-40"></div>

              <div className="mt-6">
                <h2>Annual</h2>
                <p className='opacity-75 my-2'>Accepting cutom offers</p>
                {/* <p className="my-2 flex items-center gap-2">
                  <span className="text-sm text-white opacity-40">From</span>
                  <span>40,000 $USD</span>
                  <span className="text-sm text-white opacity-40">To</span>
                  <span>+150,000 $USD</span>
                </p> */}
                <h2>Per hour:</h2>
                <p className='opacity-75 my-2'>Accepting cutom offers</p>
                {/* <p className="my-2 flex items-center gap-2">
                  <span className="text-sm text-white opacity-40">From</span>
                  <span>20.00 $USD</span>
                  <span className="text-sm text-white opacity-40">To</span>
                  <span>+100.22 $USD</span>
                </p> */}
              </div>
            </div>

            <div className="rounded-xl bg-white bg-opacity-10 p-4">
              <p className="text-xs tracking-wide">
                NOTE: In case you have an idea for a project but you estimate
                that your budget may be very small, do not refrain from
                contacting me and presenting your project to me. I'm working to
                provide flexible payment methods that allow us to carry out
                great projects, without cost being a barrier.
              </p>

              <button className="mt-5 w-full rounded-full bg-white py-2 text-center font-semibold text-dark hover:bg-opacity-80">
                Schedule a meeting
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="bg-white py-10">
        <div className="container flex flex-col items-start gap-4 md:flex-row md:justify-center">
          <div className="flex flex-1 flex-col">
            <p>
              This website has been designed and developed by me from scratch :)
            </p>
            <p className="text-sm">
              Copyright <span className="font-bold text-primary">@Martin</span>{' '}
              {new Date().getFullYear()}
            </p>
          </div>
          <Link href="mailto:mwangimartin1904@gmail.com">
            <a
              target="_blank"
              className="inline-block rounded-full bg-primary py-2 px-8  text-center text-white hover:bg-opacity-80"
            >
              Contact Me Via Email
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
