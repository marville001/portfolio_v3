import type { NextPage } from 'next'

import ContainerBlock from '../components/ContainerBlock'
import HeroSection from "../components/home/hero-section"
import ExperienceSection from "../components/home/experience-section"

const Home: NextPage = (props) => {
  return (
    <ContainerBlock
      title="Martin Mwangi - Software Developer - REACT,NEXT,NODE..."
      description="I've been developing websites for more than 2 years straight. Get in touch with me to know more."
    >
      <HeroSection />
      <ExperienceSection />
      <h3>Portfolio</h3>
      <h3>Portfolio</h3>
      {[1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 90, 0, 0, 0, -0, 0, 0, 0, 0, 0,5,6,7,8,8,8,8].map(
        (_, i) => (
          <div key={i} className="my-5">
            <h3>Portfolio</h3>
          </div>
        )
      )}
    </ContainerBlock>
  )
}

export default Home
