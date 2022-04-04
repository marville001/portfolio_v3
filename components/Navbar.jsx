import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [sticky, setSticky] = useState()

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
      } flex  items-center bg-white px-6 py-3 lg:px-3`}
    >
      <div className="container flex items-center justify-start space-x-8">
        <Link href="/">
          <a className="block text-2xl font-bold text-dark dark:text-white">
            <span className="dark:text-primary">Martin</span> Mwangi
          </a>
        </Link>

        <div className="flex flex-1 items-center justify-between space-x-5">
          <div className="flex items-center space-x-5">
            <Link href="/about-me">
              <a className="hover:text-primary">About Me</a>
            </Link>
            <Link href="/portfolio">
              <a className="hover:text-primary">Portfolio</a>
            </Link>
            <Link href="/blogs">
              <a className="hover:text-primary">Blogs</a>
            </Link>
            <Link href="/contact">
              <a className="hover:text-primary">Contact</a>
            </Link>
          </div>

          <a
            href="https://www.fiverr.com/martin_devs/create-node-js-reactjs-application"
            target="_blank"
            className="mr-auto inline-block justify-self-end rounded border-dark
             bg-primary py-1 px-6 text-lg text-white hover:scale-[1.05] hover:opacity-75
              dark:border dark:border-primary dark:bg-transparent dark:text-primary"
          >
            Hire Me
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
