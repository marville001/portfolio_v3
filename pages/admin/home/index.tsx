import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import AdminWrapper from '../../../components/admin/AdminWrapper'
import ContainerBlock from '../../../components/ContainerBlock'
import useFirestoreCollection from '../../../hooks/useFirestoreCollection'

const Blogs: NextPage = () => {

  const { value: blogsSnap } = useFirestoreCollection("blogs")
  const { value: projectsSnap } = useFirestoreCollection("projects")
  const { value: bookNotesSnap } = useFirestoreCollection("book-notes")
  const { value: clientsSnap } = useFirestoreCollection("clients")
  const { value: clientProjectsSnap } = useFirestoreCollection("client-projects")
  const { value: tasksSnap } = useFirestoreCollection("tasks")

  return (
    <ContainerBlock
      title="Martin - Software Developer - REACT,NEXT,NODE..."
      description="I've been developing websites for more than 2 years straight. Get in touch with me to know more."
      showInterest={false}
    >
      <AdminWrapper>
        <div className="my-12 flex flex-wrap gap-8 rounded-2xl bg-pale-orange p-6">
          <div className="flex h-[200px] w-full items-center justify-center rounded-2xl bg-primary p-5 sm:w-[250px]">
            <h2 className="text-9xl font-bold text-white">MM</h2>
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <h2 className="text-3xl font-bold">Martin Mwangi</h2>
            <p className="mt-3 text-lg">
              Respect and consistency, as hard work during the week is the only way to earn your place.
            </p>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {/* Blogs */}
          <CountCard count={blogsSnap?.size ?? 0} title="Blog" to="/admin/blogs/new" toDash="/admin/blogs/" />

          {/* Book Notes */}
          <CountCard count={bookNotesSnap?.size ?? 0} title="Book Note" to="/admin/book-notes/new" toDash="/admin/book-notes/" />

          {/* Projects */}
          <CountCard count={projectsSnap?.size ?? 0} title="Project" to="/admin/projects/new" toDash="/admin/projects/" />

          {/* END */}
        </div>

        <div className="my-20">
          <h4 className='text-3xl font-bold dark:text-white'>Freelancing Analytics</h4>
          <hr className='mt-4' />
        </div>

        <div className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {/* Clients */}
          <CountCard count={clientsSnap?.size ?? 0} title="Client" to="/admin/clients/new" toDash="/admin/clients/" />

          {/* Book Notes */}
          <CountCard count={clientProjectsSnap?.size ?? 0} title="Client Project" to="/admin/client-projects/new" toDash="/admin/client-projects/" />

          {/* Projects */}
          <CountCard count={tasksSnap?.size ?? 0} title="Task" to="/admin/tasks/new" toDash="/admin/tasks/" />

          {/* END */}
        </div>
      </AdminWrapper>
    </ContainerBlock>
  )
}

interface CountCardProps {
  title: string
  to: string
  toDash?: string
  count: number
}
const CountCard = ({ title, count, to, toDash = "/admin" }: CountCardProps) => (
  <div className="rounded-md bg-dark dark:bg-dim-dark p-5 text-white">
    <Link href={toDash}>

      <a className="flex items-center gap-3 transition-all duration-150 ease-linear hover:text-accent hover:px-3">
        <h2 className="text-5xl font-bold">{count}</h2>
        <p className="text-xl">{title}s</p>
      </a>
    </Link>
    <Link href={to}>
      <a className="mt-3 w-auto flex cursor-pointer items-center justify-start gap-2 rounded-md p-1 
      transition-all duration-150 ease-linear hover:text-accent hover:px-3">
        <div className="">
          <FaPlus />
        </div>
        <span>New {title}</span>
      </a>
    </Link>
  </div>
)

export default Blogs
