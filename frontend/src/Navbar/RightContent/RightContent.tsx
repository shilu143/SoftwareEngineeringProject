import React from 'react'
import AuthButtons from './AuthButtons'
import { Flex } from '@chakra-ui/layout'
import Directory from '../Directory/Directory'
import { Avatar } from '@chakra-ui/react'

const RightContent = () => {
  return (
    <Flex justify={'center'} align={'center'}>
      <Directory />
      {/* <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' /> */}
      <AuthButtons />
    </Flex>
  )
}
export default RightContent
