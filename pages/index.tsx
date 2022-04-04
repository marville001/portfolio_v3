import type { NextPage } from 'next'

import ContainerBlock from '../components/ContainerBlock'
import Hero from '../components/Hero'
import FavouriteProjects from '../components/FavouriteProjects'
import LatestCode from '../components/LatestCode'

const Home: NextPage = () => {
  return (
    <ContainerBlock
      title="Martin Mwangi - Software Developer - REACT,NEXT,NODE..."
      description="I've been developing websites for more than 2 years straight. Get in touch with me to know more."
    >
      <Hero />
      <FavouriteProjects />
      <LatestCode />
    </ContainerBlock>
  )
}

export default Home
