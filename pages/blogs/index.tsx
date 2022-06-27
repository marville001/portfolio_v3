import { NextPage } from 'next'
import React from 'react'
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
              <input
                type="search"
                className="w-full rounded border px-4 py-2 text-lg focus:outline-none focus:ring-1"
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
