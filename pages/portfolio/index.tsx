import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import ContainerBlock from '../../components/ContainerBlock'

import { IProject } from '../../types/project'
import ContactCallAction from '../../components/ContactCallAction'
import projectsModel from '../../models/projects.model.ts'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import Image from "next/image"

interface Props {
  projects: IProject[]
}

const Portfolio = (props: Props) => {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    setProjects(typeof props.projects === "object" ? [] : JSON.parse(props.projects));
  }, [props.projects])

  return (
    <ContainerBlock
      title="Martin - My Portfolio Projects"
      description="A list of all my projects. Mostly are website applications"
    >
      <div className="bg-primary dark:bg-dim-dark">
        <div className="md-px-6 mx-auto max-w-[900px] bg-primary dark:bg-dim-dark py-10 px-2 sm:px-4">
          <h1 className="text-center text-4xl font-light text-white">
            Welcome to My Portfolio
          </h1>
          <div className="flex justify-center">
            <p className="my-5 max-w-[400px] text-center text-sm text-gray-200">
              Take a look of some of the awesome projects project I have been
              working on since I started learning programming. To View the full
              list, click archive button bellow.
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="/archive">
              <a className="rounded-md bg-dark dark:bg-accent hover:bg-accent py-1.5 px-6 text-white">
                View Archive
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-400 my-0 h-[1px] hidden dark:block container bg-opacity-20"></div>

      <div className="bg-white dark:bg-dark">
        <div className="container  py-12">

          {/* Portfolios */}
          <div className="grid grid-cols-1 gap-6 gap-y-8 py-12  sm:grid-cols-2 lg:grid-cols-3 ">
            {projects?.map(({ id, name, images, github, website, intro }: IProject) => (
              <div
                key={id}
                className="min-h-[225pxs] group bg-opacity-40 hover:bg-opacity-100 justify-center 
                      rounded-xl duration-150 ease-linearflex flex-col items-center">
                <Image
                  width="1000%"
                  height={750}
                  objectFit='fill'
                  className='rounded-lg border h-auto md:h-52 w-full'
                  src={images[0]}
                  alt={name} />
                <h4 className='self-start mt-4 dark:text-white'>{intro}</h4>

                <div className="flex justify-between items-center">
                  <a href={website} target="_blank" rel="noopener noreferrer"
                    className='bg-primary text-sm flex items-center gap-1.5 bg-opacity-20 px-2 underline py-1 mt-2 text-accent self-start rounded-lg'>
                    <HiOutlineExternalLink className='text-base' />
                    <span className='font-light'>{website?.toString().replace("https://", "")}</span>
                  </a>
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className='text-2xl opacity-50 hover:opacity-100 cursor-pointer' />
                  </a>

                </div>
              </div>
            ))}
          </div>



          {/*  */}
        </div>
      </div>

      <div className="bg-gray-400 my-0 h-[1px] hidden dark:block container bg-opacity-20"></div>
      <ContactCallAction />
    </ContainerBlock>
  )
}

export const getServerSideProps = async () => {
  try {
    const projects = await projectsModel.getAllProjects('createdAt', "desc")

    return {
      props: { projects: JSON.stringify(projects) || [] },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { projects: [], total: 0 },
    };
  }
}

export default Portfolio
