// import './PostPage.css'
import { useState } from 'react'
import { Tabs, Tab, Box } from '@material-ui/core'
import Posts from './Components/Posts'

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
        height: '110vh',
        marginBottom: '0px',
        marginLeft: 'auto',
        marginRight: '3vh',
        borderRadius: '10px',

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
          style={{ display: 'flex', width: 'auto' }}
          centered
        >
          <Tab label='Posts' style={{ display: 'flex', width: '30vh' }} />
          <Tab label='Comments' style={{ display: 'flex', width: '30vh' }} />
          <Tab label='Likes' style={{ display: 'flex', width: '30vh' }} />
        </Tabs>

        {currentTab === 0 && <Posts />}
        {currentTab === 1 && <Box>Page 2 Content</Box>}
        {currentTab === 2 && <Box>Page 3 Content</Box>}
      </Box>
    </div>
  )
}

export default MainDisplay
