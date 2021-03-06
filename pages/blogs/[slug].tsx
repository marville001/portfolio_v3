import { collection, getDocs, query, where } from 'firebase/firestore'
import { GetStaticProps, NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import ContainerBlock from '../../components/ContainerBlock'
import { postToJSON } from '../../lib/firebase'
import { firestore } from '../../lib/firebaseConfig'
import { Blog } from '../../types/blog'


const ReadBlogs: NextPage = ({ blog }: any) => {
  const [_blog, setBlog] = useState<Blog | null>(null)

  useEffect(() => {
    setBlog(typeof blog === "string" ? JSON.parse(blog) : {})
  }, [blog])

  console.log(_blog);


  return (
    <ContainerBlock
      description={_blog?.intro}
      image={_blog?.cover
        ? _blog?.cover
        : 'https://www.mountaingoatsoftware.com/images/made/uploads/blog/2022-06-21-living-with-uncertainty_600_314.png'}
      title={_blog?.title}
      url={`https://my-portfolio-dev.vercel.app/blogs/${_blog?.slug}`}
      date={_blog?.createdAt}
    >
      <div className="bg-white">
        <div className="max-w-[900px] mx-auto p-2 sm:p-4 bg-red-100 md:py-10 min-h-[500px]">

          <div className="">
            <img src="https://avatars.githubusercontent.com/u/51154760?v=4" className='w-16 h-16 rounded-full' alt="" />
          </div>

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
