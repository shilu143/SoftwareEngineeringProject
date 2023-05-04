import { Avatar, Box, Flex, Input, Text, VStack } from '@chakra-ui/react'
import { useRef, useState, useEffect, useContext } from 'react'
// import data from './MOCK_DATA.json'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'

interface communityData {
  comid: number
  comname: string
  communityprofileimage: string
}

export default function Search(): JSX.Element {
  const [data, setData] = useState([])
  const [value, setValue] = useState('')
  const [searchResults, setSearchResults] = useState<communityData[]>([])
  const suggestionRef = useRef<HTMLDivElement>(null)
  const { user } = useContext(AuthContext)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target as Node)) {
        setSearchResults([])
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [suggestionRef])

  useEffect(() => {
    const func = async () => {
      const headers = { Authorization: `Bearer ${user?.token}` }
      const response = await axios.get('/fetchAllCommunities', { headers })
      console.log(response.data)
      setData(response.data)
    }
    func()
  }, [value])

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    setSearchResults(
      data.filter((item: communityData) =>
        item.comname.toLowerCase().includes(event.target.value.toLowerCase()),
      ),
    )
  }

  const handleOnClick = (searchTerm: string) => {
    setValue(searchTerm)
    setSearchResults([])
    console.log(searchTerm)
  }

  return (
    <Box className='App' p='4'>
      <VStack align='stretch'>
        <Box position='relative'>
          <Input type='text' placeholder='Search' value={value} onChange={handleOnChange} mb='2' />
          {searchResults.length > 0 && (
            <Box
              ref={suggestionRef}
              bg='white'
              position='absolute'
              top='100%'
              w='100%'
              zIndex='10'
              boxShadow='md'
              borderRadius='md'
            >
              {searchResults.slice(0, 10).map((item: communityData) => (
                <Box
                  key={item.comid}
                  p='2'
                  cursor='pointer'
                  _hover={{ bg: 'gray.100' }}
                  color={'black'}
                  onClick={() => handleOnClick(item.comname)}
                >
                  <Flex align={'center'}>
                    <Avatar name='Community' size={'sm'} src={item.communityprofileimage} mr={3} />
                    <Text>{item.comname.toUpperCase()}</Text>
                  </Flex>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </VStack>
    </Box>
  )
}
