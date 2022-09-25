import { NextPage } from 'next'
import React from 'react'
import ContainerBlock from '../components/ContainerBlock'

const ProgrammingJourney: NextPage = () => {
  return (
    <ContainerBlock
      title="Martin - Programming Journey"
      description="Get in touch with me to know more"
    >
      <div className="md:px-6 dark:text-white mx-auto min-h-[60vh] max-w-[900px] py-10 md:py-24 px-2 sm:px-4">
        <div className='flex justify-center'>
          <h1 className="text-3xl lg:text-5xl font-bold text-center space-y-2">
            Programming Journey
          </h1>
        </div>

        <div className="mt-5 flex justify-center flex-wrap">
          <h1 className='text-center max-w-xl text-3xl mt-24 uppercase font-bold opacity-50'>
            COMING SOON
          </h1>
        </div>
      </div>
    </ContainerBlock>
  )
}

export default ProgrammingJourney
