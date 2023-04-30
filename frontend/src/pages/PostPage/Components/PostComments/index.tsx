// import './PostPage.css'
import { Box, Flex, Icon, Heading, Text, Button, Center } from '@chakra-ui/react'
import { FaComment, FaShare } from 'react-icons/fa'
import { BiUpvote, BiDownvote } from 'react-icons/bi'
import { SiRiotgames } from 'react-icons/si'
import { BsFillReplyFill } from 'react-icons/bs'

interface PostCommentsProps {
  comment: {
    commentId: number
    parentId: number | null
    body: string
    username: string
    votes: number
  }
  comments: {
    commentId: number
    parentId: number | null
    body: string
    username: string
    votes: number
  }[]
}

function PostComments({ comment, comments }: PostCommentsProps) {
  //   const children =
  return (
    <Box
      bg='white'
      color='black'
      h='auto'
      w='auto'
      //   position='relative'
      //   top='0%'
      //   left='-10%'
      display='flex'
      //   justifyContent='center'
      alignItems='left'
      paddingBottom='0vh'
      //   paddingRight='2vh'
      paddingLeft='2vh'
      //   paddingTop='0.5vh'
      flexDirection='column'
    >
      <>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            // borderLeft: '0.1vh solid black',
            // justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              height: '4vh',
              // justifyContent: 'center',
            }}
          >
            <Icon as={SiRiotgames} marginLeft='2vh' color='red' fontSize='2vh' />
            <Text
              fontSize='1.5vh'
              marginLeft='2vh'
              fontWeight='normal'
              marginBottom='0vh'
              marginTop='0vh'
            >
              {comment.username}
            </Text>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            // borderLeft: '0.1vh solid black',
            // justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              borderLeft: '0.1vh solid black',
              marginLeft: '3vh',
              // justifyContent: 'center',
            }}
          >
            <Text
              fontSize='2vh'
              marginLeft='4vh'
              fontWeight='bold'
              marginBottom='1vh'
              marginTop='0.5vh'
            >
              {comment.body}
            </Text>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: '2vh',
                // justifyContent: 'center',
              }}
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
                <Icon as={BiUpvote} fontSize='2vh' color='gray' />
              </Button>
              <Text fontSize='2vh'>{comment.votes}</Text>
              <Button
                bg='transparent'
                borderColor='transparent'
                display='flex'
                justifyContent='center'
                alignItems='center'
                h='fit-content'
                w='fit-content'
              >
                <Icon as={BiDownvote} fontSize='2vh' color='gray' />
              </Button>
              <Button
                bg='transparent'
                borderColor='transparent'
                display='flex'
                justifyContent='center'
                alignItems='center'
                h='5.5vh'
                w='fit-content'
                _hover={{ backgroundColor: '#d1d1d1' }}
                style={{ transition: 'ound-color 0.3s, color 0.3s' }}
              >
                <Icon as={BsFillReplyFill} fontSize='2vh' color='gray' />
                <Text fontSize='2vh' marginLeft='1vh'>
                  Reply
                </Text>
              </Button>
            </div>

            {comments
              .filter((c) => c.parentId === comment.commentId)
              .map((child) => (
                <PostComments key={child.commentId} comment={child} comments={comments} />
              ))}
          </div>
        </div>
      </>
    </Box>
  )
}

export default PostComments
