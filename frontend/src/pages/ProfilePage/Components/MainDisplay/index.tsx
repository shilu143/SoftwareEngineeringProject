// import './PostPage.css'
import { useEffect, useState } from 'react'
import { Tabs, Tab, Box } from '@material-ui/core'
import UserPosts from './Components/UserPosts'
import UserComments from './Components/UserComments'
import axios from 'axios'

function MainDisplay() {
  const [currentTab, setCurrentTab] = useState(0)

  const handleTabChange = (event: React.ChangeEvent<unknown>, newIndex: number) => {
    setCurrentTab(newIndex)
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
  interface Comment {
    commentid: number
    createdbywhom: number
    parentcomment: number
    writtentext: string
    timecreated: Date
    votes: number
    postid: number
  }

  const [postData, setPostData] = useState<actualPost[]>([
    {
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
    },
  ])

  const [commentData, setCommentData] = useState<Comment[]>([
    {
      commentid: 0,
      createdbywhom: 0,
      parentcomment: 0,
      writtentext: 'a',
      timecreated: new Date(),
      votes: 0,
      postid: 0,
    },
  ])

  useEffect(() => {
    axios
      .get('http://localhost:5000/viewCommentsOfAUser?userId=1')
      .then((response) => {
        setCommentData(response.data)
        // console.log(response.data[0])
        console.log(commentData[0])
        // setCommentRows(response.data[0].commentRows)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:5000/viewPostsOfAUser?userId=1')
      .then((response) => {
        setPostData(response.data)

        // setCommentRows(response.data[0].commentRows)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div
      style={{
        display: 'flex-inline',
        backgroundColor: 'black',
        width: '70%',
        height: '100vh',
        marginBottom: '0px',
        marginLeft: 'auto',
        marginRight: '1.5rem',
        borderRadius: '10px',
        // overflowY: 'scroll',
        paddingBottom: '0px',
        // alignItems: 'center',
        color: 'white',
        flexDirection: 'column',
        // justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          aria-label='simple tabs example'
          style={{ display: 'flex', width: 'auto', position: 'sticky' }}
          centered
        >
          <Tab label='Posts' style={{ display: 'flex', width: '15rem' }} />
          <Tab label='Comments' style={{ display: 'flex', width: '15rem' }} />
          <Tab label='Likes' style={{ display: 'flex', width: '15rem' }} />
        </Tabs>
        <div style={{ display: 'flex-inline', height: '95vh', overflowY: 'auto' }}>
          {currentTab === 0 && <UserPosts posts={postData} />}
          {currentTab === 1 && <UserComments comments={commentData}/>}
          {currentTab === 2 && <Box>Page 3 Content</Box>}
        </div>
      </Box>
    </div>
  )
}

export default MainDisplay
