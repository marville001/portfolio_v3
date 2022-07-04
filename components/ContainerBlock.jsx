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
    title: 'Martin Mwangi - Software Developer - REACT,NEXT,NODE...',
    description: `I've been developing websites for more than 2 years straight. Get in touch with me to know more.`,
    image: '/avatar.png',
    type: 'website',
    ...customMeta,
  }

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://martinmwangi.netlify.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://martinmwangi.netlify.com${router.asPath}`}
        />
        <link rel="icon" href="/assets/my-logo.ico" type="image/icon type" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Martin Mwangi Portfolio" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@marville001" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}

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
