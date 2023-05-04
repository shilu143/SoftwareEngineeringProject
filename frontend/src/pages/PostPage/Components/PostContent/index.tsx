// import './PostPage.css'
import { Box, Flex, Icon, Image, Heading, Text, Button, Center } from '@chakra-ui/react'
import { FaComment, FaShare } from 'react-icons/fa'
import { BiUpvote, BiDownvote } from 'react-icons/bi'
import { SiRiotgames } from 'react-icons/si'

interface PostContentProps {
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

function PostContent({ actualPost }: PostContentProps) {
  if (!actualPost) {
    return <div>Loading...</div>
  }
  return (
    <Box
      bg='white'
      color='black'
      h='fit-content'
      w='50vw'
      maxWidth='50rem'
      //   position='relative'
      //   top='0%'
      //   left='-10%'
      display='flex'
      justifyContent='flex-start'
      alignItems='left'
      paddingBottom='0rem'
      paddingRight='1rem'
      paddingTop='0.25rem'
      flexDirection='row'
      marginBottom='0.5rem'
      // marginLeft='0.5vw'
    >
      <Box
        bg='white'
        color='black'
        w='2.5rem'
        h='fit-content'
        display='flex'
        justifyContent='flex-start'
        alignItems='center'
        paddingTop='1rem'
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
          <Icon as={BiUpvote} fontSize='1.5rem' color='blue' />
        </Button>
        <Text fontSize='1rem'>{actualPost.votes}</Text>
        <Button
          bg='transparent'
          borderColor='transparent'
          display='flex'
          justifyContent='center'
          alignItems='center'
          h='fit-content'
          w='fit-content'
        >
          <Icon as={BiDownvote} fontSize='1.5rem' color='blue' />
        </Button>
      </Box>
      <Box
        bg='white'
        color='black'
        w='auto'
        h='fit-content'
        display='flex'
        justifyContent='flex-start'
        alignItems='left'
        paddingBottom='0rem'
        flexDirection='column'
      >
        <div
          style={{
            display: 'flex',
            height: 'fit-content',
            marginBottom: '0px',
            paddingBottom: '0px',
            alignItems: 'center',
            // justifyContent: 'center',
          }}
        >
          <Text fontSize='0.75rem' marginLeft='0.75rem' color='blue'>
            {actualPost.creatorName}
          </Text>
          <Text fontSize='0.75rem' marginLeft='0.25rem'>
            posted in
          </Text>
          <Icon as={SiRiotgames} color='red' fontSize='0.75rem' marginLeft='0.75rem' />
          <Text fontSize='0.75rem' marginLeft='0.5rem'>
            {actualPost.comName}
          </Text>
        </div>
        <Text h='0.6rem' fontSize='1.75rem' marginLeft='0.75rem' marginTop='0rem'>
          {actualPost.posttitle}
        </Text>
        <div
          style={{
            width: 'auto',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            src={actualPost.postimage}
            // alt='Example image'
            w='100%'
            marginLeft='0.75rem'
            marginTop='2rem'
          />
        </div>
        <Text fontSize='1rem' marginLeft='0.75rem'>
          {actualPost.postbody}
        </Text>
        <Flex alignItems='center' mt='1rem'>
          <Icon as={FaComment} fontSize='1rem' color='blue' marginLeft='1rem' />
          <Text fontSize='1rem' marginLeft='0.25rem'>
            {actualPost.commentCount} comments
          </Text>
          <Button
            bg='transparent'
            borderColor='transparent'
            display='flex'
            justifyContent='center'
            alignItems='center'
            h='2.5rem'
            w='fit-content'
            paddingLeft='0.25rem'
            marginLeft='0.5rem'
            _hover={{ backgroundColor: '#d1d1d1' }}
            style={{ transition: 'ound-color 0.3s, color 0.3s' }}
          >
            <Icon as={FaShare} fontSize='1.5rem' color='blue' />
            <Text fontSize='1rem'>Share</Text>
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}

export default PostContent
