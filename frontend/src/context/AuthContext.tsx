import Cookies from 'js-cookie'
import React, { createContext, useContext, useEffect, useState } from 'react'

interface User {
  email: string
  token: string
  profileImage: string
}

interface AuthContextProps {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
  setData: () => void
}

interface AuthProviderProp {
  children: React.ReactNode
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {
    console.log('hehe')
  },
  setData: () => {
    console.log('hehe')
  },
})

export const useAuth = () => useContext(AuthContext)

const AuthProvider: React.FC<AuthProviderProp> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const email = Cookies.get('email')
    const authToken = Cookies.get('authToken')
    const profileImage = Cookies.get('profileImage')
    if (authToken && email) {
      setUser({
        email,
        token: authToken,
        profileImage: profileImage ? profileImage : '',
      })

    }
  }, [])

  const setData = () => {
    if (user?.token !== undefined) {
      console.log(user.profileImage)
      Cookies.set('email', user?.email)
      Cookies.set('authToken', user?.token)
      Cookies.set('profileImage', user?.profileImage)
    }
  }

  return <AuthContext.Provider value={{ user, setUser, setData }}>{children}</AuthContext.Provider>
}

export default AuthProvider
