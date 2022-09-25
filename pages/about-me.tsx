import Link from 'next/link'
import React from 'react'
import ContactCallAction from '../components/ContactCallAction'
import ContainerBlock from '../components/ContainerBlock'

const AboutMe = () => {
  return (
    <ContainerBlock
      title="Martin -  About Me"
      description="Am a web developer, fully dedicated in learning Javascript (and typescript) and implement it in fullstack development"
    >
      <div className="my-16">

        <h1 className="text-center text-4xl my-8 font-sans font-bold tracking-wider text-dark dark:text-white">
          Frontend, Backend Developer & Mentor
        </h1>
        <p className="my-6 text-xl text-center dark:text-white">I design and code beautifully simple things, and I love what I do.</p>
        <div className="flex justify-center">
          <img
            src="https://avatars.githubusercontent.com/u/51154760?v=4"
            className="my-5 h-40 rounded-full"
            alt="Martin Mwangi"
          />
        </div>
        <div className="flex justify-center">
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" download="Martin Resume" className="rounded-md dark:bg-accent bg-dark hover:tracking-wider transition-all duration-150 ease-linear dark:hover:bg-accent py-1.5 px-6 text-sm text-white">
            Download My CV
          </a>
        </div>
      </div>

      <div className="mt-10 flex justify-center p-4 pb-0 ">
        <img src="/assets/hero-devices.svg" alt="" className='max-w-xl w-full' />
      </div>

      <div className="bg-accent p-4 py-8 md:py-16 dark:bg-dim-dark text-white">
        <div className="mx-auto max-w-2xl py-12">
          <div className="">
            <h2 className="mb-6 text-center text-2xl font-bold">Hey Friends 👋, I'm Martin. Nice to Meet You</h2>
            <p className="max-w-[600px] mx-auto text-center text-lg">
              I'm{' '}
              <strong className="text-base text-primary">Martin Mwangi</strong>.
              I graduated with a bachelor's degree in Computer Science from {" "}
              <a className='text-blue-400 underline' href="https://www.dkut.ac.ke/" target="_blank" rel="noopener noreferrer">
                Dedan Kimathi University Of technology
              </a>
              . I'm currently a Software Developer working with ReactJs,
              Angular, NodeJs, GraphQl, Postgres, MongoDB and TypeScript.
            </p>

            <p className="max-w-[600px] mx-auto text-center py-4 text-lg ">
              I'm also learning some DevOps tools on AWS and Azure.
            </p>

            <p className="max-w-[600px] mx-auto text-lg text-center">
              The main purpose of starting my own portfolio is to showcase my
              projects, document my learning journey through blogs and also to
              document the books am reading by writing book notes.{' '}
              <i>I hope you get to check them out!</i>
            </p>
          </div>
        </div>
      </div>
      <ContactCallAction />
    </ContainerBlock>
  )
}

export default AboutMe
