import Link from 'next/link'
import React from 'react'
import ContainerBlock from '../components/ContainerBlock'

const AboutMe = () => {
  return (
    <ContainerBlock
      title="Martin -Contact Me"
      description="About Martin Mwangi"
    >
      <div className="bg-primary">
        <div className="md-px-6 mx-auto max-w-[900px] bg-primary py-10 px-2 sm:px-4">
          <h1 className="text-center text-4xl font-light text-white">
            About Me
          </h1>
          <div className="flex justify-center">
            <img
              src="https://avatars.githubusercontent.com/u/51154760?v=4"
              className="my-5 h-40 rounded-full"
              alt="Martin Mwangi"
            />
          </div>
          <div className="flex justify-center">
            <Link href="/archive">
              <a className="rounded-md bg-dark py-1.5 px-6 text-sm text-white">
                Download My CV
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container  py-12"></div>
      </div>
    </ContainerBlock>
  )
}

export default AboutMe
