import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Layout from '../../Layout'
import { Heading, Text, VStack } from '@chakra-ui/layout'

const Home = () => {
  // const [backend, setBackendData] = useState([{}])
  // useEffect(() => {
  //   axios.get('/api').then((res) => {
  //     console.log(res.data)
  //     setBackendData(res.data)
  //   })
  // }, [])
  return (
    <>
      <Layout>
        <VStack spacing={'1rem'} color={'white'}>
          <Heading textAlign={'center'} mt={'1rem'}>
            This is Home Page
          </Heading>
          <Text textAlign={'center'} fontSize={'1.5em'}>
            {' '}
            {/* backend data = {backend.toString()} */}
          </Text>
        </VStack>
      </Layout>
    </>
  )
}

export default Home
