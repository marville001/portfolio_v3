import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

import { useProgressStore } from '../store'
import AuthProvider from '../contexts/auth.context'
import BlogsProvider from '../contexts/blogs.context'

function MyApp({ Component, pageProps }) {
  const setIsAnimating = useProgressStore((state) => state.setIsAnimating)
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true)
    }
    const handleStop = () => {
      setIsAnimating(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Toaster position="bottom-center" reverseOrder={false} />
      <AuthProvider>
        <BlogsProvider>
          <Component {...pageProps} />
        </BlogsProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
