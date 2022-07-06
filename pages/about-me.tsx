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
            <p className="max-w-[600px] text-sm">
              I'm{' '}
              <strong className="text-base text-primary">Martin Mwangi</strong>.
              I graduated with a bachelor's degree in Computer Science from {" "}
              <a className='text-blue-400 underline' href="https://www.dkut.ac.ke/" target="_blank" rel="noopener noreferrer">
                Dedan Kimathi University Of technology
              </a>
              . I'm currently a Software Developer working with ReactJs,
              Angular, NodeJs, GraphQl, Postgres, MongoDB and TypeScript.
            </p>

            <p className="max-w-[600px] py-4 text-sm">
              I'm also learning some DevOps stuffs on AWS and Azure.
            </p>

            <p className="max-w-[600px] text-sm">
              The main purpose of starting my own portfolio is to showcase my
              projects, document my learning journey through blogs and also to
              document the books am reading by writing book notes.{' '}
              <i>I hope you get to check them out!</i>
            </p>
          </div>
        </div>
      </div>
    </ContainerBlock>
  )
}

export default AboutMe
