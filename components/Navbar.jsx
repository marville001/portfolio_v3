import Link from 'next/link'
import React, { useState } from 'react'

import ProfileMenu from '../components/ProfileMenu'

import { HiMenuAlt1, HiMoon, HiOutlineXCircle, HiSun } from 'react-icons/hi'

import { useAuth } from '../contexts/auth.context'
import useDarkMode from '../hooks/useDarkMode'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const [darkTheme, setDarkTheme] = useDarkMode()
  const authContext = useAuth()

  const handleMode = () => setDarkTheme(!darkTheme)

  return (
    <div
      className={`_shadow3  border-b border-b-white/10 sticky top-0 left-0 right-0 z-[999] flex h-[100px] items-center bg-white px-2 py-3 dark:bg-dark sm:px-6 lg:px-3`}
    >
      <div className="container flex items-center justify-between space-x-8">
        <Link href="/">
          <a className="flex items-center gap-2 text-2xl font-bold text-dark dark:text-white">
            <img
              src="/assets/my-logo.png"
              alt=""
              className="h-10 w-10 rounded-full"
            />
            {/* <span className="">martin.</span> */}
          </a>
        </Link>

        <div className="flex gap-4 items-center">
          <div
            className={`absolute ${
              menuOpen
                ? 'h-min opacity-100'
                : 'h-0 overflow-hidden opacity-0 lg:h-min lg:opacity-100'
            } inset-x-0 top-[90px] flex flex-col items-center gap-y-4 bg-white py-10 transition-all duration-150 ease-linear dark:bg-dark lg:static lg:top-0 lg:flex-row lg:gap-y-0 lg:space-x-2 lg:bg-transparent lg:dark:bg-transparent lg:transition-none`}
          >
            <Link href="/services">
              <a className="text-lg_ rounded-lg px-4 font-semibold text-dark hover:text-accent dark:hover:text-accent dark:text-white lg:text-[15px]">
                <span>Services</span>
              </a>
            </Link>
            <Link href="/about-me">
              <a className="text-lg_ rounded-lg px-4 font-semibold text-dark hover:text-accent dark:hover:text-accent dark:text-white lg:text-[15px]">
                <span>About</span>
              </a>
            </Link>
            <Link href="/portfolio">
              <a className="text-lg_ rounded-lg px-4 font-semibold text-dark hover:text-accent dark:hover:text-accent dark:text-white lg:text-[15px]">
                Portfolio
              </a>
            </Link>

            <Link href="/blogs">
              <a className="text-lg_ rounded-lg px-4 font-semibold text-dark hover:text-accent dark:hover:text-accent dark:text-white lg:text-[15px]">
                Blog
              </a>
            </Link>
            <Link href="/book-notes">
              <a className="text-lg_ rounded-lg px-4 font-semibold text-dark hover:text-accent dark:hover:text-accent dark:text-white lg:text-[15px]">
                Book Notes
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-lg_ rounded-lg px-4 font-semibold text-dark hover:text-accent dark:hover:text-accent dark:text-white lg:text-[15px]">
                Contact
              </a>
            </Link>
            {/* <div className="cursor-pointer rounded-lg px-5 py-2 text-dark hover:bg-dim-dark hover:text-white dark:text-white">
            <HiOutlineDotsHorizontal className="text-2xl" />
          </div> */}

            <div className="relative mt-5 flex flex-col items-center justify-center space-y-4 sm:space-x-4 lg:mt-0 lg:flex-row lg:space-y-0">
              <a
                href="https://www.fiverr.com/martin_devs/create-node-js-reactjs-application"
                target="_blank"
                className="mr-auto justify-self-end 
             rounded-full border border-accent py-2 px-12 text-lg font-bold tracking-wider text-accent transition-all duration-150 hover:bg-accent hover:text-white dark:border-0
              dark:bg-accent dark:text-white dark:hover:bg-opacity-75 sm:block
              "
              >
                Hire Me
              </a>
              <div
                onClick={handleMode}
                className="cursor-pointer items-center justify-center rounded-md p-2"
              >
                {darkTheme ? (
                  <div className="flex items-center justify-center rounded-full bg-[#f2f2f2] p-1.5">
                    <HiSun className="text-xl font-medium text-dark" />
                  </div>
                ) : (
                  <div className="flex items-center justify-center rounded-full bg-[#f2f2f2] p-1.5">
                    <HiMoon className="text-xl font-medium text-dark dark:text-white" />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="cursor-pointer rounded-full p-2 text-dim-dark duration-75 dark:bg-dim-dark dark:text-slate-200 lg:hidden">
            {menuOpen ? (
              <HiOutlineXCircle
                onClick={() => setMenuOpen(false)}
                className="text-4xl font-light"
              />
            ) : (
              <HiMenuAlt1
                onClick={() => setMenuOpen(true)}
                className="text-4xl font-light"
              />
            )}
          </div>
          {authContext.user?.uid && <ProfileMenu />}
        </div>
      </div>
    </div>
  )
}

export default Navbar
