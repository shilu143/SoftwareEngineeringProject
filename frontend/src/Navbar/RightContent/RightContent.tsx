import React from 'react'
import AuthButtons from './AuthButtons'
import { Flex } from '@chakra-ui/layout'
import Directory from '../Directory/Directory'

const RightContent = () => {
  return (
    <Flex justify={'center'} align={'center'}>
      <Directory />
      <AuthButtons />
    </Flex>
  )
}
export default RightContent
