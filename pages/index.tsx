import type { NextPage } from 'next'

import ContainerBlock from '../components/ContainerBlock'
import HeroSection from '../components/home/hero-section'
import ExperienceSection from '../components/home/experience-section'

const Home: NextPage = (props) => {
  return (
    <ContainerBlock
      title="Martin Mwangi - Software Developer - REACT,NEXT,NODE..."
      description="I've been developing websites for more than 2 years straight. Get in touch with me to know more."
    >
      <HeroSection />
      <ExperienceSection />
    </ContainerBlock>
  )
}

export default Home
