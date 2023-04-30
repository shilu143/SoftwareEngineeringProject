// import './PostPage.css'
// import './PostPage.css'
import { useEffect, useRef, useState } from 'react'
import { Box, Flex, Icon, Heading, Text, Button, Center, Image, IconButton } from '@chakra-ui/react'

import { FaComment, FaShare } from 'react-icons/fa'
import { BiUpvote, BiDownvote } from 'react-icons/bi'
import { SiRiotgames } from 'react-icons/si'

function ProfileCard() {
  const divRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Box
      bg='white'
      color='black'
      w='50vh'
      h='50vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      paddingBottom='5vh'
      flexDirection='column'
      marginLeft='2.5vh'
      marginTop='20vh'
      border='0.5vh solid red'
    >
      <div>
        <Box w='20vh' h='20vh' borderRadius='50%' overflow='hidden' position='relative'>
          <Image
            src='/assets/images/fububi.png'
            alt='Example image'
            borderRadius='full'
            boxSize='20vh'
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

        <Text fontSize='2vh' marginLeft='' fontWeight='bold' textAlign='center'>
          Sacchi Saheli
        </Text>
      </div>
    </Box>
  )
}

export default ProfileCard
