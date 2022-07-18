import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '../../contexts/auth.context'

const AdminWrapper = ({ children }) => {
  const authContext = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!authContext.user?.uid) {
      router.push('/')
    }
  }, [authContext.user])

  return (
    <div>
      <div className="min-h-[800px] py-5 px-4">{children}</div>
    </div>
  )
}

export default AdminWrapper
