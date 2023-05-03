import axios from 'axios'
import React, { useState, useEffect } from 'react'

export const AuthContext = React.createContext<string>('')

export function useAuth(): string {
  const [userToken, setUserToken] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const body = { email: 'shilutudu123@gmail.com', password: 'root' }
        const response = await axios.post('/loginCheck', body)
        setUserToken(response.data.auth)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return userToken
}
