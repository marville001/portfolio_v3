import {
  collection,
  // collectionGroup, endBefore,
  getDocs,
  // limit,
  orderBy, query,
  // startAfter
} from 'firebase/firestore'
import { NextPage } from 'next'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import ContainerBlock from '../../components/ContainerBlock'
import { postToJSON } from '../../lib/firebase'
import { firestore } from '../../lib/firebaseConfig'

const Blogs: NextPage = ({ blogs, total }: any) => {

  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  // const [totalPosts, setTotalPosts] = useState(0);
  // const [page, setPage] = useState(1);
  // const [pageSize, _setPageSize] = useState(1);

  // const getNextPosts = async () => {
  //   setLoading(true);

  //   console.log(blogPosts);

  //   try {
  //     const last = blogPosts[blogPosts.length - 1];
  //     const dbInstance = collection(firestore, 'blogs')
  //     let blogsQuery= query(dbInstance, orderBy('createdAt', "desc"), limit(pageSize+1), startAfter(last.createdAt))

  //     const querySnapshot = await getDocs(blogsQuery)
  //     const blogs = querySnapshot.docs.map(postToJSON)

  //     setBlogPosts(blogs);
  //     setPage(page + 1)
  //     setLoading(false);

  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false)
  //   }
  // };

  // const getPreviousPosts = async () => {
  //   setLoading(true);
  //   try {
  //     const first = blogPosts[0];

  //     const dbInstance = collection(firestore, 'blogs')
  //     const blogsQuery = query(dbInstance, orderBy('createdAt', "desc"), limit(pageSize), endBefore(first.createdAt))
  //     const querySnapshot = await getDocs(blogsQuery)
  //     const blogs = querySnapshot.docs.map(postToJSON)

  //     setBlogPosts(blogs);
  //     setLoading(false);
  //     setPage(page - 1)
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false)
  //   }

  // };


  useEffect(() => {
    setLoading(false)

    if (total) {
      // setTotalPosts(total)
    }

    setBlogPosts(typeof blogs === "object" ? [] : JSON.parse(blogs));
  }, [blogs, total])
  


  return (
    <ContainerBlock
      title="Martin - My Blogs"
      description="Welcome to my blog about ReactJs, NodeJs, Angular, Docker, Typescript, Sequelize, DevOps...etc"
    >
      <div className="bg-primary">
        <div className="md-px-6 mx-auto max-w-[900px] bg-primary py-10 px-2 sm:px-4">
          <h1 className="text-center text-4xl font-light text-white">
            Welcome to Martin Mwangi's Blog
          </h1>
          <div className="flex justify-center">
            <p className="my-5 max-w-[400px] text-center text-sm text-gray-200">
              Here I share my journey and learning experience in (but not
              limitted to ) web development, docker, aws, kubernetes, React.Js,
              Angular TailwindCss, Graphql, Node.js etc.
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="/programming-journey">
              <a className="rounded-md bg-dark py-1.5 px-6 text-white">
                View My Journeys
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3">
            {blogPosts.map((blog) => (
              <div key={blog.id} className="_shadow3 hover:scale-105 transition-all duration-150">
                <article className="overflow-hidden rounded border">
                  <Link href={`/blogs/${blog.slug}`}>
                    <img
                      src={
                      blog.cover
                        ? blog.cover
                        : 'https://www.mountaingoatsoftware.com/images/made/uploads/blog/2022-06-21-living-with-uncertainty_600_314.png'
                    }
                      alt="My Blog"
                      className="cursor-pointer h-48 border-b object-cover w-full"
                    />
                  </Link>

                  <div className="p-5">
                    <Link href={`/blogs/${blog.slug}`}>
                      <a className="text-lg text-primary hover:underline">
                        <h3>
                          {blog.title}
                        </h3>
                      </a>
                    </Link>

                    <p className="mt-3 text-sm">
                      {blog.intro}
                    </p>

                    <div className="mt-5 flex items-center justify-between">
                      <p>
                        {new Date(blog.createdAt).toDateString()}
                      </p>
                      {console.log(blog.createdAt)}
                      

                      <Link href={`/blogs/${blog.slug}`}>
                        <a className="rounded border border-primary px-3 py-1 text-primary transition-all duration-150 hover:bg-primary hover:text-white">
                          Read
                        </a>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
          {blogPosts.length === 0 && !loading &&
            <div className="flex min-h-[400px]  items-center justify-center">
              <h4 className="text-4xl font-bold uppercase opacity-30">
                No Blog Post Yet
              </h4>
            </div>
          }

          {/* {!postsEnd && */}
          {/* <div className="mb-8 flex justify-end">
            <div className="flex items-center gap-2">
              <FaChevronLeft
                onClick={(page <= 1) ? () => { } : getPreviousPosts}
                className={`text-xl ${page === 1 ? "cursor-not-allowed text-slate-300" : "cursor-pointer text-slate-900"}`}
              />
              <div className="rounded-md bg-primary px-3 py-1 text-sm text-white">
                1
              </div>
              <FaChevronRight
                onClick={(page * (pageSize) >= totalPosts) ? () => { } : getNextPosts}
                className={`text-xl ${(page * (pageSize) >= totalPosts) ? "cursor-not-allowed text-slate-300" : "cursor-pointer text-slate-900"}`}
              />
            </div>
          </div> */}
          {/* } */}
        </div>
      </div>
    </ContainerBlock>
  )
}

// export async function getStaticProps() {

// }

export async function getServerSideProps() {
  try {
    const dbInstance = collection(firestore, 'blogs')
    const blogsQuery = query(dbInstance, orderBy('createdAt', "desc"))
    const querySnapshot = await getDocs(blogsQuery)
    const blogs = querySnapshot.docs.map(postToJSON)

    const total = (await getDocs(query(collection(firestore, 'blogs')))).size

    return {
      props: { blogs: JSON.stringify(blogs) || [], total: total || 0 },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { blogs: [], total: 0 },
    };
  }
}

export default Blogs
