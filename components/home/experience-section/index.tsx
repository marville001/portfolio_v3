import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { HiOutlineExternalLink } from 'react-icons/hi'

const ExperienceSection = () => {
  return (
    <div className="section dark:bg-dim-dark dark:text-white">
      <div className="container grid grid-cols-1 md:grid-cols-2">
        <div className="py-10 px-2 sm:px-10">
          <h2 className="mb-10 text-2xl font-bold text-dark dark:text-white">
            Experience and knowledge to highlight
          </h2>
          <div className="">
            <p className="my-2">
              <strong className="mr-2 text-lg font-bold text-dim-dark dark:text-white">
                +3 years
              </strong>
              <span className="text-lg opacity-60">
                Designing and Developing web applications
              </span>
            </p>
            <p className="my-2">
              <strong className="mr-2 text-lg font-bold text-dim-dark dark:text-white">
                +1 years
              </strong>
              <span className="text-lg opacity-60">
                Designing and Developing mobile applications
              </span>
            </p>
            <p className="my-2">
              <strong className="mr-2 text-lg font-bold text-dim-dark dark:text-white">
                +3 years
              </strong>
              <span className="text-lg opacity-60">Using MERN Stack</span>
            </p>
          </div>
        </div>

        <div className="py-2 sm:px-6 md:px-6">
          <div className="z-[200] -translate-y-10  rounded-t-md bg-[#ffffff] py-4 px-2 dark:bg-dim-dark sm:px-6">
            <Link href="https://api.whatsapp.com/send?phone=254700207054&text=Hey Martin">
              <a
                target="_blank"
                className="flex items-center justify-between rounded-md bg-[#358a76] px-5 py-3 text-lg text-white lg:text-xl"
              >
                <FaWhatsapp className="text-lg lg:text-2xl" />
                <span>+254700207054</span>
                <HiOutlineExternalLink className="text-lg opacity-50 lg:text-2xl" />
              </a>
            </Link>

            <p className="my-4 text-sm tracking-wide opacity-70">
              Contact me by WhatsApp, you will establish communication with me
              directly. You will be able to ask or make arrangement for further
              communications about any task you have.
            </p>

            <div className="_shadow mt-16 w-full rounded-lg p-6 dark:bg-dark">
              <h2 className="mb-2 text-lg font-bold">Schedule a meeting</h2>
              <p className="text-sm font-medium opacity-70">
                Choose the ideal moment and meet with the team to put your ideas
                into action.
              </p>

              <button className="lg:text-md mt-6 w-full rounded-full bg-primary py-2 text-center text-sm text-white">
                Click to coordinate meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceSection
