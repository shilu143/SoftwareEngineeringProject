import { useState, useEffect } from 'react'
import axios from 'axios'

interface Community {
  comid: number
  comName: string
  category: string[]
  communityProfileImage: string
  timeCreated: string
}

const useFetchCommunities = (userToken: string) => {
  const [communities, setCommunities] = useState<Community[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchCommunities = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get('/fetchCommunities', {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        setCommunities(response.data)
      } catch (err) {
        setError('Error fetching user communities')
      }
      setIsLoading(false)
    }

    fetchCommunities()
  }, [])
  return { communities, isLoading, error }
}

export default useFetchCommunities
