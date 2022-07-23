import { collection, getDocs, query, where } from 'firebase/firestore'
import { GetStaticProps, NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import ContainerBlock from '../../components/ContainerBlock'
import { postToJSON } from '../../lib/firebase'
import { firestore } from '../../lib/firebaseConfig'
import { Blog } from '../../types/blog'


const ReadBlogs: NextPage = ({ blog }: any) => {
  const [_blog, setBlog] = useState({})

  useEffect(() => {
    setBlog(JSON.parse(blog))
  }, [blog])  

  return (
    <ContainerBlock
      title="Martin - My Blogs"
      description="Welcome to my blog about ReactJs, NodeJs, Angular, Docker, Typescript, Sequelize, DevOps...etc"
    >
      <div className="bg-white">
        <div className="container md:py-10 min-h-[500px]">


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


export const getStaticProps: GetStaticProps = async (context: any)=> {
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
