import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Project } from '../../../types/project'
import { urlFor } from '../../../lib/sanity'
import { FaArrowsAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Link from 'next/link'

const PortfolioCard = (props: any) => {
  const project: Project = props.project

  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)

  return (
    <div className="group relative h-[225px] cursor-pointer  rounded-md bg-slate-400 dark:bg-dim-dark lg:h-[260px]">
      <div className="h-full w-full p-3">
        <Swiper
          pagination={{
            type: 'progressbar',
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current
            swiper.navigation.update()
          }}
          modules={[Autoplay, Navigation]}
          className="h-full w-full"
        >
          {project?.image?.map((image, idx) => (
            <SwiperSlide key={idx}>
              <div className="h-full w-full">
                <img
                  src={urlFor(image).url()}
                  className="h-full w-full  rounded-xl object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Link href={project?.url}>
        <a
          target="_blank"
          className="blurry absolute inset-0 z-[1] hidden flex-col justify-end p-5 group-hover:flex"
        >
          <h4 className="font-bold text-white">{project?.name}</h4>
          <div className="my-3 flex">
            <div className="rounded-md bg-primary py-1 px-4 text-sm">
              Tag One
            </div>
          </div>
        </a>
      </Link>
      {/* Maximize Icon */}
      <div className="absolute right-5 top-5 z-[445] hidden cursor-pointer  rounded-md bg-slate-200 bg-opacity-25  p-2 transition-all duration-150 ease-linear group-hover:block">
        <FaArrowsAlt className="origin-center rotate-45 text-2xl opacity-50" />
      </div>

      {/* Arrow - left */}
      <div
        ref={prevRef}
        className="absolute left-0 top-1/2 z-[345] flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-gray-800 p-1 text-white"
      >
        <FaChevronLeft className="text-sm" />
      </div>

      {/* Arrow - right */}
      <div
        ref={nextRef}
        className="absolute right-0 top-1/2 z-[345] flex translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-gray-800 p-1 text-white"
      >
        <FaChevronRight className="text-sm" />
      </div>
    </div>
  )
}

export default PortfolioCard
