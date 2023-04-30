// import './PostPage.css'
import { Box, Flex, Icon, Heading, Text, Button, Center } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import { FaComment, FaShare } from 'react-icons/fa'
import { BiUpvote, BiDownvote } from 'react-icons/bi'
import { SiRiotgames } from 'react-icons/si'
function Posts() {
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
      paddingRight='2vh'
      paddingTop='0.5vh'
      flexDirection='row'
      marginBottom='0vh'
    >
      <Box
        bg='white'
        color='black'
        w='5vh'
        h='auto'
        display='flex'
        justifyContent='flex-start'
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
        h='auto'
        display='flex'
        justifyContent='center'
        alignItems='left'
        paddingBottom='0vh'
        flexDirection='column'
      >
        <Text fontSize='2vh' marginLeft='2vh'>
          Is there a bright future for Apex without a strong competitive scene?
        </Text>
        <div
          style={{
            display: 'flex',
            height: '1.5vh',
            marginBottom: '0px',
            marginLeft: '2vh',
            paddingBottom: '0px',
            alignItems: 'center',
            // justifyContent: 'center',
          }}
        >
          <Icon as={SiRiotgames} color='red' fontSize='1.5vh' />
          <Text fontSize='1.5vh' marginLeft='1.5vh'>
            r/CompetitiveApex
          </Text>
          <Text fontSize='1.5vh' marginLeft='1.5vh'>
            Posted By Ganja Pappu
          </Text>
        </div>

        <Flex alignItems='center' mt='2vh'>
          <Icon as={FaComment} fontSize='2vh' color='blue' marginLeft='2vh' />
          <Text fontSize='2vh'>10 comments</Text>
          <Button
            bg='transparent'
            borderColor='transparent'
            display='flex'
            justifyContent='center'
            alignItems='center'
            h='5vh'
            w='fit-content'
            paddingLeft='0.5vh'
            marginLeft='1vh'
            _hover={{ backgroundColor: '#d1d1d1' }}
            style={{ transition: 'ound-color 0.3s, color 0.3s' }}
          >
            <Icon as={FaShare} fontSize='3vh' color='blue' />
            <Text fontSize='2vh'>Share</Text>
          </Button>
          <Button
            bg='transparent'
            borderColor='transparent'
            display='flex'
            justifyContent='center'
            alignItems='center'
            h='5vh'
            w='fit-content'
            paddingLeft='0.5vh'
            marginLeft='1vh'
            _hover={{ backgroundColor: '#d1d1d1' }}
            style={{ transition: 'ound-color 0.3s, color 0.3s' }}
          >
            <Icon as={EditIcon} fontSize='3vh' color='blue' />
            <Text fontSize='2vh'>Edit</Text>
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}

export default Posts
