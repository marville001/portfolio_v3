import Link from 'next/link'
import React from 'react'
import ContainerBlock from '../components/ContainerBlock'

const AboutMe = () => {
  return (
    <ContainerBlock
      title="Martin -  About Me"
      description="Am a web developer, fully dedicated in learning Javascript (and typescript) and implement it in fullstack development"
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
        <div className="mx-auto max-w-[900px] py-12">
          <div className="">
            <h2 className="mb-4 text-2xl font-bold">Hey Friends 👋,</h2>
            <p className='max-w-[600px]'>
              I'm <strong className='text-primary text-lg'>Martin Mwangi</strong>. I'm a Software Developer
              currently working with ReactJs, Angular, NodeJs, GraphQl,
              Postgres, MongoDB and TypeScript.
            </p>
          </div>
        </div>
      </div>
    </ContainerBlock>
  )
}

export default AboutMe
