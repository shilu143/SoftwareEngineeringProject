import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Box,
  Grid,
  Image,
  Text,
  VStack,
  StackDivider,
  Heading,
  Container,
  Flex
} from '@chakra-ui/react';
import PostCards from './PostCard/PostCards';

const Feed = () => {
  const [posts, setPosts] = useState([{}])
  useEffect(() => {
    axios.get('/api').then((res) => {
      console.log(res.data)
      setPosts(res.data)
    })
  }, [])
  return (
    <Box display="flex" overflow="hidden" height="100vh">
      <Box flex="0 0 auto" width="15%" backgroundColor="white" position="fixed" top={0} bottom={0} left={0}>
        <Box p={4} h="100%">
          <Text fontWeight="bold" mb={4}>Sidebar</Text>
          <Box>
            <Text mb={2}>Link 1</Text>
            <Text mb={2}>Link 2</Text>
            <Text mb={2}>Link 3</Text>
          </Box>
        </Box>
      </Box>
      <Box flex={1} overflow="auto" padding="0 10em" bg="blackAlpha.300">
        <Flex justify="center" align="center" px="10em">
          <Box p={100} display="flex" flex="1" flexDir="column" maxWidth="100%">
            <Heading as="h1" size="xl" mb={6}>Camp Com Feed</Heading>
            <VStack spacing={6} m={10}>
              <PostCards />
            </VStack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );

}

export default Feed

