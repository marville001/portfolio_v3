import type { NextPage } from 'next'

import ContainerBlock from '../components/ContainerBlock'
import HeroSection from '../components/home/hero-section'
import ExperienceSection from '../components/home/experience-section'
import ServicesSection from '../components/home/services-section'
import Portfolios from '../components/home/portfolios-section'

import { client } from '../lib/sanity'
import LangToolsSection from '../components/home/lang-tools-section'
import ContactSection from '../components/home/contact-session'
import AboutMe from '../components/home/about-section'

const Home: NextPage = (props: any) => {
  return (
    <ContainerBlock
      title="Martin -Software Developer - REACT,NEXT,NODE..."
      description="I've been developing websites for more than 2 years straight. Get in touch with me to know more."
    >
      <HeroSection />
      <ExperienceSection />
      <LangToolsSection />
      <ServicesSection />
      <Portfolios projects={props?.projects} />
      <AboutMe />
      <ContactSection />
    </ContainerBlock>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "project" && major == true] | order(_createdAt desc)'
  const projects = await client.fetch(query)

  return {
    props: { projects },
  }
}

export default Home
