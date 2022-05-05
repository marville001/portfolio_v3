import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className="bg-dim-dark">
      <div className="container min-h-[200px] py-6 text-white">
        <h4>Footer</h4>
      </div>
      <div className="bg-white py-10">
        <div className="container flex flex-col items-start gap-4 md:flex-row md:justify-center">
          <div className="flex flex-col flex-1">
            <p>
              This website has been designed and developed by me from scratch :)
            </p>
            <p className="text-sm">
              Copyright <span className="text-primary font-bold">@Martin</span> {new Date().getFullYear()}
            </p>
          </div>
          <Link href="mailto:mwangimartin1904@gmail.com">
            <a
              target="_blank"
              className="rounded-full bg-primary py-2 px-8  text-white text-center inline-block"
            >
              Contact Me
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
