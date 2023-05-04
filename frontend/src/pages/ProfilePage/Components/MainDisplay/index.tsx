// import './PostPage.css'
import { useState } from 'react'
import { Tabs, Tab, Box } from '@material-ui/core'
import UserPosts from './Components/UserPosts'
import UserComments from './Components/UserComments'

function MainDisplay() {
  const [currentTab, setCurrentTab] = useState(0)

  const handleTabChange = (event: React.ChangeEvent<unknown>, newIndex: number) => {
    setCurrentTab(newIndex)
  }

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
          {currentTab === 0 && <UserPosts />}
          {currentTab === 1 && <UserComments />}
          {currentTab === 2 && <Box>Page 3 Content</Box>}
        </div>
      </Box>
    </div>
  )
}

export default MainDisplay
