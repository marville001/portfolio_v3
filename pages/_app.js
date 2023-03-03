import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

import { useProgressStore } from '../store'
import AuthProvider from '../contexts/auth.context'
import BlogsProvider from '../contexts/blogs.context'

import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }) {
  const setIsAnimating = useProgressStore((state) => state.setIsAnimating)
  const router = useRouter()

  // close if the ctr+shift+> key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode, shiftKey, ctrlKey }) => {
      if (
        !shiftKey ||
        !ctrlKey ||
        keyCode !== 190 ||
        router.pathname.startsWith('/admin')
      )
        return

      router.push('/admin')
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

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
          <DefaultSeo
            title="Martin Mwangi - The Reactive Developer"
            description="Martin Mwangi - A Full stack developer @ TheJitu Ltd. I love coding"
            openGraph={{
              type: 'website',
              locale: 'en_IE',
              url: 'https://thereactivedeveloper.com/',
              siteName: 'Martin Mwangi - The Reactive Developer',
            }}
            twitter={{
              handle: '@handle',
              site: '@site',
              cardType: 'summary_large_image',
            }}
          />
          <Component {...pageProps} />
        </BlogsProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
