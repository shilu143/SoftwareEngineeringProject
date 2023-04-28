// import './PostPage.css'
import { Box, Flex, Icon, Heading, Text, Button, Center } from '@chakra-ui/react'
import { FaComment, FaShare } from 'react-icons/fa'
import { BiUpvote, BiDownvote } from 'react-icons/bi'
import { SiRiotgames } from 'react-icons/si'

function PostContent() {
  return (
    <Box
      bg='white'
      color='black'
      h='auto'
      w='100vh'
    //   position='relative'
    //   top='0%'
    //   left='-10%'
      display='flex'
      justifyContent='center'
      alignItems='left'
      paddingBottom='0vh'
      flexDirection='row'
    >
      <Box
        bg='white'
        color='black'
        w='5vh'
        h='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
        paddingTop='2vh'
        flexDirection='column'
      >
        <Button
          bg='transparent'
          borderColor='transparent'
          display='flex'
          justifyContent='center'
          alignItems='center'
          h='fit-content'
          w='fit-content'
        >
          <Icon as={BiUpvote} fontSize='3vh' color='blue' />
        </Button>
        <Text fontSize='2vh'>69</Text>
        <Button
          bg='transparent'
          borderColor='transparent'
          display='flex'
          justifyContent='center'
          alignItems='center'
          h='fit-content'
          w='fit-content'
        >
          <Icon as={BiDownvote} fontSize='3vh' color='blue' />
        </Button>
      </Box>
      <Box
        bg='white'
        color='black'
        w='95vh'
        h='100%'
        display='flex'
        justifyContent='center'
        alignItems='left'
        paddingBottom='5vh'
        flexDirection='column'
      >
        <div
          style={{
            display: 'flex',
            height: '1.5vh',
            marginBottom: '0px',
            paddingBottom: '0px',
            alignItems: 'center',
            // justifyContent: 'center',
          }}
        >
          <Icon as={SiRiotgames} color='red' fontSize='1.5vh' />
          <Text fontSize='1.5vh' marginLeft='1.5vh'>
            r/CompetitiveApex
          </Text>
        </div>
        <Heading fontSize='4vh' marginLeft='1.5vh' marginTop='2vh'>
          Is there a bright future for Apex without a strong competitive scene?
        </Heading>
        <Text fontSize='2vh' marginLeft='1.5vh'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
        <Flex alignItems='center' mt='2vh'>
          <Icon as={FaComment} fontSize='2vh' color='blue' marginLeft='2vh' />
          <Text fontSize='2vh'>10 comments</Text>
          <Button
            bg='transparent'
            borderColor='transparent'
            display='flex'
            justifyContent='center'
            alignItems='center'
            h='fit-content'
            w='fit-content'
            _hover={{ backgroundColor: 'red' }}
            style={{ transition: 'ound-color 0.3s, color 0.3s' }}
          >
            <Icon as={FaShare} fontSize='3vh' color='blue' marginLeft='2vh' marginRight='0.1vh' />
            <Text fontSize='2vh'>Shadre</Text>
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}

export default PostContent
