import { NextPage } from 'next'
import React from 'react'
import ContainerBlock from '../../components/ContainerBlock'
const ReadBlogs: NextPage = () => {

  return (
    <ContainerBlock
      title="Martin - My Blogs"
      description="Welcome to my blog about ReactJs, NodeJs, Angular, Docker, Typescript, Sequelize, DevOps...etc"
    >
      <div className="bg-white">
        <div className="container md:py-10 min-h-[500px]">
          

        </div>
      </div>
    </ContainerBlock>
  )
}

export default ReadBlogs
