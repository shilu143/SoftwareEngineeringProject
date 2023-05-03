// import './PostPage.css'
import { Box, Flex, Icon, Heading, Text, Button, Center } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import { FaComment, FaShare } from 'react-icons/fa'
import { BiUpvote, BiDownvote } from 'react-icons/bi'
import { SiRiotgames } from 'react-icons/si'
import UserCommentCard from './Components/UserCommentCard'

function UserComments() {
  const commentList = [
    {
      commentID: 1,
      commentBody:
        'This is the first comment.This is the first comment.This is the first comment.This is the first comment.This is the first comment.This is the first comment.This is the first comment.This is the first comment.This is the first comment.This is the first comment.This is the first comment.This is the first comment.This is the first comment.This is the first comment.This is the first comment.This is the first comment.This is the first comment.This is the first comment.This is the first comment.This is the first comment.This is the first comment.',
      commentUpvotes: 5,
      commentAuthor: 'John Doe',
      commentDate: '2023-05-03',
      commentCommunity: 'React',
      postId: 1,
      postTitle: 'Is there a bright future for Apex without a strong competitive scene?',
    },
    {
      commentID: 2,
      commentBody:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.      ',
      commentUpvotes: 10,
      commentAuthor: 'Jane Smith',
      commentDate: '2023-05-02',
      commentCommunity: 'Vue',
      postId: 2,
      postTitle: 'Gend faad di re',
    },
    {
      commentID: 3,
      commentBody: 'This is the third comment.',
      commentUpvotes: 3,
      commentAuthor: 'Bob Johnson',
      commentDate: '2023-05-01',
      commentCommunity: 'Angular',
      postId: 3,
      postTitle: 'Gend faad di re',
    },
    {
      commentID: 4,
      commentBody: 'This is the fourth comment.',
      commentUpvotes: 7,
      commentAuthor: 'Alice Williams',
      commentDate: '2023-04-30',
      commentCommunity: 'Ember',
      postId: 4,
      postTitle: 'Gend faad di re',
    },
    {
      commentID: 5,
      commentBody: 'This is the fifth comment.',
      commentUpvotes: 2,
      commentAuthor: 'David Lee',
      commentDate: '2023-04-29',
      commentCommunity: 'Backbone',
      postId: 5,
      postTitle: 'Gend faad di re',
    },
    {
      commentID: 6,
      commentBody: 'This is the sixth comment.',
      commentUpvotes: 8,
      commentAuthor: 'Jessica Brown',
      commentDate: '2023-04-28',
      commentCommunity: 'React',
      postId: 6,
      postTitle: 'Gend faad di re',
    },
    {
      commentID: 7,
      commentBody: 'This is the seventh comment.',
      commentUpvotes: 4,
      commentAuthor: 'Michael Johnson',
      commentDate: '2023-04-27',
      commentCommunity: 'Angular',
      postId: 7,
      postTitle: 'Gend faad di re',
    },
    {
      commentID: 8,
      commentBody: 'This is the eighth comment.',
      commentUpvotes: 6,
      commentAuthor: 'Sarah Davis',
      commentDate: '2023-04-26',
      commentCommunity: 'Vue',
      postId: 8,
      postTitle: 'Gend faad di re',
    },
    {
      commentID: 9,
      commentBody: 'This is the ninth comment.',
      commentUpvotes: 1,
      commentAuthor: 'Jason Lee',
      commentDate: '2023-04-25',
      commentCommunity: 'Backbone',
      postId: 9,
      postTitle: 'Gend faad di re',
    },
    {
      commentID: 10,
      commentBody: 'This is the tenth comment.',
      commentUpvotes: 9,
      commentAuthor: 'Lisa Smith',
      commentDate: '2023-04-24',
      commentCommunity: 'React',
      postId: 10,
      postTitle: 'Gend faad di re',
    },
  ]

  return (
    <div>
      {commentList.map((comment) => (
        <UserCommentCard key={comment.commentID} commentActual={comment} />
      ))}
    </div>
  )
}

export default UserComments
