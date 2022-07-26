import {
  query,
  collection,
  getDocs,
  doc,
  addDoc,
  updateDoc,
} from 'firebase/firestore'
import {
  createContext,
  ReactChildren,
  useContext,
  useEffect,
  useState,
} from 'react'
import toast from 'react-hot-toast'
import { firestore } from '../lib/firebaseConfig'
import { postToJSON } from '../lib/firebase'
import { Blog } from '../types/blog'

interface BlogsContextInterface {
  blogs: Blog[] | []
  loadBlogs: () => void
  createBlog: (blog: Blog) => any
  updateBlog: (blog: Blog, id: string) => any
  loading: boolean
  creating: boolean
  updating: boolean
}

const blogsContextDefaults: BlogsContextInterface = {
  blogs: [],
  loadBlogs: () => { },
  createBlog: () => { },
  updateBlog: () => { },
  loading: false,
  creating: false,
  updating: false,
}

const BlogsContext = createContext<BlogsContextInterface>(blogsContextDefaults)

const BlogsProvider = ({ children }: { children: ReactChildren }) => {
  const [blogs, setBlogs] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [updating, setUpdating] = useState<boolean>(false)
  const [creating, setCreating] = useState<boolean>(false)

  const dbInstance = collection(firestore, 'blogs')

  const loadBlogs = async () => {
    try {
      setLoading(true)

      const blogsQuery = query(dbInstance)
      const querySnapshot = await getDocs(blogsQuery)

      const data = querySnapshot.docs.map((doc) => postToJSON(doc))

      setBlogs(data)

      setLoading(false)
      return data;
    } catch (error) {
      console.log(error);

      setLoading(false)
    }
  }

  const createBlog = async (blog: Blog) => {
    try {
      setCreating(true)
      await addDoc(dbInstance, blog)

      setCreating(false)
      toast.success('Blog saved successfully')
      loadBlogs()

      return {
        success: true,
      }
    } catch (error) {
      toast.error('Failed to save blog. Try again later')
      setCreating(false)
      return {
        success: false,
      }
    }
  }

  const updateBlog = async (blog: any, id: string) => {
    try {
      setUpdating(true)
      const docRef = doc(firestore, "blogs", id);

      await updateDoc(docRef, blog)

      setUpdating(false)
      toast.success('Blog updated successfully')

      loadBlogs()

      return {
        success: true,
      }
    } catch (error) {
      toast.error('Failed to update blog. Try again later')
      setUpdating(false)
      return {
        success: false,
      }
    }
  }

  useEffect(() => {
    loadBlogs()

    return () => { loadBlogs() }
  }, [])


  return (
    <BlogsContext.Provider
      value={{ blogs, loadBlogs, createBlog, updateBlog, loading, creating, updating }}
    >
      {children}{' '}
    </BlogsContext.Provider>
  )
}

export const useBlogs = () => useContext(BlogsContext)
export default BlogsProvider
