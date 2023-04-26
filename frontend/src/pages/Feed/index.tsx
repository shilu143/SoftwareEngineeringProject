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
  Container
} from '@chakra-ui/react';

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
    <Container p={10} display="flex" flex="1" flexDir="column">
      <Heading as="h1" size="xl" mb={6}>Camp Com Feed</Heading>
      <VStack spacing={6}>
        {postshardw.map((post) => (
          <Box key={post.id} border="1px" borderColor="black" borderRadius="md" overflow="hidden">
            <Image src={post.image} alt="Post image" />
            <VStack divider={<StackDivider borderColor="gray.200" />} spacing={2} p={4}>
              <Text fontWeight="bold">{post.username}</Text>
              <Text fontSize="sm">{post.location}</Text>
              <Text>{post.caption}</Text>
            </VStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
}

export default Feed
