import Link from 'next/link'
import React from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'

import { Project } from '../../../types/project'
import PortfolioCard from './PortfolioCard'

interface IProject {
  id: string
  image: string
  title: string
  summary: string
  link: string
}

const Portfolios = () => {
  const portfolios: IProject[] = [
    {
      id: 'allinonedashboardadd34dagdsd5h344',
      image: "/assets/portfolio/dashboard-all-in-one.png",
      title: "allinone-dashboard.vercel.app",
      summary: "Dashboard. Contains Calendar, Editor, Color Picker, kanban and lots of charts",
      link: "https://allinone-dashboard.vercel.app/",
    },
    {
      id: 'lotteryapp244sfs535f3fs',
      image: "/assets/portfolio/lottery-app.png",
      title: "lottery-xi.vercel.app",
      summary: "Lottery app made with NextJs and Web3 (solidity and thirdweb)",
      link: "https://lottery-xi.vercel.app/",
    },
    {
      id: 'clinicdashboard5452435623f32543',
      image: "/assets/portfolio/clinic-dashboard.png",
      title: "my-clinic-app-app.vercel.app",
      summary: "Clinic management made easy in one place.",
      link: "https://my-clinic-app-app.vercel.app/",
    },
    {
      id: 'mediumsanity56344bhr34sd667s3yg36',
      image: "/assets/portfolio/medium-2.0.png",
      title: "mediumsanity.vercel.app",
      summary: "Medium 2.0 App made with NextJs and Sanity.io",
      link: "https://mediumsanity.vercel.app/",
    },
    {
      id: 'myfrontendchallenges67546734674',
      image: "/assets/portfolio/frontend-challenges.png",
      title: "myfrontendchallenges.netlify.app",
      summary: "I love solving challenges. Some list for frontend ones",
      link: "https://myfrontendchallenges.netlify.app/",
    }
  ]

  return (
    <div className="">
      <div className="container py-8 lg:pt-16 dark:text-white">

        <h1 className="mb-2 select-none text-center text-xl font-bold uppercase opacity-50">
          featured projects
        </h1>
        <h2 className="text-center text-3xl mt-5 font-bold capitalize text-dim-dark dark:text-white">
          What I have worked on
        </h2>

        {/* Portfolios */}
        <div className="my-8 lg:my-16 grid select-none grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          {portfolios.map(({ id, title, image, link, summary }: IProject) => (
            <div
              key={id}
              className="relative min-h-[225px] group bg-opacity-40 hover:bg-opacity-100 justify-center 
                      rounded-xl duration-150 ease-linear  p-4 flex flex-col items-center">
              <img className='rounded-lg border h-auto md:h-52 w-full'
                src={image} alt={title} />
              <h4 className='self-start mt-4'>{summary}</h4>
              <a href={link} target="_blank" rel="noopener noreferrer"
                className='bg-primary text-sm flex items-center gap-1.5 bg-opacity-20 px-2 underline py-1 mt-2 text-accent self-start rounded-lg'>
                <HiOutlineExternalLink className='text-base' />
                <span className='font-light'>{title}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Show More */}
        <div className="my-10 flex justify-center">
          <Link href="/portfolio">
            <a className="rounded-full bg-accent bg-opacity-80 hover:bg-opacity-100 tracking-wider px-8 py-2 capitalize text-sm text-white">
              View All Projects
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Portfolios
