import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FaSpinner } from 'react-icons/fa'
import { useAuth } from '../../contexts/auth.context'

const AdminWrapper = ({ children }) => {
  const authContext = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!authContext.loading && !authContext.user?.uid) {
      router.push('/')
    }
  }, [authContext.user, authContext.loading])

  if (authContext.loading || !authContext.user?.uid)
    return (
      <div className="flex min-h-screen justify-center items-center">
        <FaSpinner className='animate-spin text-4xl' />
      </div>
    )

  return (
    <div>
      <div className="min-h-[800px] max-w-[1240px] mx-auto py-5 px-4">{children}</div>
    </div>
  )
}

export default AdminWrapper
