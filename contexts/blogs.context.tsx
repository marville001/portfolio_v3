import { query, collection, getDocs } from 'firebase/firestore'
import {
  createContext,
  ReactChildren,
  useContext,
  useEffect,
  useState,
} from 'react'
import { database } from '../lib/firebaseConfig'

export interface BlogInterface {
  title: string
  description: string
}

interface BlogsContextInterface {
  blogs: BlogInterface[] | []
  loadBlogs: () => void
}

const blogsContextDefaults: BlogsContextInterface = {
  blogs: [],
  loadBlogs: () => {},
}

const BlogsContext = createContext<BlogsContextInterface>(blogsContextDefaults)

const BlogsProvider = ({ children }: { children: ReactChildren }) => {
  const [blogs, setBlogs] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const loadBlogs = async () => {
    try {
      setLoading(true)

      const blogsQuery = query(collection(database, 'blogs'))
      const querySnapshot = await getDocs(blogsQuery)
      const data = querySnapshot.docs.map((doc) => doc.data())

      setBlogs(data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadBlogs()
  }, [])

  return (
    <BlogsContext.Provider value={{ blogs, loadBlogs }}>
      {children}{' '}
    </BlogsContext.Provider>
  )
}

export const useBlogs = () => useContext(BlogsContext)
export default BlogsProvider
