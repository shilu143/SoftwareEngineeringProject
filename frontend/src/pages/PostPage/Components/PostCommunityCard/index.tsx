// import './PostPage.css'
import { useEffect, useRef } from 'react'
import { Box, Flex, Icon, Heading, Text, Button, Center } from '@chakra-ui/react'
import { FaComment, FaShare } from 'react-icons/fa'
import { BiUpvote, BiDownvote } from 'react-icons/bi'
import { SiRiotgames } from 'react-icons/si'
interface PostCommunityCardProps {
  actualPost: {
    postid: number
    comid: number
    comName: string
    posttitle: string
    postbody: string
    createdbywhom: number
    creatorName: string
    timecreated: Date
    votes: number
    postimage: string
    commentCount: string
    commentRows: Comment[]
  }
}
interface Comment {
  commentid: number
  createdbywhom: number
  parentcomment: number
  writtentext: string
  timecreated: Date
  votes: number
  postid: number
}
function PostCommunityCard({ actualPost }: PostCommunityCardProps) {
  const divRef = useRef(null)

  return (
    <Box
      bg='white'
      color='black'
      w='25rem'
      h='fit-content'
      display='flex'
      justifyContent='center'
      alignItems='left'
      paddingBottom='2.5rem'
      flexDirection='column'
      marginLeft='3rem'
      border='0.25rem solid red'
    >
      <div
        style={{
          display: 'flex',
          backgroundColor: 'red',
          height: '2.5rem',
          marginBottom: '0px',
          paddingBottom: '0px',
          alignItems: 'center',
          color: 'white',
          // justifyContent: 'center',
        }}
      >
        <Text fontSize='1rem' marginLeft='1rem' fontWeight='bold'>
          About Community
        </Text>
      </div>
      <div
        style={{
          display: 'flex',
          height: '3rem',
          marginBottom: '0px',
          paddingBottom: '0px',
          alignItems: 'center',
          // justifyContent: 'center',
        }}
      >
        <Icon as={SiRiotgames} marginLeft='0.8rem' color='red' fontSize='2rem' />
        <Text fontSize='1.5rem' marginLeft='0.8rem' fontWeight='bold'>
          {actualPost.comName}
        </Text>
      </div>
      <Text fontSize='1rem' marginLeft='0.8rem' fontWeight='light'>
        Welcome to the competitive part of the Outlands, Legends. Community for discussion of the
        competitive scene & play of the free-to-play battle royale game Apex Legends from Respawn
        Entertainment.
      </Text>
      <div
        style={{
          display: 'flex',
          height: '3rem',
          marginBottom: '0px',
          paddingBottom: '0px',
          alignItems: 'center',
          // justifyContent: 'center',
        }}
      >
        {/* <Icon as={SiRiotgames} color='red' fontSize='4vh' /> */}
        <Text
          fontSize='1rem'
          h='1.5rem'
          marginLeft='0.8rem'
          w='100%'
          fontWeight='light'
          color='gray'
          marginRight='1rem'
          borderBottom='0.125rem solid gray'
        >
          Established Aug 2, 2002
        </Text>
      </div>
      <div
        style={{
          display: 'flex',
          height: 'auto',
          marginBottom: '0px',
          paddingBottom: '0px',
          alignItems: 'center',
          // justifyContent: 'center',
        }}
      >
        <div
          ref={divRef}
          style={{
            display: 'flex',
            height: 'auto',
            width: '100%',
            marginBottom: '0px',
            marginTop: '0.5rem',
            marginLeft: '0.8rem',
            marginRight: '1rem',
            paddingBottom: '0px',
            // alignItems: 'center',
            flexDirection: 'column',
            // justifyContent: 'space-between',
          }}
        >
          <Text
            fontSize='1.25rem'
            h='1rem'
            // flex={1}
            w='100%'
            fontWeight='light'
            //   color='gray'
            marginRight='1rem'
            marginTop='0.5rem'
            marginBottom='0rem'
            //   borderBottom='0.25vh solid gray'
          >
            95.1k
          </Text>
          <Text
            fontSize='1rem'
            // flex={1}
            h='1rem'
            marginTop='0.5rem'
            paddingBottom='1.75rem'
            w='100%'
            fontWeight='light'
            color='gray'
            borderBottom='0.05rem solid gray'
          >
            Members
          </Text>
        </div>
      </div>
    </Box>
  )
}

export default PostCommunityCard
