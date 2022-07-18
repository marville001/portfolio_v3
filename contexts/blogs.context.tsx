import { query, collection, getDocs } from 'firebase/firestore'
import { createContext, ReactChildren, useContext, useState } from 'react'
import { database } from '../lib/firebaseConfig'

export interface BlogInterface {
  title: string
  description: string
}

interface BlogsContextInterface {
  blogs: BlogInterface[] | []
  loadBlogs: () => Promise<BlogInterface[] | []> | []
}

const blogsContextDefaults: BlogsContextInterface = {
  blogs: [],
  loadBlogs: () => [],
}

const BlogsContext = createContext<BlogsContextInterface>(blogsContextDefaults)

const BlogsProvider = ({ children }: { children: ReactChildren }) => {
  const [blogs, setBlogs] = useState<BlogInterface[]>([])

  const loadBlogs = async () => {
    const blogsQuery = query(collection(database, 'blogs'))
    const querySnapshot = await getDocs(blogsQuery)

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data())
    })

    return []
  }

  return (
    <BlogsContext.Provider value={{ blogs, loadBlogs }}>
      {children}{' '}
    </BlogsContext.Provider>
  )
}

export const useBlogs = () => useContext(BlogsContext)
export default BlogsProvider
