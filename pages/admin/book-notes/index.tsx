import { NextPage } from 'next'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'

import AdminWrapper from '../../../components/admin/AdminWrapper'
import ContainerBlock from '../../../components/ContainerBlock'
import bookNotesModel from '../../../models/book-notes.model.ts'
import { IBookNote } from '../../../types/book-notes'

const BookNotes: NextPage = (props: any) => {

  const [bookNotes, setBookNotes] = useState<IBookNote[]>([]);

  useEffect(() => {
    setBookNotes(typeof props.bookNotes === "object" ? [] : JSON.parse(props.bookNotes));
  }, [props.bookNotes])

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
              Book Notes
              <span className="rounded-lg bg-primary px-2 pt-2 ml-2 text-base text-white">
                <sup>
                  {bookNotes.length}
                </sup>
              </span>
            </h2>
            <p className="mt-3 text-lg">
              Life isn't about finding yourself. Life is about creating yourself.
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <h2 className="text-lg dark:text-white">My Book Notes</h2>
          <Link href="/admin/book-notes/new">
            <a className="flex cursor-pointer items-center gap-2 rounded-md px-4 py-1 dark:bg-primary dark:text-white hover:bg-primary hover:text-white">
              <div className="">
                <FaPlus />
              </div>
              <span>New Book Notes</span>
            </a>
          </Link>
        </div>

        {bookNotes.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 py-12  sm:grid-cols-2 lg:grid-cols-3 ">
            {bookNotes.map((bookNote) => (
              <article key={bookNote?.id} className="flex border pr-2 gap-4 hover:bg-gray-50 dark:hover:bg-dim-dark p-1 rounded-md">
                <div className="min-w-[100px] sm:min-w-[150px]">
                  <img
                    src={bookNote?.image}
                    className="sm:h-56 w-full rounded-md"
                    alt=""
                  />
                </div>
                <div className="">
                  <h2 className="text-primary font-bold">
                    {bookNote?.name} {bookNote?.author}
                  </h2>
                  <h3 className="mt-2 text-sm font-bold">
                    {bookNote?.subtitle}
                  </h3>
                  <p className="mt-4 text-sm">
                    {bookNote?.intro}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <p className='dark:text-white'>{new Date(bookNote?.createdAt).toDateString().substring(3)}</p>

                    <Link href={`/admin/book-notes/${bookNote.id}`}>
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
              No Book Note Yet
            </h4>
          </div>
        )}
      </AdminWrapper>
    </ContainerBlock>
  )
}

export async function getServerSideProps() {
  try {
    const bookNotes = await bookNotesModel.getAllBookNotes('createdAt', "desc")

    return {
      props: { bookNotes: JSON.stringify(bookNotes) || [] },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { bookNotes: [], total: 0 },
    };
  }
}



export default BookNotes
