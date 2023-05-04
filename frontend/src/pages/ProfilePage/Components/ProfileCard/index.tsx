// import './PostPage.css'
// import './PostPage.css'
import { useEffect, useRef, useState } from 'react'
import { Box, Flex, Icon, Heading, Text, Button, Center, Image, IconButton } from '@chakra-ui/react'

import { FaComment, FaShare } from 'react-icons/fa'
import { BiUpvote, BiDownvote } from 'react-icons/bi'
import { SiRiotgames } from 'react-icons/si'
import axios from 'axios'

function ProfileCard() {
  interface UserDetails {
    id: number
    email: string
    name: string
    gender: string
    age: number
    password: string
    profileimage: string
  }
  const divRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const [actualUserDetails, setActualUserDetails] = useState<UserDetails>()

  useEffect(() => {
    axios
      .get('http://localhost:5000/fetchDetailsOfAUser?userId=1')
      .then((response) => {
        setActualUserDetails(response.data)
        // console.log(response.data[0])
        // console.log
        // setCommentRows(response.data[0].commentRows)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <Box
      bg='white'
      color='black'
      w='25vw'
      maxWidth='50rem'
      h='40rem'
      display='flex'
      justifyContent='center'
      alignItems='center'
      paddingBottom='2.5rem'
      flexDirection='column'
      marginLeft='1.25rem'
      marginTop='10rem'
      border='0.25rem solid red'
    >
      <div>
        <Box w='10rem' h='10rem' borderRadius='50%' overflow='hidden' position='relative'>
          <Image
            src={actualUserDetails?.profileimage}
            alt='Example image'
            borderRadius='full'
            boxSize='10rem'
            objectFit='cover'
            // _hover={{ filter: 'blur(8px)' }}
          />
          <Box
            position='absolute'
            top='50%'
            left='50%'
            transform='translate(-50%, -50%)'
            w='100%'
            h='100%'
            display='flex'
            justifyContent='center'
            alignItems='center'
            textAlign='center'
            fontWeight='bold'
            fontSize='2xl'
            color='white'
            bg='rgba(0,0,0,0.5)'
            opacity='0'
            transition='opacity 0.3s'
            _hover={{ opacity: 1 }}
          >
            Edit Image
          </Box>
        </Box>

        <Text fontSize='1rem' marginLeft='' fontWeight='bold' textAlign='center'>
          {actualUserDetails?.name}
        </Text>
      </div>
    </Box>
  )
}

export default ProfileCard
