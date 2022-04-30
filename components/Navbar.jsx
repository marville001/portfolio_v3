import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import HeaderMenu from '../components/HeaderMenu'

import {
  HiMenuAlt1,
  HiMoon,
  HiOutlineDotsHorizontal,
  HiSun,
} from 'react-icons/hi'

import useDarkMode from '../hooks/useDarkMode'

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [menuOpen, setMenuOpen] = useState(true)

  const [darkTheme, setDarkTheme] = useDarkMode()
  const handleMode = () => setDarkTheme(!darkTheme)

  useEffect(() => {
    const handleScroll = (e) => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop

      if (winScroll > 200) {
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
        sticky ? '_shadow fixed top-0 left-0 right-0 h-[80px]' : 'h-[150px]'
      } flex  items-center bg-white px-2 py-3 dark:bg-dark sm:px-6 lg:px-3 z-[100]`}
    >
      <div className="container relative flex items-center justify-between space-x-8">
        <Link href="/">
          <a className="block text-2xl font-bold text-dark dark:text-white">
            <span className="dark:text-secondary">Martin</span> Mwangi
          </a>
        </Link>

        <div className="hidden items-center space-x-2 lg:flex">
          <Link href="/about-me">
            <a className="rounded-lg py-2 px-5 text-dark hover:bg-dim-dark hover:text-white dark:text-white">
              About Me
            </a>
          </Link>
          <Link href="/portfolio">
            <a className="rounded-lg py-2 px-5 text-dark hover:bg-dim-dark hover:text-white dark:text-white">
              Portfolio
            </a>
          </Link>
          <Link href="/blogs">
            <a className="rounded-lg py-2 px-5 text-dark hover:bg-dim-dark hover:text-white dark:text-white">
              Blogs
            </a>
          </Link>
          <Link href="/contact">
            <a className="rounded-lg py-2 px-5 text-dark hover:bg-dim-dark hover:text-white dark:text-white">
              Contact
            </a>
          </Link>
          <div className="cursor-pointer rounded-lg px-5 py-2 text-dark hover:bg-dim-dark hover:text-white dark:text-white">
            <HiOutlineDotsHorizontal className="text-2xl" />
          </div>
        </div>

        <div className="relative flex items-center space-x-4">
          <a
            href="https://www.fiverr.com/martin_devs/create-node-js-reactjs-application"
            target="_blank"
            className="mr-auto hidden justify-self-end 
             rounded border border-primary bg-primary py-1 px-6 text-lg
              text-white hover:scale-[1.05] hover:opacity-75 dark:border-secondary dark:bg-transparent
              dark:text-secondary sm:block
              "
          >
            Hire Me
          </a>
          <div
            onClick={handleMode}
            className="flex cursor-pointer items-center justify-center rounded-md p-2"
          >
            {darkTheme ? (
              <HiSun className="text-2xl font-medium text-white" />
            ) : (
              <HiMoon className="text-2xl font-medium text-dark" />
            )}
          </div>

          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer rounded-full p-2 text-dim-dark duration-75 dark:bg-dim-dark dark:text-slate-200 lg:hidden"
          >
            <HiMenuAlt1 className="text-2xl" />
          </div>
          <HeaderMenu isOpen={menuOpen} closeModal={() => setMenuOpen(false)} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
