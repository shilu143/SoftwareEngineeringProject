import './PostPage.css'
import { Box } from '@chakra-ui/react'
import PostContent from './Components/PostContent'
import PostCommunityCard from './Components/PostCommunityCard'

function PostPage() {
  return (
    <Box
      bg='black'
      color='white'
      h='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <PostContent />
      <PostCommunityCard />
    </Box>
  )
}

export default PostPage
