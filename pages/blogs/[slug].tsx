import { collection, getDocs, query, where } from 'firebase/firestore'
import { GetStaticProps, NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import ContainerBlock from '../../components/ContainerBlock'
import RichTextMainWrapper from '../../components/RichTextMainWrapper'
import { postToJSON } from '../../lib/firebase'
import { firestore } from '../../lib/firebaseConfig'
import { Blog } from '../../types/blog'


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
      <div className="bg-[#f9f9f9] py-8 p-2 sm:px-6">
        <div className="flex mx-auto max-w-[1200px] flex-col lg:flex-row justify-center gap-8">
          <div className="max-w-[768px] mx-auto lg:mx-0 lg:max-w-[66.666%] w-auto bg-white _shadow3 rounded-lg p-4 sm:p-6 min-h-[500px]">

            <h2 className='my-6 text-xl text-center font-semibold sm:text-3xl max-w-[300px] bg-red-400'>{_blog?.title}</h2>
            
            <div className="flex gap-6 mt-8 justify-center flex-wrap">
              <span className='bg-gray-100 px-3 py-1.5 tracking-wider leading-none text-sm hover:bg-gray-800 hover:text-white cursor-pointer rounded-md'><b className='text-gray-600'>#</b> ReactJs</span>
              <span className='bg-gray-100 px-3 py-1.5 tracking-wider leading-none text-sm hover:bg-gray-800 hover:text-white cursor-pointer rounded-md'><b className='text-gray-600'>#</b> ReactJs</span>
              <span className='bg-gray-100 px-3 py-1.5 tracking-wider leading-none text-sm hover:bg-gray-800 hover:text-white cursor-pointer rounded-md'><b className='text-gray-600'>#</b> ReactJs</span>
              <span className='bg-gray-100 px-3 py-1.5 tracking-wider leading-none text-sm hover:bg-gray-800 hover:text-white cursor-pointer rounded-md'><b className='text-gray-600'>#</b> ReactJs</span>
              <span className='bg-gray-100 px-3 py-1.5 tracking-wider leading-none text-sm hover:bg-gray-800 hover:text-white cursor-pointer rounded-md'><b className='text-gray-600'>#</b> ReactJs</span>
              <span className='bg-gray-100 px-3 py-1.5 tracking-wider leading-none text-sm hover:bg-gray-800 hover:text-white cursor-pointer rounded-md'><b className='text-gray-600'>#</b> ReactJs</span>
            </div>

            <div className="flex gap-6 mt-8">
              <img src="https://avatars.githubusercontent.com/u/51154760?v=4" className='w-20 h-20 rounded-full' alt="" />
              <div className="">
                <h2 className='text-lg sm:text-2xl font-bold  opacity-75'>Martin Mwangi</h2>
                <p className='text-sm sm:text-base mt-3 font-bold opacity-50'>{new Date(_blog?.createdAt).toUTCString().toString().replace("GMT", "")}</p>
              </div>
            </div>

            <article className='mt-6 mb-12 flex flex-col items-center'>
              {
                _blog?.cover && <img className='w-full rounded-lg max-h-[400px] object-cover' src={_blog?.cover} alt={_blog?.title} />
              }
              <RichTextMainWrapper>
                <div dangerouslySetInnerHTML={{ __html: _blog?.blog || "" }} />
              </RichTextMainWrapper>

            </article>

          </div>

          <div className="p-6 hidden lg:block min-w-[300px] bg-white rounded-lg sticky top-5 min-h-[calc(100vh-2.75rem)] _shadow3"></div>
        </div>
      </div>
    </ContainerBlock>
  )
}

export async function getStaticPaths() {
  const dbInstance = collection(firestore, 'blogs')
  const blogsQuery = query(dbInstance)
  const querySnapshot = await getDocs(blogsQuery)
  const blogs = querySnapshot.docs.map(postToJSON)

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
    const blogsRef = collection(firestore, 'blogs')
    const blogsQuery = query(blogsRef, where("slug", "==", context.params.slug))
    const querySnapshot = await getDocs(blogsQuery)
    const blogs = querySnapshot.docs.map(postToJSON)

    const blog = blogs.length > 0 ? blogs[0] : {}

    if (blogs.length <= 0) {
      return {
        notFound: true,
      };
    }

    return {
      props: { blog: JSON.stringify(blog) },
      revalidate: 60, // after 60seconds.. it will revalidate the old cache
    };
  } catch (error) {
    console.log(error);

    return {
      props: { blogs: {} },
    };
  }
}

export default ReadBlogs
