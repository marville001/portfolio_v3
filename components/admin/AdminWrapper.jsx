import Head from 'next/head'
import { useProgressStore } from '../../store'
import { Progress } from '../progress'

const AdminWrapper = ({ children }) => {
  const isAnimating = useProgressStore((state) => state.isAnimating)
  return (
    <div>
      <Head>
        <title>Martin - Software Developer - REACT,NEXT,NODE...</title>
        <meta
          content="I've been developing websites for more than 2 years straight. Get in touch with me to know more."
          name="description"
        />
        <link rel="icon" href="/assets/my-logo.ico" type="image/icon type" />
      </Head>

      <main className="min-h-screen bg-white dark:bg-dark">
        <Progress isAnimating={isAnimating} />
        <div className="">{children}</div>
      </main>
    </div>
  )
}

export default AdminWrapper
