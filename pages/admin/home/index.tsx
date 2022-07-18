import { NextPage } from 'next'
import React from 'react'

import AdminWrapper from '../../../components/admin/AdminWrapper'
import ContainerBlock from '../../../components/ContainerBlock'

const Blogs: NextPage = () => {
  return (
    <ContainerBlock
      title="Martin - Software Developer - REACT,NEXT,NODE..."
      description="I've been developing websites for more than 2 years straight. Get in touch with me to know more."
      showInterest={false}
    >
      <AdminWrapper>Blogs</AdminWrapper>
    </ContainerBlock>
  )
}

export default Blogs
