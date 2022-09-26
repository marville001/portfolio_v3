import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ContainerBlock from '../../components/ContainerBlock'
import ContactCallAction from '../../components/ContactCallAction'
import bookNotesModel from '../../models/book-notes.model.ts'
import { IBookNote } from '../../types/book-notes'

interface Props {
  bookNotes: IBookNote[]
}

const BookNotes = (props: Props) => {
  const [bookNotes, setBookNotes] = useState<IBookNote[]>([]);

  useEffect(() => {
    setBookNotes(typeof props.bookNotes === "object" ? [] : JSON.parse(props.bookNotes));
  }, [props.bookNotes])

  return (
    <ContainerBlock
      title="Martin -  Book Notes, Summaries, Lessons and Highlights"
      description="Book Notes, Summaries, Lessons and Highlights on some of the books am reading"
    >
      <div className="bg-primary dark:bg-dim-dark">
        <div className="md:px-6 mx-auto max-w-[900px] bg-primary dark:bg-dim-dark py-8 px-2 sm:px-4">
          <h1 className="text-center text-4xl font-light text-white">
            Book Summaries
          </h1>
          <div className="flex justify-center">
            <img
              src="/assets/bibliophile.svg"
              className="my-5 h-40 rounded-full"
              alt="Martin Mwangi"
            />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-dark dark:text-white">
        <div className="mx-auto max-w-[900px] px-2 py-12">
          <div className="grid gap-12 sm:grid-cols-2">
            {bookNotes?.map((bookNote) => (
              <Link key={bookNote?.id} href="">
                <a className="flex gap-4 dark:bg-dim-dark hover:bg-gray-50 dark:hover:bg-dim-dark p-2 rounded-md">
                  <div className="min-w-[100px] sm:min-w-[150px]">
                    <img
                      src={bookNote?.image}
                      className="sm:h-56 w-full rounded-md"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h2 className="text-primary font-bold">
                    {bookNote?.name} - {bookNote?.author}
                  </h2>
                  <h3 className="mt-2 text-sm font-bold">
                    {bookNote?.subtitle}
                  </h3>
                  <p className="mt-4 text-sm">
                    {bookNote?.intro}
                  </p>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <ContactCallAction />
    </ContainerBlock>
  )
}

export const getServerSideProps = async () => {
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
