import './PostPage.css'
import { Box, Text, Button } from '@chakra-ui/react'
import PostContent from './Components/PostContent'
import PostCommunityCard from './Components/PostCommunityCard'
import PostComments from './Components/PostComments'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

function PostPage() {
  interface Post {
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
  interface Comment {
    commentid: number
    createdbywhom: number
    parentcomment: number
    writtentext: string
    timecreated: Date
    votes: number
    postid: number
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const shouldShowPostCommunityCard = windowWidth >= 1168

  const [postData, setPostData] = useState<Post>({
    postid: 0,
    comid: 0,
    comName: '',
    posttitle: '',
    createdbywhom: 0,
    creatorName: '',
    timecreated: new Date(),
    postbody: '',
    votes: 0,
    postimage: '',
    commentCount: '',
    commentRows: [
      {
        commentid: 0,
        createdbywhom: 0,
        parentcomment: 0,
        writtentext: 'a',
        timecreated: new Date(),
        votes: 0,
        postid: 0,
      },
    ],
  })
  const [commentRows, setCommentRows] = useState<Comment[]>([])
  const [mainComment, setComment] = useState('')

  function postComment(parentComment: number, text: string, postId: number) {
    axios
      .post('http://localhost:5000/insertCommentByUserAtAPost', {
        parentComment: parentComment,
        text: text,
        postId: postId,
      })
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error.response.data)
      })
  }

  function handleCommentChange(value: string) {
    setComment(value)
    console.log(mainComment)
  }
  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault()
    postComment(-1, mainComment, 1)

    setComment('')
  }

  useEffect(() => {
    axios
      .get('http://localhost:5000/returnDetailsOfAPost?postId=1')
      .then((response) => {
        setPostData(response.data[0])
        // setCommentRows(response.data[0].commentRows)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'top',
        backgroundColor: '#d1d1d1',
        minHeight: '100vh',
        height: 'fit-content',
      }}
    >
      <Box
        bg='#d1d1d1'
        color='white'
        h='fit-content'
        display='flex'
        flexDirection='column'
        justifyContent='flex-start'
        paddingTop='2.5rem'
        // alignItems='center'
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#d1d1d1',
            // justifyContent: 'center',
          }}
        >
          {/* <PostContent /> */}

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              // justifyContent: 'center',
            }}
          >
            <PostContent actualPost={postData} />
            <Box
              bg='white'
              color='black'
              w='50vw'
              maxWidth='50rem'
              h='fit-content'
              display='flex'
              justifyContent='flex-start'
              // alignItems='center'
              paddingBottom='5rem'
              paddingTop='0.5rem'
              paddingRight='1rem'
              // marginBottom='1vh'
              flexDirection='column'
              // border='0.5vh solid red'
            >
              <Text fontSize='1rem' marginLeft='3em' fontWeight='normal'>
                Add your thoughts
              </Text>
              <Box
                display='flex'
                justifyContent='flex-start'
                alignItems='center'
                flexDirection='column'
              >
                <ReactQuill
                  value={mainComment}
                  onChange={handleCommentChange}
                  style={{ width: '90%', marginBottom: '3rem' }}
                  modules={{
                    toolbar: {
                      container: [
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        ['link'],
                        [{ align: [] }],
                        ['clean'],
                      ],
                    },
                  }}
                  placeholder='Your comment goes here'
                />
              </Box>

              <div
                style={{
                  display: 'flex',
                  widows: 'auto',
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                }}
              >
                <Button
                  color='blue'
                  fontWeight='bold'
                  border='none'
                  background='transparent'
                  rounded='md'
                  marginLeft='auto'
                  marginRight='4rem'
                  _hover={{ bg: 'grey' }}
                  _active={{ bg: 'black' }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>

              <div
                style={{
                  marginTop: '1rem',
                  display: 'flex',
                  // justifyContent: 'flex-start',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                {postData?.commentRows
                  .filter((comment) => comment.parentcomment === -1) // only show top-level comments
                  .map((comment) => ({
                    commentid: comment.commentid,
                    parentcomment: comment.parentcomment,
                    writtentext: comment.writtentext,
                    createdbywhom: comment.createdbywhom,
                    timecreated: comment.timecreated,
                    votes: comment.votes,
                    postid: comment.postid,
                    childComments: postData?.commentRows
                      .filter((child) => child.parentcomment === comment.commentid)
                      .map((child) => ({
                        commentid: child.commentid,
                        parentcomment: child.parentcomment,
                        writtentext: child.writtentext,
                        timecreated: child.timecreated,
                        createdbywhom: child.createdbywhom,
                        postid: child.postid,
                        votes: child.votes,
                      })),
                  }))
                  .map((comment) => (
                    <PostComments
                      key={comment.commentid}
                      comment={comment}
                      comments={postData?.commentRows}
                    />
                  ))}
              </div>
            </Box>

            <div
              style={{
                width: '50vw',
                maxWidth: '50rem',
                // paddingRight: '12rem',

                // justifyContent: 'center',
              }}
            ></div>
          </div>
          {shouldShowPostCommunityCard && <PostCommunityCard actualPost={postData} />}
        </div>
      </Box>
    </div>
  )
}

export default PostPage
