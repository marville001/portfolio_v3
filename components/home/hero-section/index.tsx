import Link from 'next/link'
import React from 'react'
import { FaGithubAlt, FaLinkedinIn, FaMapMarkerAlt } from 'react-icons/fa'


const HeroSection = () => {
  return (
    <div className="section grid grid-cols-1 py-10 bg-[#01014a] md:max-h-[600px] md:grid-cols-2">
      <div
        style={{
          backgroundImage: `url('/assets/undraw_programming_re_kg9v.svg')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="h-40 md:h-auto"
      >
        <div className="flex h-full w-full flex-col justify-center bg-[#01014a] bg-opacity-80 px-4 sm:px-10 md:items-end">
          <div className="bg-orange-400 py-4 px-6 text-xl text-white sm:px-16 sm:text-2xl">
            Martin Mwangi
          </div>
          <div className="my-8 flex gap-5">
            <Link href="https://www.linkedin.com/in/marville001/">
              <a target="_blank" className="flex cursor-pointer items-center rounded-md bg-primary px-2 py-1 text-white">
                <FaLinkedinIn className="pr-2 text-2xl" />
                <div className="h-4 w-[1px] bg-gray-300"></div>
                <span className="pl-2 text-lg">LinkedIn</span>
              </a>
            </Link>
            <Link href="https://github.com/marville001">
              <a target="_blank" className="flex cursor-pointer items-center rounded-md bg-primary px-2 py-1 text-white">
                <FaGithubAlt className="pr-2 text-2xl" />
                <div className="h-4 w-[1px] bg-gray-300"></div>
                <span className="pl-2 text-lg">Github</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-4 py-8 text-white sm:px-10">
        <h2 className="flex items-center gap-4 font-bold opacity-30">
          <FaMapMarkerAlt />
          <span>Nyeri, Kenya</span>
        </h2>

        <h1 className="mt-10 text-3xl font-bold sm:text-4xl">High Ranked</h1>
        <h1 className="mb-10 mt-5 text-3xl font-bold sm:text-4xl">
          Software Developer
        </h1>

        <div className="font-sans text-sm italic text-secondary">
          Full Stack
        </div>
        <div className="mt-2 h-2 w-24 rounded-sm bg-primary"></div>
        <p className="mt-8 max-w-[700px]">
          With more than {new Date().getFullYear() - 2019} years of experience,
          I am dedicated to designing and developing User Interfaces and
          experiences focused on their emotions ( UI / UX ), used in web
          platforms and apps.
        </p>
      </div>
    </div>
  )
}

export default HeroSection
