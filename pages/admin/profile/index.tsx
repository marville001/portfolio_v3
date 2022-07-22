import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

import AdminWrapper from '../../../components/admin/AdminWrapper'
import ContainerBlock from '../../../components/ContainerBlock'

const Profile: NextPage = () => {
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
      </AdminWrapper>
    </ContainerBlock>
  )
}

export default Profile
