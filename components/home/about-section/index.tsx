import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'

const AboutMe = () => {
  return (
    <div className="py-8 bg-gray-[150] dark:bg-dim-dark dark:bg-opacity-50 dark:text-white">
      <div className="container flex flex-col items-center md:gap- py-16">
        <h2 className="text-4xl font-bold ">About Me</h2>
        <div className="my-6">
          <Image
            src="/Me.jfif"
            className="rounded-full"
            width={250}
            height={250}
          />
        </div>
        <div className="flex flex-[3] flex-col items-center gap-2 md:items-start">
          <div className="font-serif text-[16px] max-w-xl mx-auto leading-5 tracking-wide">
            {/* <p className='text-center'>
              First and foremost, I love writing code. Ever since writing my
              first program in C and manipulating it to produce the desired
              output, I have been obsessed with the idea of using software to
              solve practical problems. For me, Computer Science is a
              never-ending puzzle that I am passionately engaged in solving. I
              believe in the power of programming to transform and improve the
              lives of people around the world.
            </p>
            <p className='my-3 text-center'>
              Software development has given me a purpose and a path which am
              proud of and one I can follow for the rest of the time to come.
              The creativity, organization, sequential processing, and
              problem-solving involved keep me up at night with a never-ending
              thirst to create beautiful, powerful things and share them with
              the world.
            </p> */}
            <p className='text-center'>
              Skills/Interests: JavaScript, React, TypeScript, Next, Express,
              Node, Redux, StyledComponents, CSS, HTML, Git, GitLab, SQL,
              PostgreSQL, MongoDB, Ms SQL, Docker among others
            </p>

            <div className="my-10 flex flex-col gap-5 sm:flex-row justify-center">
              <Link href="mailto:mwangimartin1904@gmail.com">
                <a
                  target="_blank"
                  className="inline-block rounded-full bg-accent py-3 px-8 text-center  text-[16px] font-semibold text-white hover:bg-opacity-80"
                >
                  Contact Me Via Email
                </a>
              </Link>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Martin Resume"
                className="rounded-full border border-accent text-accent hover:text-white hover:bg-accent px-8 py-3 text-center text-[16px] font-semibold">
                Download My CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
