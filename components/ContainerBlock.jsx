import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from './Navbar'
import { Footer } from './Footer'
import { Progress } from './progress'
import { useProgressStore } from '../store'

const ContainerBlock = ({
  children,
  showInterest = true,
  ...customMeta
}) => {
  const router = useRouter()
   const isAnimating = useProgressStore((state) => state.isAnimating)

  const meta = {
    title: 'Martin - Software Developer - REACT,NEXT,NODE...',
    description: `I've been developing websites for more than 2 years straight. Get in touch with me to know more.`,
    image: '/avatar.png',
    type: 'website',
    tags:[],
    url: "https://my-portfolio-dev.vercel.app/",
    timeToRead:"8 min read",
    writtenBy:"Martin Mwangi",
    ...customMeta,
  }

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <meta content={meta.description} name="description" />
        <link rel="icon" href="/assets/my-logo.ico" type="image/icon type" />
        <meta data-rh="true" name="author" content="Martin Mwangi" />
        <meta data-rh="true" property="og:url" content={meta.url} />
        <meta data-rh="true" property="og:type" content={meta.type} />
        <meta data-rh="true" property="og:site_name" content="Martin Mwangi Portfolio" />
        <meta data-rh="true" property="og:description" content={meta.description} />
        <meta data-rh="true" property="og:title" content={meta.title} />
        <meta data-rh="true" property="og:image" content={meta.image} />
        <meta data-rh="true" name="twitter:card" content="summary_large_image" />
        <meta data-rh="true" name="twitter:site" content="@marville001" />
        <meta data-rh="true" name="twitter:title" content={meta.title} />
        <meta data-rh="true" name="twitter:description" content={meta.description} />
        <meta data-rh="true" name="twitter:image:src" content={meta.image} />
        <meta data-rh="true" name="twitter:creator" content="@https://twitter.com/marville001" />
        {meta.date && (<meta property="article:published_time" content={meta.date} />)}
        {
          meta.tags.map((tag, i) => ( <meta key={i} data-rh="true" property="article:tag" content={tag} />  ))
        }
        {
          meta.type === "article" &&
          <>
            <meta data-rh="true" name="twitter:label1" content="Written by" />
            <meta data-rh="true" name="twitter:data1" content={meta.writtenBy} />
            <meta data-rh="true" name="twitter:label1" content="Time to read" />
            <meta data-rh="true" name="twitter:data1" content={meta.timeToRead} />
            <meta property="article:author" content="https://www.linkedin.com/in/marville001/" />
          </>
        }

        <link rel="canonical" href={meta.url} />
        <script
          src="https://www.google.com/recaptcha/api.js?&render=explicit"
          async
          defer
        ></script>
      </Head>
      <main className="min-h-screen bg-white dark:bg-dark">
        <Navbar />
        <Progress isAnimating={isAnimating} />
        <div className="mt-[80px]">{children}</div>
        <Footer showInterest={showInterest} />
      </main>
    </div>
  )
}

export default ContainerBlock
