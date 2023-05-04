// import './PostPage.css'
import { Box, Flex, Icon, Heading, Text, Button, Center } from '@chakra-ui/react'
import { FaComment, FaShare } from 'react-icons/fa'
import { BiUpvote, BiDownvote, BiBrush } from 'react-icons/bi'
import { SiRiotgames } from 'react-icons/si'
import { BsFillReplyFill } from 'react-icons/bs'
import ReactQuill from 'react-quill'
import { useState } from 'react'
import axios from 'axios'

interface PostCommentsProps {
  comment: {
    commentid: number
    createdbywhom: number
    parentcomment: number
    writtentext: string
    timecreated: Date
    votes: number
    postid: number
  }
  comments: {
    commentid: number
    createdbywhom: number
    parentcomment: number
    writtentext: string
    timecreated: Date
    votes: number
    postid: number
  }[]
}

function PostComments({ comment, comments }: PostCommentsProps) {
  const [showReplyBox, setshowReplyBox] = useState(false)
  function EditVisible() {
    if (showReplyBox === false) {
      setshowReplyBox(true)
    } else {
      setshowReplyBox(false)
    }
  }

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
  function handleSubmit(parentID: number) {
    postComment(parentID, mainComment, 1)
    setComment('')
  }

  function getTimeElapsed() {
    const now = new Date()
    const timestamp = new Date(comment.timecreated)
    const diff = now.getTime() - timestamp.getTime()

    const minute = 60 * 1000
    const hour = 60 * minute
    const day = 24 * hour
    const month = 30 * day

    if (diff < minute) {
      return 'just now'
    } else if (diff < hour) {
      const minutes = Math.round(diff / minute)
      return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`
    } else if (diff < day) {
      const hours = Math.round(diff / hour)
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`
    } else if (diff < month) {
      const days = Math.round(diff / day)
      return `${days} ${days === 1 ? 'day' : 'days'} ago`
    } else {
      const months = Math.round(diff / month)
      return `${months} ${months === 1 ? 'month' : 'months'} ago`
    }
  }

  return (
    <Box
      bg='white'
      color='black'
      h='fit-content'
      w='fit-content'
      //   position='relative'
      //   top='0%'
      //   left='-10%'
      display='flex'
      //   justifyContent='center'
      alignItems='left'
      paddingBottom='2rem'
      // paddingRight='22rem'
      paddingLeft='1rem'
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
              height: '2rem',
              // justifyContent: 'center',
            }}
          >
            <Icon as={SiRiotgames} marginLeft='1rem' color='red' fontSize='1rem' />
            <Text
              fontSize='0.6rem'
              color='blue'
              marginLeft='1rem'
              fontWeight='normal'
              marginBottom='0rem'
              marginTop='0rem'
            >
              {comment.createdbywhom}
            </Text>
            <Text
              fontSize='0.6rem'
              marginLeft='0.3rem'
              fontWeight='normal'
              marginBottom='0rem'
              marginTop='0rem'
            >
              posted {getTimeElapsed()}
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
              borderLeft: '0.05rem solid black',
              marginLeft: '1.5rem',
              // justifyContent: 'center',
            }}
          >
            <Text
              fontSize='1rem'
              marginLeft='2rem'
              fontWeight='normal'
              marginBottom='0,5rem'
              marginTop='0.25rem'
              style={{ wordBreak: 'break-all' }}
            >
              <div dangerouslySetInnerHTML={{ __html: comment.writtentext }}></div>
            </Text>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: '1rem',
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
                <Icon as={BiUpvote} fontSize='0.75rem' color='gray' />
              </Button>
              <Text fontSize='0.75rem'>{comment.votes}</Text>
              <Button
                bg='transparent'
                borderColor='transparent'
                display='flex'
                justifyContent='center'
                alignItems='center'
                h='fit-content'
                w='fit-content'
              >
                <Icon as={BiDownvote} fontSize='0.75rem' color='gray' />
              </Button>
              <Button
                bg='transparent'
                borderColor='transparent'
                display='flex'
                justifyContent='center'
                alignItems='center'
                h='2.25rem'
                w='fit-content'
                _hover={{ backgroundColor: '#d1d1d1' }}
                style={{ transition: 'ound-color 0.3s, color 0.3s' }}
              >
                <Icon as={BsFillReplyFill} fontSize='0.75rem' color='gray' />
                <Text fontSize='0.75rem' marginLeft='0.5rem' onClick={EditVisible}>
                  Reply
                </Text>
              </Button>
            </div>
            {showReplyBox && (
              <div
                style={{
                  borderLeft: '0.05rem solid black',
                  paddingLeft: '0.5rem',
                  marginLeft: '1.5rem',
                  height: 'fit-content',
                }}
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
                  placeholder='Your Reply goes here'
                />
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
                  onClick={() => handleSubmit(comment.commentid)}
                >
                  Submit
                </Button>
              </div>
            )}

            {comments
              .filter((c) => c.parentcomment === comment.commentid)
              .map((child) => (
                <PostComments key={child.commentid} comment={child} comments={comments} />
              ))}
          </div>
        </div>
      </>
    </Box>
  )
}

export default PostComments
