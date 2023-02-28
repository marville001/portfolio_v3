import Link from 'next/link'
import React from 'react'
import ContactCallAction from '../components/ContactCallAction'
import ContainerBlock from '../components/ContainerBlock'

const AboutMe = () => {
  return (
    <ContainerBlock
      title="Martin -  About Me"
      description="Am a web developer, fully dedicated in learning Javascript (and typescript) and implement it in fullstack development"
    >
      <div className="my-16">

        <h1 className="text-center text-4xl my-8 font-sans font-bold tracking-wider text-dark dark:text-white">
          How I Became a Software Developer
        </h1>
        <p className="my-6 text-xl text-center dark:text-white">You will be suprised :) I wanted to be one</p>
        <div className="flex justify-center">
          <img
            src="https://avatars.githubusercontent.com/u/51154760?v=4"
            className="my-5 h-40 rounded-full"
            alt="Martin Mwangi"
          />
        </div>

        <div className="py-8 text-center dark:text-white">Am Creating the story. Soon it will be viewable right here</div>

      </div>

      <ContactCallAction />
    </ContainerBlock>
  )
}

export default AboutMe
