// import './PostPage.css'
import { Box } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import PostComments from '../PostPage/Components/PostComments'
import MainDisplay from './Components/MainDisplay'
import ProfileCard from './Components/ProfileCard'

function ProfilePage() {
  

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
