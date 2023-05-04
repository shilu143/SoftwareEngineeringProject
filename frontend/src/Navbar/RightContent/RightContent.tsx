import React, { useContext, useEffect, useState } from 'react'
import AuthButtons from './AuthButtons'
import { Flex } from '@chakra-ui/layout'
import Directory from '../Directory/Directory'
import { Avatar } from '@chakra-ui/react'
import { AuthContext } from '../../context/AuthContext'
import Cookies from 'js-cookie'

const RightContent = () => {
  const authToken = Cookies.get('authToken')
  const { user } = useContext(AuthContext)
  const [email, setEmail] = useState<string>('')

  useEffect(() => {
    setEmail(user?.email || '')
  }, [user])

  return (
    <Flex justify={'center'} align={'center'}>
      <Directory />
      {email ? <Avatar name={email} src={user?.profileImage} /> : <AuthButtons />}
    </Flex>
  )
}

export default RightContent
