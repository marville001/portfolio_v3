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
      <article className="overflow-hidden glass-effect">
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
            <h3>{project.name}</h3>
          </a>

          <p className="mt-2 text-sm">{project.description}</p>

          <div className="mt-3 flex items-center justify-between">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-l border border-primary px-3 py-1 text-center text-[10px] text-primary transition-all duration-150 hover:bg-primary hover:text-white sm:text-sm"
            >
              Demo
            </a>
            <Link href={`/portfolio/${project.slug.current}`}>
              <a className="flex-1 border border-x-0 border-primary px-3 py-1 text-center text-[10px] text-primary transition-all duration-150 hover:bg-primary hover:text-white sm:text-sm">
                Read More
              </a>
            </Link>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-r border border-primary px-3 py-1 text-center text-[10px] text-primary transition-all duration-150 hover:bg-primary hover:text-white sm:text-sm"
            >
              Code
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}

export default PortfolioCard
