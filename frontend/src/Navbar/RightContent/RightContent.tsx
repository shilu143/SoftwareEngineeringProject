import React, { useContext, useEffect, useState } from 'react'
import AuthButtons from './AuthButtons'
import { Flex } from '@chakra-ui/layout'
import Directory from '../Directory/Directory'
import { Avatar } from '@chakra-ui/react'
import { AuthContext } from '../../context/AuthContext'

const RightContent = () => {
  const { user, profileImage } = useContext(AuthContext)
  const [email, setEmail] = useState<string>('')
  const [userImg, setUserImg] = useState<string>('')

  useEffect(() => {
    setEmail(user?.email || '')
    setUserImg(profileImage)
  }, [user, profileImage])
  return (
    <Flex justify={'center'} align={'center'}>
      <Directory />

      {email ? <Avatar name='Dan Abrahmov' src={userImg} /> : <AuthButtons />}
    </Flex>
  )
}
export default RightContent
