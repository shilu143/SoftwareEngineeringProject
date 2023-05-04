import Cookies from 'js-cookie'
import React, { createContext, useContext, useState } from 'react'

interface User {
  email: string
  token: string
}
interface AuthContextProps {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
  profileImage: string
}

interface AuthProviderProp {
  children: React.ReactNode
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {
    console.log('hehe')
  },
  profileImage: '',
})

export const useAuth = () => useContext(AuthContext)

const AuthProvider: React.FC<AuthProviderProp> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [profileImage, setProfileImage] = useState('')
  return (
    <AuthContext.Provider value={{ user, setUser, profileImage }}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
