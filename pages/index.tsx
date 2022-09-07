import type { NextPage } from 'next'

import ContainerBlock from '../components/ContainerBlock'
import HeroSection from '../components/home/hero-section'
import ExperienceSection from '../components/home/experience-section'
import ServicesSection from '../components/home/services-section'
import Portfolios from '../components/home/portfolios-section'

import LangToolsSection from '../components/home/lang-tools-section'
import AboutMe from '../components/home/about-section'
import ContactCallAction from '../components/ContactCallAction'

const Home: NextPage = (props: any) => {
  return (
    <ContainerBlock
      title="Martin - Software Developer - REACT,NEXT,NODE..."
      description="I've been developing websites for more than 2 years straight. Get in touch with me to know more."
    >
      <HeroSection />
      <div className="bg-gray-400 my-0 h-[1px] hidden dark:block container bg-opacity-20"></div>
      <ExperienceSection />
      <div className="bg-gray-400 my-0 h-[1px] hidden dark:block container bg-opacity-20"></div>
      <LangToolsSection />
      <div className="bg-gray-400 my-0 h-[1px] hidden dark:block container bg-opacity-20"></div>
      <ServicesSection />
      <div className="bg-gray-400 my-0 h-[1px] hidden dark:block container bg-opacity-20"></div>
      <Portfolios projects={props?.projects} />
      <div className="bg-gray-400 my-0 h-[1px] hidden dark:block container bg-opacity-20"></div>
      <AboutMe />
      <ContactCallAction />
    </ContainerBlock>
  )
}

export const getServerSideProps = async () => {

  return {
    props: { projects: [] },
  }
}

export default Home
