import Link from 'next/link'
import React from 'react'
import ContainerBlock from '../components/ContainerBlock'

const NotFound = () => {
  return (
    <ContainerBlock
      title="Martin - Software Developer - REACT,NEXT,NODE..."
      description="I've been developing websites for more than 2 years straight. Get in touch with me to know more."
      showInterest={false}
    >
      <div
        className="
    flex
    min-h-[80vh]
    w-full
    items-center
    justify-center
    bg-white dark:bg-dark
    p-5
  "
      >
        <div className="mx-5 rounded-md dark:text-white px-10 py-20 md:px-20">
          <div className="flex flex-col items-center">
            <h1 className="text-dim-dark0 text-9xl font-bold">404</h1>

            <h6 className="mb-2 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
              <span className="text-red-500">Oops!</span> Page not found
            </h6>

            <p className="mb-8 text-center text-gray-500 dark:text-white md:text-lg">
              The page you’re looking for doesn’t exist or is under development.
            </p>

            <Link href="/">
              <a className="rounded-md bg-dark dark:bg-dim-dark px-6 py-2 text-sm font-semibold text-white hover:scale-105 active:scale-95">
                Go home
              </a>
            </Link>
          </div>
        </div>
      </div>
    </ContainerBlock>
  )
}

export default NotFound
