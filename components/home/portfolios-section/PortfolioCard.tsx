import React from 'react'
import Link from 'next/link'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { Project } from '../../../types/project'
import { urlFor } from '../../../lib/sanity'

const PortfolioCard = (props: any) => {
  const project: Project = props.project

  return (
    <div className="">
      <article className="overflow-hidden rounded border">
        <div className="h-[200px] w-full items-stretch overflow-hidden">
          <Splide
            options={{
              pauseOnHover: true,
              autoplay: true,
              type: 'loop',
              rewind: true,
              //   arrows: false,
            }}
            aria-label="Property Images"
          >
            {project?.image?.map((image, i) => (
              <SplideSlide key={i}>
                <img
                  src={urlFor(image).url()}
                  alt={`${image}`}
                  className="h-[200px] w-full"
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>

        <div className="p-4">
          <a className="text-md text-primary">
            <h3>Full Ecommerce Website</h3>
          </a>

          <p className="mt-2 text-sm">
            We might not like ambiguity, but it’s a fact of life. Find out how
            to plan with uncertainty in mind.
          </p>

          <div className="mt-3 flex items-center justify-between">
            <Link href="/portfolio">
              <a className="flex-1 rounded-l border border-primary px-3 py-1 text-center text-[10px] sm:text-sm text-primary transition-all duration-150 hover:bg-primary hover:text-white">
                Demo
              </a>
            </Link>
            <Link href={`/portfolio/slug`}>
              <a className="flex-1 border border-x-0 border-primary px-3 py-1 text-center text-[10px] sm:text-sm text-primary transition-all duration-150 hover:bg-primary hover:text-white">
                Read More
              </a>
            </Link>

            <Link href="/portfolio">
              <a className="flex-1 rounded-r border border-primary px-3 py-1 text-center text-[10px] sm:text-sm text-primary transition-all duration-150 hover:bg-primary hover:text-white">
                Code
              </a>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}

export default PortfolioCard
