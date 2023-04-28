// import './PostPage.css'
import { Box, Flex, Icon, Heading, Text, Button, Center } from '@chakra-ui/react'
import { FaComment, FaShare } from 'react-icons/fa'
import { BiUpvote, BiDownvote } from 'react-icons/bi'
import { SiRiotgames } from 'react-icons/si'

function PostCommunityCard() {
  return (
    <Box
      bg='white'
      color='black'
      w='50vh'
      h='auto'
      display='flex'
      justifyContent='center'
      alignItems='left'
      paddingBottom='5vh'
      flexDirection='column'
      marginLeft='10vh'
      border='0.5vh solid red'
    >
      <div
        style={{
          display: 'flex',
          height: '6vh',
          marginBottom: '0px',
          paddingBottom: '0px',
          alignItems: 'center',
          // justifyContent: 'center',
        }}
      >
        <Icon as={SiRiotgames} color='red' fontSize='4vh' />
        <Text fontSize='3vh' marginLeft='1.5vh' fontWeight='bold'>
          r/CompetitiveApex
        </Text>
      </div>
      <Text fontSize='2vh' marginLeft='1.5vh' fontWeight='light'>
        Welcome to the competitive part of the Outlands, Legends. Community for discussion of the
        competitive scene & play of the free-to-play battle royale game Apex Legends from Respawn
        Entertainment.
      </Text>
      <div
        style={{
          display: 'flex',
          height: '6vh',
          marginBottom: '0px',
          paddingBottom: '0px',
          alignItems: 'center',
          // justifyContent: 'center',
        }}
      >
        {/* <Icon as={SiRiotgames} color='red' fontSize='4vh' /> */}
        <Text
          fontSize='2vh'
          h='3vh'
          marginLeft='1.5vh'
          w='100%'
          fontWeight='light'
          color='gray'
          marginRight='2vh'
          borderBottom='0.25vh solid gray'
        >
          Established Aug 2, 2002
        </Text>
      </div>
      <div
        style={{
          display: 'flex',
          height: '6vh',
          marginBottom: '0px',
          paddingBottom: '0px',
          alignItems: 'center',
          // justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '6vh',
            marginBottom: '0px',
            paddingBottom: '0px',
            alignItems: 'center',
            flexDirection: 'column',
            // justifyContent: 'center',
          }}
        >
          {/* <Icon as={SiRiotgames} color='red' fontSize='4vh' /> */}
          <Text
            fontSize='3vh'
            h='3vh'
            marginLeft='1.5vh'
            w='100%'
            fontWeight='light'
            //   color='gray'
            marginRight='2vh'
            //   borderBottom='0.25vh solid gray'
          >
            694.20
          </Text>
          <Text
            fontSize='2vh'
            h='3vh'
            marginLeft='1.5vh'
            w='100%'
            fontWeight='light'
            color='gray'
            marginRight='2vh'
            borderBottom='0.25vh solid gray'
          >
            Members
          </Text>
        </div>
      </div>
    </Box>
  )
}

export default PostCommunityCard
