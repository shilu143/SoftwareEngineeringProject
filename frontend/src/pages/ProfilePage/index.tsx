// import './PostPage.css'
import { Box } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import PostComments from '../PostPage/Components/PostComments'
import MainDisplay from './Components/MainDisplay'
import ProfileCard from './Components/ProfileCard'
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
interface Comment {
  commentid: number
  createdbywhom: number
  parentcomment: number
  writtentext: string
  timecreated: Date
  votes: number
  postid: number
}
interface ProfilePageProps {
  PostsComments: {
    posts: actualPost[]
    comments: Comment[]
  }
}

function ProfilePage() {
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

  useEffect(() => {
    axios
      .get('http://localhost:5000/viewCommentsOfAUser?userId=1')
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
        justifyContent: 'flex-start',
        // alignItems: 'center',
        backgroundColor: '#d1d1d1',
        height: 'auto',
      }}
    >
      <ProfileCard />
      <MainDisplay />
    </div>
  )
}

export default ProfilePage
