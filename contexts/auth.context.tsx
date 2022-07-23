import { createContext, ReactChildren, useContext } from 'react'

import useFirebaseAuth, { UserInterface } from '../hooks/useFirebaseAuth'

interface AuthContextInterface {
  user: UserInterface | null
  loginUser: (email: string, pass: string) => void
  logoutUser: () => void
  loadingLogin: boolean
  loading: boolean
  loginError: string
}

const authContextDefaults: AuthContextInterface = {
  user: null,
  loginUser: (email: string, pass: string) => {},
  logoutUser: () => {},
  loadingLogin: false,
  loading: true,
  loginError: '',
}

const AuthContext = createContext<AuthContextInterface>(authContextDefaults)

const AuthProvider = ({ children }: { children: ReactChildren }) => {
  const { user, loading, loadingLogin, loginError, loginUser, logoutUser } =
    useFirebaseAuth()

  return (
    <AuthContext.Provider
      value={{ user, loginUser, logoutUser, loading, loadingLogin, loginError }}
    >
      {children}{' '}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
export default AuthProvider
