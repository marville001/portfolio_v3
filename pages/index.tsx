import type { NextPage } from 'next'

import ContainerBlock from '../components/ContainerBlock'
import Hero from '../components/Hero'
import FavouriteProjects from '../components/FavouriteProjects'
import LatestCode from '../components/LatestCode'

import getLatestRepos from '../lib/getLatestRepos'
import userData from '../constants/data'
const Home: NextPage = (props) => {
  return (
    <ContainerBlock
      title="Martin Mwangi - Software Developer - REACT,NEXT,NODE..."
      description="I've been developing websites for more than 2 years straight. Get in touch with me to know more."
    >
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={props.repositories} />
    </ContainerBlock>
  )
}

export const getServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN
  const repositories = await getLatestRepos(userData, token) || null

  return {
    props: {
      repositories,
    },
  }
}

export default Home
