import { NextPage } from 'next'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import ContainerBlock from '../../components/ContainerBlock'

const Blogs: NextPage = () => {
  return (
    <ContainerBlock
      title="Martin Mwangi - My Blogs"
      description="Get in touch with me to know more"
    >
      <div className="bg-grayish">
        <div className="md-px-6 mx-auto min-h-[60vh] max-w-[900px] py-10 px-2 sm:px-4">
          <form>
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 peer-focus:text-red-400" />
              <input
                type="search"
                className="w-full rounded border peer bg-primary bg-opacity-10 px-4 pl-12 py-2 text-lg focus:bg-white focus:outline-none focus:ring-1"
                placeholder="Search my blogs here..."
              />
            </div>
          </form>
        </div>
      </div>
    </ContainerBlock>
  )
}

export default Blogs
