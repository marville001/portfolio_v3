import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'

import AdminWrapper from '../../../components/admin/AdminWrapper'
import ContainerBlock from '../../../components/ContainerBlock'
import clientsModel from '../../../models/clients.model.ts'
import { IClient } from '../../../types/client'

const Clients: NextPage = (props: any) => {

  const [clients, setClients] = useState<IClient[]>([]);

  useEffect(() => {
    setClients(typeof props.clients === "object" ? [] : JSON.parse(props.clients));
  }, [props.clients])

  return (
    <ContainerBlock
      title="Martin - Software Developer - REACT,NEXT,NODE..."
      description="I've been developing websites for more than 2 years straight. Get in touch with me to know more."
      showInterest={false}
    >
      <AdminWrapper>
        <div className="my-12 flex flex-wrap gap-8 rounded-2xl bg-pale-orange p-6">
          <div className="flex h-[100px] w-full items-center justify-center rounded-2xl bg-primary p-5 sm:w-[150px]">
            <h2 className="text-5xl font-bold text-white">MM</h2>
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <h2 className="text-3xl font-bold">
              Clients
              <span className="rounded-lg bg-primary px-2 pt-2 ml-2 text-base text-white">
                <sup>
                  {clients.length}
                </sup>
              </span>
            </h2>
            <p className="mt-3 text-lg">
              I have not failed. I've just found 10,000 ways that won't work.
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <h2 className="text-lg dark:text-white">My Clients</h2>
          <Link href="/admin/clients/new">
            <a className="flex cursor-pointer items-center gap-2 rounded-md px-4 py-1 dark:bg-primary dark:text-white hover:bg-primary hover:text-white">
              <div className="">
                <FaPlus />
              </div>
              <span>New Client</span>
            </a>
          </Link>
        </div>

        {clients.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 py-12  sm:grid-cols-2 lg:grid-cols-3 ">
            {clients.map((client) => (
              <article key={client?.id} className="overflow-hidden relative rounded border self-start">
                <div className="absolute z-[454] flex top-2 left-2 space-x-2 flex-wrap">
                  {client?.featured &&
                    <span className=" bg-accent text-white text-sm p-2 py-1 rounded-md">Featured</span>
                  }
                  {client?.draft &&
                    <span className=" bg-primary text-white text-sm p-2 py-1 rounded-md">Draft</span>
                  }
                  {client?.archived &&
                    <span className=" bg-dark text-white text-sm p-2 py-1 rounded-md">Archived</span>
                  }
                </div>


                <Image
                  width="1000%"
                  height={550}
                  objectFit='fill'
                  className='border h-auto md:h-52 w-full'
                  src={client?.image ?? 'https://www.mountaingoatsoftware.com/images/made/uploads/blog/2022-06-21-living-with-uncertainty_600_314.png'}
                  alt={client.name} />


                <div className="p-5">
                  <h3 className="text-lg text-primary hover:underline">
                    {client.name}
                  </h3>

                  <div className="mt-5 flex items-center justify-between">
                    <p className='dark:text-white'>{new Date(client?.createdAt).toDateString().substring(3)}</p>

                    <Link href={`/admin/clients/${client.id}`}>
                      <a className="rounded tracking-wider border border-accent px-3 py-1 text-accent transition-all duration-150 hover:bg-accent hover:text-white">
                        Edit
                      </a>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[400px] items-center justify-center">
            <h4 className="text-4xl font-bold uppercase opacity-30">
              No Client Yet
            </h4>
          </div>
        )}
      </AdminWrapper>
    </ContainerBlock>
  )
}

export async function getServerSideProps() {
  try {
    const clients = await clientsModel.getAllClients('createdAt', "desc")

    return {
      props: { clients: JSON.stringify(clients) || [] },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { clients: [], total: 0 },
    };
  }
}



export default Clients
