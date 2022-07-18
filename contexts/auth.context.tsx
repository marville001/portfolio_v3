import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { createContext, ReactChildren, useContext, useState } from 'react'
import { app } from '../lib/firebaseConfig'

export interface UserInterface {
  name: string
  email: string
  id: string
}

interface AuthContextInterface {
  user: UserInterface | {}
  loginUser: (email: string, pass: string) => void
  logoutUser: () => void
}

const authContextDefaults: AuthContextInterface = {
  user: {},
  loginUser: (email: string, pass: string) => {},
  logoutUser: () => {},
}

const AuthContext = createContext<AuthContextInterface>(authContextDefaults)

const AuthProvider = ({ children }: { children: ReactChildren }) => {
  const [user, setUser] = useState<UserInterface | {}>({})

  const auth = getAuth(app)
  onAuthStateChanged(auth, (user) => {
    console.log(user)
  })

  const loginUser = (email: string, password: string) => {
    console.log(email, password)
	}
	
  const logoutUser = () => {
    console.log('Logout')
  }

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}{' '}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
export default AuthProvider
