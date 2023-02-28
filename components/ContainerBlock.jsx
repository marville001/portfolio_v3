import React from 'react'
import Navbar from './Navbar'
import { Footer } from './Footer'
import { Progress } from './progress'
import { useProgressStore } from '../store'
import { NextSeo } from 'next-seo'

const ContainerBlock = ({ children, showInterest = true, ...customMeta }) => {
  const isAnimating = useProgressStore((state) => state.isAnimating)

  const meta = {
    title: 'Martin Mwangi - The Reactive Developer',
    description:
      'Martin Mwangi - A Full stack developer @ TheJitu Ltd. I love coding',
    image: 'https://avatars.githubusercontent.com/u/51154760?v=4',
    type: 'article',
    tags: ['The Reactive Developer', 'Next.Js', 'React.Js', 'Martin Mwangi', 'Martin Mwangi Wanjiku'],
    url: 'https://thereactivedeveloper.com/',
    timeToRead: '8 min read',
    writtenBy: 'Martin Mwangi',
    authors: ['https://thereactivedeveloper.com/'],
    ...customMeta,
  }

  return (
    <div>
      {/* <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <meta content={meta.description} name="description" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta data-rh="true" name="author" content="Martin Mwangi" />
        <meta data-rh="true" property="og:url" content={meta.url} />
        <meta data-rh="true" property="og:type" content={meta.type} />
        <meta
          data-rh="true"
          property="og:site_name"
          content="Martin Mwangi Portfolio"
        />
        <meta
          data-rh="true"
          property="og:description"
          content={meta.description}
        />
        <meta data-rh="true" property="og:title" content={meta.title} />
        <meta data-rh="true" property="og:image" content={meta.image} />
        <meta
          data-rh="true"
          name="twitter:card"
          content="summary_large_image"
        />
        <meta data-rh="true" name="twitter:site" content="@marville001" />
        <meta data-rh="true" name="twitter:creator" content="@marville001" />
        <meta data-rh="true" name="twitter:title" content={meta.title} />
        <meta
          data-rh="true"
          name="twitter:description"
          content={meta.description}
        />
        <meta data-rh="true" name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
        {meta.tags.map((tag, i) => (
          <meta key={i} data-rh="true" property="article:tag" content={tag} />
        ))}
        {meta.type === 'article' && (
          <>
            <meta data-rh="true" name="twitter:label1" content="Written by" />
            <meta
              data-rh="true"
              name="twitter:data1"
              content={meta.writtenBy}
            />
            <meta data-rh="true" name="twitter:label1" content="Time to read" />
            <meta
              data-rh="true"
              name="twitter:data1"
              content={meta.timeToRead}
            />
            <meta
              property="article:author"
              content="https://www.linkedin.com/in/marville001/"
            />
            <meta
              property="article:publisher"
              content="https://www.linkedin.com/in/marville001"
            ></meta>
          </>
        )}

        <link rel="icon" href="/assets/my-logo.ico" type="image/icon type" />
        <link rel="canonical" href={meta.url} />
      </Head> */}

      <NextSeo
        title={meta?.title}
        description={meta?.description}
        canonical={meta?.url}
        openGraph={{
          type: meta?.type,
          article: {
            publishedTime: meta?.date,
            modifiedTime: meta?.date,
            authors: meta?.authors,
            tags: meta?.tags,
          },
          url: meta?.url,
          images: {
            url: meta?.image,
            width: 850,
            height: 650,
            alt: 'Martin Mwangi - The Reactive Developer',
          },
          site_name: meta?.title,
        }}
      />

      {/* <script
        src="https://www.google.com/recaptcha/api.js?&render=explicit"
        async
        defer
      ></script> */}
      <main className="min-h-screen bg-white dark:bg-dark">
        <Navbar />
        <Progress isAnimating={isAnimating} />
        <div className="">{children}</div>
        <Footer showInterest={showInterest} />
      </main>
    </div>
  )
}

export default ContainerBlock
