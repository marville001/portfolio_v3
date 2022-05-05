import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'

const AboutMe = () => {
  return (
    <div className="py-8 dark:bg-dim-dark dark:bg-opacity-50 dark:text-white">
      <div className="container flex md:gap-10">
        <div className="flex-[1]">
          <Image
            src="/Me.jfif"
            className="rounded-full"
            width={250}
            height={250}
          />
        </div>
        <div className="flex-[3]">
          <div className="mb-5 flex items-center gap-3">
            <h2 className="text-4xl font-bold">About Me</h2>
            <Link href="https://www.linkedin.com/in/marville001/">
              <a
                target="_blank"
                className="flex cursor-pointer items-center rounded-md bg-primary p-2 text-white"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
            </Link>
          </div>

          <div className="text-[14px] leading-5">
            <p>
              At the age of 12, I convinced little friends to accompany me to
              the local landfill to collect electronic components, with which I
              created and sold them LED accessories for bicycles and toy
              modifications on Three Kings Day. I finished my secondary studies
              at the age of 14, at that age I had already been organizing
              parties and small local events for the teenagers around me for a
              year. Everything became serious when I began to use Facebook to
              catapult the attention that the events received, I quickly
              invented my own rudimentary strategies to attract more and more
              people, reaching an average of more than 2,000 people invited to
              said social network for each event that we performed On that date
              the facebook chat began to give errors, disgusted i created an
              event a bit in jest encouraging people to join and invite their
              friends as a protest to show our disgust. In less than a week,
              this event exceeded 80,000 guests and after two weeks it already
              hadaround 500,000 people .
              <span className="ml-2 cursor-pointer text-primary hover:underline">
                Show more
              </span>
            </p>

            <div className="my-10 flex gap-5">
              <Link href="mailto:mwangimartin1904@gmail.com">
                <a
                  target="_blank"
                  className="inline-block rounded-full bg-primary hover:bg-opacity-80 py-3 px-8  text-center text-[16px] text-white"
                >
                  Contact Me
                </a>
              </Link>
              <button className="rounded-full bg-dark text-white dark:bg-white px-8 py-3 hover:bg-opacity-80 text-center text-[16px] font-semibold dark:text-dark">
                Download My CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
