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
        paddingBottom='0rem'
        paddingRight='1rem'
        paddingTop='0.25rem'
        flexDirection='row'
        marginBottom='0.25rem'
        // borderBottom='0.25vh solid gray'
        borderTop='0.125rem solid gray'
        borderLeft='0.125rem solid gray'
        borderRight='0.125rem solid gray'
      >
        <Box
          bg='white'
          color='black'
          w='100%'
          h='auto'
          display='flex'
          justifyContent='center'
          alignItems='left'
          paddingBottom='0rem'
          flexDirection='column'
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '2rem',
              width: '100%',
              flexDirection: 'row',
              borderBottom: '0.05rem solid gray',
            }}
          >
            <Text fontSize='0.75rem' marginLeft='0.75rem' color='blue'>
              {commentActual.commentAuthor}
            </Text>

            <Text fontSize='0.75rem' marginLeft='0.25rem'>
              {' '}
              commented in
            </Text>
            <Text fontSize='2.5vh' marginLeft='0.5rem'>
              {commentActual.postTitle}
            </Text>
            <div
              style={{
                display: 'flex',
                height: '0.75rem',
                marginBottom: '0px',
                marginLeft: '1rem',
                paddingBottom: '0px',
                alignItems: 'center',
                // justifyContent: 'center',
              }}
            >
              <Text fontSize='0.75rem' marginLeft='0.25rem'>
                {' '}
                in{' '}
              </Text>
              <Icon as={SiRiotgames} color='red' fontSize='0.75rem' marginLeft='0.5rem' />
              <Text fontSize='0.75rem' marginLeft='0.5rem'>
                {commentActual.commentCommunity}
              </Text>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              height: 'auto',
              marginBottom: '0px',
              marginLeft: '1rem',
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
              fontSize='0.9rem'
              marginLeft='0.75rem'
              textOverflow='ellipsis'
              //   whiteSpace='nowrap'
              overflow='hidden'
              style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}
              maxWidth='100%'
            >
              {commentActual.commentBody}
            </Text>
          </div>

          <Flex alignItems='center' mt='1rem'>
            <Icon as={FaComment} fontSize='1rem' color='blue' marginLeft='1rem' />
            <Text fontSize='1rem'>10 comments</Text>
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
              <Icon as={EditIcon} fontSize='1.5rem' color='blue' />
              <Text fontSize='1rem'>Edit</Text>
            </Button>
          </Flex>
        </Box>
      </Box>
    </div>
  )
}

export default UserCommentCard
