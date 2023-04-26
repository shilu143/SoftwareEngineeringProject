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
  const postshardw = [
    {
      id: 1,
      username: 'johndoe',
      location: 'New York',
      image: '/logo512.png',
      caption: 'This is a caption for the first post.'
    },
    {
      id: 2,
      username: 'janedoe',
      location: 'Los Angeles',
      image: '/logo512.png',
      caption: 'This is a caption for the second post.'
    },
    {
      id: 3,
      username: 'bobsmith',
      location: 'San Francisco',
      image: '/logo512.png',
      caption: 'This is a caption for the third post.'
    }
  ];


  useEffect(() => {
    axios.get('/api').then((res) => {
      console.log(res.data)
      setPosts(res.data)
    })
  }, [])
  return (
    <Flex justify={'center'} align = {'center'} px={'10em'} > 
      <Box p={10} display="flex" flex="1" flexDir="column" bg="blackAlpha.100" maxWidth={'80%'} justify-content={'center'} >
        <Heading as="h1" size="xl" mb={6}>Camp Com Feed</Heading>
        <VStack spacing={6} m={10}>
          <PostCards /> 
        </VStack>
      </Box>
    </Flex>
  );
}

export default Feed
