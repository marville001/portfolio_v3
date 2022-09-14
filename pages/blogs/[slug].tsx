import { collection, getDocs, query, where } from 'firebase/firestore'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ContainerBlock from '../../components/ContainerBlock'
import RichTextMainWrapper from '../../components/RichTextMainWrapper'
import { postToJSON } from '../../lib/firebase'
import { firestore } from '../../lib/firebaseConfig'
import { Blog } from '../../types/blog'
import blogsModel from '../../models/blogs.model'


const ReadBlogs: NextPage = ({ blog }: any) => {
  const [_blog, setBlog] = useState<Blog | null>(null)

  useEffect(() => {
    setBlog(typeof blog === "string" ? JSON.parse(blog) : {})
  }, [blog])

  return (
    <ContainerBlock
      description={_blog?.intro}
      image={_blog?.cover
        ? _blog?.cover
        : 'https://www.mountaingoatsoftware.com/images/made/uploads/blog/2022-06-21-living-with-uncertainty_600_314.png'}
      title={_blog?.title}
      url={`https://my-portfolio-dev.vercel.app/blogs/${_blog?.slug}`}
      date={_blog?.createdAt}
      type="article"
    >
      <div className="bg-[#f9f9f9] dark:text-white dark:bg-dark py-8 px-3.5 sm:px-6">
        <div className="flex mx-auto max-w-[1200px] flex-col lg:flex-row justify-center gap-8">
          <div className="max-w-[768px] mx-auto lg:mx-0 lg:max-w-[66.666%] w-[100%0] rounded-lg p-2 sm:p-6 min-h-[500px]">

              <div className="flex gap-6 mt-8 max-w-[600px] mx-auto justify-center flex-wrap">
                    <p className='font-semibold text-accent uppercase tracking-wider'>
                       {_blog?.tag}
                    </p>
              </div>

            <div className="flex justify-center my-3">
              <h2 className='text-xl text-center font-semibold sm:text-4xl max-w-[600px]'>{_blog?.title}</h2>
            </div>

            <div className="flex justify-center items-center gap-5 sm:gap-8 sm:divide-x-2 flex-col sm:flex-row">
              <h4 className='text-lg font-[400] text-center'>By <Link href="/about-me/"><a className='hover:text-primary ml-2'>Martin Mwangi</a></Link></h4>
              <p className='text-lg font-[400] text-center sm:pl-8'>{new Date(_blog?.createdAt).toDateString().substring(3)}</p>
              {/* <p className='text-lg font-[400] text-center sm:pl-8'>{new Date(_blog?.createdAt).toUTCString().toString().replace("GMT", "")}</p> */}
            </div>

            <article className='mt-4 grid grid-cols-1 mb-12 items-center'>
              {
                _blog?.cover && <img className='w-full border max-h-[400px] object-cover' src={_blog?.cover} alt={_blog?.title} />
              }
              <RichTextMainWrapper>
                <div dangerouslySetInnerHTML={{ __html: _blog?.blog || "" }} />
              </RichTextMainWrapper>

            </article>

          </div>

          {/* <div className="p-6 hidden lg:block min-w-[300px] bg-white rounded-lg sticky top-5 min-h-[calc(100vh-2.75rem)] _shadow3"></div> */}
        </div>
      </div>
    </ContainerBlock>
  )
}

export async function getStaticPaths() {
  const blogs = await blogsModel.getAllBlogs() ?? []

  const paths = blogs.map(blog => ({
    params: { slug: blog.slug }
  }))
  return {
    paths,
    fallback: true // true or false or 'blocking'
  };
}


export const getStaticProps: GetStaticProps = async (context: any) => {
  try {
    const blog = await blogsModel.getBlogBySlugs(context.params.slug) ?? []

    if (!blog) {
      return {
        notFound: true,
      };
    }

    return {
      props: { blog: JSON.stringify(blog) },
      revalidate: 60, // after 60seconds.. it will revalidate the old cache
    };
  } catch (error) {
    return {
      props: { blogs: {} },
    };
  }
}

export default ReadBlogs
