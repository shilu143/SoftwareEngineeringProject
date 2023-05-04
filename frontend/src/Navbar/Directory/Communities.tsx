import { Icon } from '@chakra-ui/icon'
import { AddIcon } from '@chakra-ui/icons'
import { Flex } from '@chakra-ui/layout'
import { MenuItem } from '@chakra-ui/menu'
import { Box, Text } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import CreateCommunityModal from '../../Modal/CreateCommunityModal'
import MenuListItems from './MenuListItems'
// import { AuthContext } from '../../hooks/useAuth'
import axios from 'axios'
import Cookies from 'js-cookie'
import { AuthContext } from '../../context/AuthContext'

interface Community {
  comid: number
  comname: string
  category: string[]
  communityprofileimage: string
  timeCreated: string
}

const Communities: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [communities, setCommunities] = useState<Community[]>([])
  const { user, setUser } = useContext(AuthContext)
  // const [userToken]
  // const userToken = useContext(AuthContext)
  const [userToken, setUserToken] = useState<string | null>(null)

  useEffect(() => {
    const token = Cookies.get('authToken')
    setUserToken(token ? token : '')
  }, [user])

  useEffect(() => {
    handleChange()
  }, [userToken])

  const handleChange = async () => {
    const headers = { Authorization: `Bearer ${userToken}` }
    const response = await axios.get('/fetchCommunities', { headers })
    setCommunities(response.data)
  }

  // handleChange()

  return (
    <div>
      <CreateCommunityModal open={open} handleClose={() => setOpen(false)} />
      <Box mt={3} mb={4} css={{ overflowY: 'auto', maxHeight: '150px' }}>
        <Text pl={3} mb={1} fontSize={'7pt'} fontWeight={500} color={'gray.500'}>
          MODERATING
        </Text>
        {Array.isArray(communities) && communities.length > 0 ? (
          <div>
            {communities.map((com) => (
              <MenuListItems
                key={com.comid}
                displayText={com.comname.toUpperCase()}
                imageURL={com.communityprofileimage}
                iconColor='cyan.500'
              />
            ))}
          </div>
        ) : (
          <p>No communities found.</p>
        )}
      </Box>
      <Box mt={3} mb={4}>
        <Text pl={3} mb={1} fontSize={'7pt'} fontWeight={500} color={'gray.500'}>
          MY COMMUNITIES
        </Text>

        <MenuItem
          bg={'black'}
          color={'white'}
          width={'100%'}
          fontSize={'10pt'}
          onClick={() => setOpen(true)}
        >
          <Flex align={'center'}>
            <Icon as={AddIcon} color='white' mr={2} fontSize={12} />
            <Flex>Create Community</Flex>
          </Flex>
        </MenuItem>
        {['community1', 'community2', 'community3'].map((com, index) => (
          <MenuListItems key={index} displayText={com} iconColor='blue.500' />
        ))}
      </Box>
    </div>
  )
}

export default Communities
