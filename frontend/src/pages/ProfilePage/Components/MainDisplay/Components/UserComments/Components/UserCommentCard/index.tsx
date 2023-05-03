// import './PostPage.css'
import { Box, Flex, Icon, Heading, Text, Button, Center } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import { FaComment, FaShare } from 'react-icons/fa'
import { BiUpvote, BiDownvote } from 'react-icons/bi'
import { SiRiotgames } from 'react-icons/si'

interface UserCommentCardProps {
  commentActual: {
    commentID: number
    commentBody: string
    commentUpvotes: number
    commentAuthor: string
    commentDate: string
    commentCommunity: string
    postId: number
    postTitle: string
  }
}

function UserCommentCard({ commentActual }: UserCommentCardProps) {
  return (
    <div>
      <Box
        bg='white'
        color='black'
        h='auto'
        w='auto'
        //   position='relative'
        //   top='0%'
        //   left='-10%'
        display='flex'
        justifyContent='flex-start'
        alignItems='left'
        paddingBottom='0vh'
        paddingRight='2vh'
        paddingTop='0.5vh'
        flexDirection='row'
        marginBottom='0.5vh'
        // borderBottom='0.25vh solid gray'
        borderTop='0.25vh solid gray'
        borderLeft='0.25vh solid gray'
        borderRight='0.25vh solid gray'
      >
        <Box
          bg='white'
          color='black'
          w='100%'
          h='auto'
          display='flex'
          justifyContent='center'
          alignItems='left'
          paddingBottom='0vh'
          flexDirection='column'
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '4vh',
              width: '100%',
              flexDirection: 'row',
              borderBottom: '0.1vh solid gray',
            }}
          >
            <Text fontSize='1.5vh' marginLeft='1.5vh' color='blue'>
              {commentActual.commentAuthor}
            </Text>

            <Text fontSize='1.5vh' marginLeft='0.5vh'>
              {' '}
              commented in
            </Text>
            <Text fontSize='2.5vh' marginLeft='1vh'>
              {commentActual.postTitle}
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
              <Text fontSize='1.5vh' marginLeft='0.5vh'>
                {' '}
                in{' '}
              </Text>
              <Icon as={SiRiotgames} color='red' fontSize='1.5vh' marginLeft='1vh' />
              <Text fontSize='1.5vh' marginLeft='1vh'>
                {commentActual.commentCommunity}
              </Text>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              height: 'auto',
              marginBottom: '0px',
              marginLeft: '2vh',
              paddingBottom: '0px',
              alignItems: 'center',
              // justifyContent: 'center',
            }}
          >
            {/* <Icon as={SiRiotgames} color='red' fontSize='1.5vh' />
            <Text fontSize='1.5vh' marginLeft='1.5vh'>
              {commentActual.commentCommunity}
            </Text>
            <Text fontSize='1.5vh' marginLeft='1.5vh'>
              Posted By {commentActual.commentAuthor}
            </Text> */}
            <Text
              fontSize='1.8vh'
              marginLeft='1.5vh'
              textOverflow='ellipsis'
              //   whiteSpace='nowrap'
              overflow='hidden'
              style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}
              maxWidth='100%'
            >
              {commentActual.commentBody}
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
    </div>
  )
}

export default UserCommentCard
