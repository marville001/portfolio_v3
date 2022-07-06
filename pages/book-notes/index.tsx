import Link from 'next/link'
import React from 'react'
import ContainerBlock from '../../components/ContainerBlock'

const BookNotes = () => {
  return (
    <ContainerBlock
      title="Martin - Book Notes, Summaries, Lessons and Highlights"
      description="Book Notes, Summaries, Lessons and Highlights on some of the books am reading"
    >
      <div className="bg-primary">
        <div className="md-px-6 mx-auto max-w-[900px] bg-primary py-8 px-2 sm:px-4">
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

      <div className="bg-white">
        <div className="mx-auto max-w-[900px] py-12">
          <div className="grid gap-12 sm:grid-cols-2">
            {[1, 2, 3, 4].map((note) => (
              <Link key={note} href="">
                <a className="flex gap-4">
                  <div className="min-w-[150px]">
                    <img
                      src="/assets/books/Atomic-Habits.jpg"
                      className="h-56 w-full"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h2 className="text-primary">
                      Atomic Habits - James Clear
                    </h2>
                    <h3 className="mt-2 text-sm font-bold">
                      Book Summary, Notes & Highlights
                    </h3>
                    <p className="mt-4 text-sm">
                      This book helped me understand how habits are formed and
                      what we can do to build long-lasting chains of cues,
                      cravings, responses, and rewards to create systems that
                      will help us achieve our goals.
                    </p>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </ContainerBlock>
  )
}

export default BookNotes
