import Link from 'next/link'
import React from 'react'
import { FaGithubAlt, FaLinkedinIn, FaMapMarkerAlt } from 'react-icons/fa'

const HeroSection = () => {
  return (
    <div className="section grid grid-cols-1 py-10 md:py-16 lg:py-20 dark:bg-dark md:max-h-[600px] md:grid-cols-2 container">

      <div className="px-4  py-8 sm:px-10">
        <h2 className="flex text-dark dark:text-white items-center gap-4 font-bold opacity-30">
          <FaMapMarkerAlt />
          <span>Nyeri, Kenya</span>
        </h2>

        <h1 className="mt-10 text-accent text-3xl font-bold sm:text-4xl">Martin Mwangi Wanjiku</h1>
        <h1 className="mb-6 text-dark dark:text-white mt-5 text-xl font-bold sm:text-2xl opacity-75">
          Junior Software Developer
        </h1>
        <p className="mt-5 max-w-[700px] text-dark dark:text-white">
          With some years of experience in software development, I am dedicated
          to designing and developing User Interfaces and experiences focused on
          their emotions ( UI / UX ), used in web platforms and apps.
        </p>
        <div className="my-8 flex gap-5">
          <Link href="https://www.linkedin.com/in/marville001/">
            <a
              target="_blank"
              className="flex cursor-pointer items-center rounded-md bg-primary px-2 py-1 text-white"
            >
              <FaLinkedinIn className="pr-2 text-2xl" />
              <div className="h-4 w-[1px] bg-gray-300"></div>
              <span className="pl-2 text-lg">LinkedIn</span>
            </a>
          </Link>
          <Link href="https://github.com/marville001">
            <a
              target="_blank"
              className="flex cursor-pointer items-center rounded-md bg-primary px-2 py-1 text-white"
            >
              <FaGithubAlt className="pr-2 text-2xl" />
              <div className="h-4 w-[1px] bg-gray-300"></div>
              <span className="pl-2 text-lg">Github</span>
            </a>
          </Link>
        </div>
      </div>
      <div
        className="h-60 md:h-auto flex items-center justify-center"
      >
        <img className='h-[100%] md:h-[80%]' src="/assets/hero-me-dark.gif" alt="Martin Mwangi" />
      </div>
    </div>
  )
}

export default HeroSection
