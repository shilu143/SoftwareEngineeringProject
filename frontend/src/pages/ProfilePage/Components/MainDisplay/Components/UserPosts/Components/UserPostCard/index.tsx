// import './PostPage.css'
import { Box, Flex, Icon, Heading, Text, Button, Center } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import { FaComment, FaShare } from 'react-icons/fa'
import { BiUpvote, BiDownvote } from 'react-icons/bi'
import { SiRiotgames } from 'react-icons/si'

interface UserPostCardProps {
  postActual: {
    postId: number
    postTitle: string
    postUpvotes: number
    postAuthor: string
    postComments: number
    postCommunity: string
  }
}

function UserPostCard({ postActual }: UserPostCardProps) {
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
          w='2.5rem'
          h='auto'
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
          <Text fontSize='1rem'>{postActual.postUpvotes}</Text>
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
          w='100%'
          h='auto'
          display='flex'
          justifyContent='center'
          alignItems='left'
          paddingBottom='0rem'
          flexDirection='column'
        >
          <Text fontSize='1.25rem' marginLeft='1rem'>
            {postActual.postTitle}
          </Text>
          <div
            style={{
              display: 'flex',
              height: '0rem',
              marginBottom: '0px',
              marginLeft: '1rem',
              paddingBottom: '0px',
              alignItems: 'center',
              // justifyContent: 'center',
            }}
          >
            <Icon as={SiRiotgames} color='red' fontSize='0.75rem' />
            <Text fontSize='0.75rem' marginLeft='0.5rem'>
              {postActual.postCommunity}
            </Text>
            <Text fontSize='0.75rem' marginLeft='0.75rem'>
              Posted By {postActual.postAuthor}
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
              marginLeft='1vh'
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

export default UserPostCard
