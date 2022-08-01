import {
  collection,
  doc,
  addDoc,
  updateDoc,
} from 'firebase/firestore'
import {
  useEffect,
  createContext,
  useContext,
  useState,
  ReactElement,
  ReactNode,
} from 'react';
import toast from 'react-hot-toast'
import { firestore } from '../lib/firebaseConfig'
import { Blog } from '../types/blog'
import { getAllBlogsService } from '../services/blogs.service'

interface ContextProps {
  blogs: Blog[] | []
  createBlog: (blog: Blog) => any
  updateBlog: (blog: Blog, id: string) => any
  loading: boolean
  creating: boolean
  updating: boolean
}

const blogsContextDefaults: ContextProps = {
  blogs: [],
  createBlog: () => { },
  updateBlog: () => { },
  loading: false,
  creating: false,
  updating: false,
}

const BlogsContext = createContext<ContextProps>(blogsContextDefaults)

type Props = {
  children: ReactNode;
};

const BlogsProvider = ({ children }: Props): ReactElement => {
  const [blogs, setBlogs] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [updating, setUpdating] = useState<boolean>(false)
  const [creating, setCreating] = useState<boolean>(false)

  const dbInstance = collection(firestore, 'blogs')

  const loadBlogs = async () => {
    try {
      setLoading(true)
      const data = await getAllBlogsService();
      if (data) setBlogs(data)
      setLoading(false)
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
      value={{ blogs, createBlog, updateBlog, loading, creating, updating }}
    >
      {children}
    </BlogsContext.Provider>
  )
}

export const useBlogs = (): ContextProps => useContext(BlogsContext)
export default BlogsProvider
