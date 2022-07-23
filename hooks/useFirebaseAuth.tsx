import {
  browserSessionPersistence,
  getAuth,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { useState, useEffect } from 'react'
import { app } from '../lib/firebaseConfig'
import firebaseParseError from '../lib/firebaseParseError'

export interface UserInterface {
  name: string
  email: string
  uid: string
  phoneNumber: string
  photoUrl: string
  emailVerified: boolean
  isAnonymous: boolean
}

export default function useFirebaseAuth() {
  const [user, setUser] = useState<UserInterface | null>(null)
  const [loading, setLoading] = useState(true)
  const [loadingLogin, setLoadingLogin] = useState<boolean>(false)
  const [loginError, setLoginError] = useState<string>('')

  const auth = getAuth(app)

  const loginUser = async (email: string, password: string) => {
    try {
      setLoadingLogin(true)
      setLoginError('')
      //   const data = await signInWithCustomToken(
      //     auth,
      //     'eyJhbGciOiJSUzI1NiIsImtpZCI6ImVhNWY2NDYxMjA4Y2ZmMGVlYzgwZDFkYmI1MjgyZTkyMDY0MjAyNWEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbXktcG9ydGZvbGlvLW1hcnZpbGxlMDAxIiwiYXVkIjoibXktcG9ydGZvbGlvLW1hcnZpbGxlMDAxIiwiYXV0aF90aW1lIjoxNjU4MTY5NjE3LCJ1c2VyX2lkIjoiTEdIaUZMMVNhbE9WejlZejdaVGxkUFVqNlRtMSIsInN1YiI6IkxHSGlGTDFTYWxPVno5WXo3WlRsZFBVajZUbTEiLCJpYXQiOjE2NTgxNjk2MTcsImV4cCI6MTY1ODE3MzIxNywiZW1haWwiOiJtd2FuZ2ltYXJ0aW4xOTA0QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJtd2FuZ2ltYXJ0aW4xOTA0QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Y2oen6JCgJh3Uhue-iZdxaBOdQFWVHARe8J6gwTShB7LePgzE42BzU5tdb0U1TCacmae8005wuu8C7ScFeHU0abWy3TrZNEroF-K04eb61CrhIFZfJD5S3_ECvwfFmRCHR_1lWO1ngjoDh3hECmJMETwLYuv_En2sa0-kBR66bivZGAeHQ8hDLjIzMkWDhEOhp3iFyuWX5Ht3o2tpRmRn4KV2GmxrNK_9DmUtrfeaDyVLSxSAv2_DR_F7fK4_4vXJFSniOO_weZQdjX_vvutApJTFOnPtoyxJYsNtdOiwaQysSNagj0jRXcBbt2tJHpxPzuDZuMX2ukU25zPUTQitA'
      //   )
      await setPersistence(auth, browserSessionPersistence).then(() =>
        signInWithEmailAndPassword(auth, email, password)
      )

      setLoadingLogin(false)
    } catch (error: any) {
      setLoadingLogin(false)
      setLoginError(firebaseParseError(error))
    }
  }

  const logoutUser = () => {
    try {
      signOut(auth)
    } catch (error) {}
  }

  // listen for Firebase state change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const user_: UserInterface = {
          email: user.email ?? '',
          name: user.displayName ?? '',
          uid: user.uid,
          phoneNumber: user.phoneNumber ?? '',
          photoUrl: user.photoURL ?? '',
          emailVerified: user.emailVerified,
          isAnonymous: user.isAnonymous,
        }

        setUser(user_)
        setLoading(false)
      } else {
        setLoading(false)
        setUser(null)
      }
    })
  }, [])

  return {
    user,
    loading,
    loadingLogin,
    loginError,
    loginUser,
    logoutUser,
  }
}
