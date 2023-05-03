// import './PostPage.css'
import { Box, Flex, Icon, Heading, Text, Button, Center } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import { FaComment, FaShare } from 'react-icons/fa'
import { BiUpvote, BiDownvote } from 'react-icons/bi'
import { SiRiotgames } from 'react-icons/si'
import UserPostCard from './Components/UserPostCard'
function UserPosts() {
  const postList = [
    {
      postId: 1,
      postTitle: 'Is there a bright future for Apex without a strong competitive scene?',
      postUpvotes: 10,
      postAuthor: 'John Doe',
      postComments: 5,
      postCommunity: 'React',
    },
    {
      postId: 2,
      postTitle: 'Second post',
      postUpvotes: 20,
      postAuthor: 'Jane Smith',
      postComments: 3,
      postCommunity: 'Vue',
    },
    {
      postId: 3,
      postTitle: 'Third post',
      postUpvotes: 5,
      postAuthor: 'Bob Johnson',
      postComments: 8,
      postCommunity: 'Angular',
    },
    {
      postId: 4,
      postTitle: 'Fourth post',
      postUpvotes: 15,
      postAuthor: 'Alice Williams',
      postComments: 2,
      postCommunity: 'Ember',
    },
    {
      postId: 5,
      postTitle: 'Fifth post',
      postUpvotes: 8,
      postAuthor: 'David Lee',
      postComments: 6,
      postCommunity: 'Backbone',
    },
    {
      postId: 5,
      postTitle: 'Fifth post',
      postUpvotes: 8,
      postAuthor: 'David Lee',
      postComments: 6,
      postCommunity: 'Backbone',
    },
    {
      postId: 5,
      postTitle: 'Fifth post',
      postUpvotes: 8,
      postAuthor: 'David Lee',
      postComments: 6,
      postCommunity: 'Backbone',
    },
    {
      postId: 5,
      postTitle: 'Fifth post',
      postUpvotes: 8,
      postAuthor: 'David Lee',
      postComments: 6,
      postCommunity: 'Backbone',
    },
    {
      postId: 5,
      postTitle: 'Fifth post',
      postUpvotes: 8,
      postAuthor: 'David Lee',
      postComments: 6,
      postCommunity: 'Backbone',
    },
    {
      postId: 5,
      postTitle: 'Fifth post',
      postUpvotes: 8,
      postAuthor: 'David Lee',
      postComments: 6,
      postCommunity: 'Backbone',
    },
  ]

  return (
    <div>
      {postList.map((post) => (
        <UserPostCard key={post.postId} postActual={post} />
      ))}
    </div>
  )
}

export default UserPosts
