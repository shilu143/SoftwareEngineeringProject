// import './PostPage.css'
import { Box, Flex, Icon, Heading, Text, Button, Center } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import { FaComment, FaShare } from 'react-icons/fa'
import { BiUpvote, BiDownvote } from 'react-icons/bi'
import { SiRiotgames } from 'react-icons/si'
import UserPostCard from './Components/UserPostCard'

interface Comment {
  commentid: number
  createdbywhom: number
  parentcomment: number
  writtentext: string
  timecreated: Date
  votes: number
  postid: number
}

interface actualPost {
  postid: number
  comid: number
  comName: string
  posttitle: string
  createdbywhom: number
  creatorName: string
  timecreated: Date
  votes: number
  postimage: string
  postbody: string
  commentCount: string
  commentRows: Comment[]
}
interface UserPostsProps {
  posts: actualPost[]
}

function UserPosts({ posts }: UserPostsProps) {
  return (
    <div>
      {posts.map((post) => (
        <UserPostCard key={post.postid} postActual={post} />
      ))}
    </div>
  )
}

export default UserPosts
