import './PostPage.css'
import { Box } from '@chakra-ui/react'
import PostContent from './Components/PostContent'
import PostCommunityCard from './Components/PostCommunityCard'
import PostComments from './Components/PostComments'

function PostPage() {
  const comments = [
    { commentId: 1, parentId: null, body: 'Parent Comment 1', username: 'Bappi Lehri', votes: 10 },
    { commentId: 2, parentId: null, body: 'Parent Comment 2', username: 'user2', votes: 5 },
    { commentId: 3, parentId: 1, body: 'Reply to Parent Comment 1', username: 'user3', votes: 2 },
    {
      commentId: 4,
      parentId: 1,
      body: 'Another reply to Parent Comment 1',
      username: 'user4',
      votes: 3,
    },
    {
      commentId: 5,
      parentId: 3,
      body: 'Reply Reply to Parent Comment 1',
      username: 'user5',
      votes: 7,
    },
    {
      commentId: 6,
      parentId: 5,
      body: 'Reply Reply Reply to Parent Comment 1',
      username: 'user6',
      votes: 1,
    },
    {
      commentId: 7,
      parentId: 2,
      body: 'Another reply to Parent Comment 2',
      username: 'user7',
      votes: 0,
    },
    {
      commentId: 8,
      parentId: 2,
      body: 'Yet another reply to Parent Comment 2',
      username: 'user8',
      votes: 4,
    },
    {
      commentId: 9,
      parentId: 8,
      body: 'Yet another reply to Parent Comment 2',
      username: 'user9',
      votes: 6,
    },
  ]

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d1d1d1',
        height: 'auto',
      }}
    >
      <Box
        bg='#d1d1d1'
        color='white'
        h='auto'
        display='inline-flex'
        justifyContent='center'
        alignItems='center'
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              backgroundColor: '#d1d1d1',
              // justifyContent: 'center',
            }}
          >
            <PostContent />
            <PostCommunityCard />
          </div>
          <div
            style={{
              width: '102vh',
              // justifyContent: 'center',
            }}
          >
            {comments
              .filter((comment) => comment.parentId === null) // only show top-level comments
              .map((comment) => (
                <PostComments key={comment.commentId} comment={comment} comments={comments} />
              ))}
          </div>
        </div>
      </Box>
    </div>
  )
}

export default PostPage
