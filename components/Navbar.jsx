import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { HiMoon, HiSun } from 'react-icons/hi'

import useDarkMode from '../hooks/useDarkMode'

const Navbar = () => {
  const [sticky, setSticky] = useState()

  const [darkTheme, setDarkTheme] = useDarkMode()
  const handleMode = () => setDarkTheme(!darkTheme)

  useEffect(() => {
    const handleScroll = (e) => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop

      if (winScroll > 60) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }

    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`${
        sticky ? 'h-[80px _shadow fixed top-0 left-0 right-0' : 'h-[120px]'
      } flex  items-center bg-white dark:bg-dark px-6 py-3 lg:px-3`}
    >
      <div className="container flex items-center justify-start space-x-8">
        <Link href="/">
          <a className="block text-2xl font-bold text-dark dark:text-white">
            <span className="dark:text-secondary">Martin</span> Mwangi
          </a>
        </Link>

        <div className="flex flex-1 items-center justify-between space-x-5">
          <div className="flex items-center space-x-5">
            <Link href="/about-me">
              <a className="hover:text-primary text-dark dark:text-white">About Me</a>
            </Link>
            <Link href="/portfolio">
              <a className="hover:text-primary text-dark dark:text-white">Portfolio</a>
            </Link>
            <Link href="/blogs">
              <a className="hover:text-primary text-dark dark:text-white">Blogs</a>
            </Link>
            <Link href="/contact">
              <a className="hover:text-primary text-dark dark:text-white">Contact</a>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://www.fiverr.com/martin_devs/create-node-js-reactjs-application"
              target="_blank"
              className="mr-auto inline-block justify-self-end rounded border-dark
             bg-primary py-1 px-6 text-lg text-white hover:scale-[1.05] hover:opacity-75
              dark:border dark:border-secondary dark:bg-transparent dark:text-secondary"
            >
              Hire Me
            </a>
            <div onClick={handleMode} className="flex cursor-pointer items-center justify-center rounded-md border p-2 text-dark dark:text-white">
              {darkTheme ? (
                <HiSun className="text-2xl font-medium text-white" />
              ) : (
                <HiMoon className="text-2xl font-medium" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
