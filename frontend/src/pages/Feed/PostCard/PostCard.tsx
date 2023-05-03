import { Container, Avatar, Image, Button, Flex, Text, IconButton, Box, Icon } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaThumbsUp, FaThumbsDown, FaComment } from 'react-icons/fa'

interface Props {
    postid: string;
  }

function PostCard({postid}:Props    ) {


    const [imageSrc, setImageSrc] = useState('./logo512.png')
    const [comImageSrc, setcomImageSrc] = useState('./logo512.png')
    const [likes, setLikes] = useState(0)
    const [isLiked, setIsLiked] = useState(false)
    const [dislikes, setDislikes] = useState(0)
    const [isDisliked, setIsDisliked] = useState(false)
    const [comments, setComments] = useState(0)
    const [community, setCommunity] = useState('community')
    const [postedby, setPostedby] = useState('react')
    const [postTime, setPostTime] = useState('time')
    const [postCaption, setPostCaption] = useState('Caption')
    
    
    useEffect(() => {
        axios.get('/api/image').then((res) => {
            setImageSrc(res.data)
            console.log('api to fetch image called')
        })
    }, [imageSrc])

    const handleLikeClick = () => {
        if (isLiked) {
            setLikes((prevLikes) => prevLikes - 1)
            setIsLiked(false)
        } else {
            setLikes((prevLikes) => prevLikes + 1)
            setIsLiked(true)
            if (isDisliked) {
                setDislikes((prevDislikes) => prevDislikes - 1)
                setIsDisliked(false)
            }
        }
    }

    const handleDislikeClick = () => {
        if (isDisliked) {
            setDislikes((prevDislikes) => prevDislikes - 1)
            setIsDisliked(false)
        } else {
            setDislikes((prevDislikes) => prevDislikes + 1)
            setIsDisliked(true)
            if (isLiked) {
                setLikes((prevLikes) => prevLikes - 1)
                setIsLiked(false)
            }
        }
    }

    const handleCommentClick = () => {
        console.log('comment clicked')
    }

    const handleCommunityClick = () => {
        console.log('community clicked')
    }
    const handlePostedByClick= ()=>{
        console.log('posted by click')
    }

    return (
        <Flex justify={'center'} align={'center'} px={'10em'} bg={'white'} m={{ base: '1%', md: '3%', lg: '5%' }}>
            <Box width={'100%'}>
                <Flex align="left"  _hover={{ cursor: 'pointer' }}>
                    <Avatar size="sm" name="community image" src={comImageSrc} onClick={handleCommunityClick} />
                    <Text ml={2} onClick={handleCommunityClick} >cc/{community}</Text>
                    <Text ml={2} fontSize="sm" color="gray.500" onClick={handlePostedByClick} >posted by {postedby} {postTime} ago</Text>
                </Flex>

                <Image src={imageSrc} alt="Post image" />
                <Flex align="center" justify="space-between" mt={2}>
                    <Flex align={'center'}>
                        <Icon as={FaThumbsUp} color={isLiked ? 'blue.500' : 'gray.500'} onClick={handleLikeClick}
                            _hover={{ cursor: 'pointer' }} />
                        <Text fontSize="md" ml={2} mr={4}>{likes} Likes</Text>
                    </Flex>
                    <Flex align={'center'}>
                        <Icon as={FaThumbsDown} color={isDisliked ? 'red.500' : 'gray.500'} onClick={handleDislikeClick}
                            _hover={{ cursor: 'pointer' }} />
                        <Text fontSize="md" ml={2} mr={4}>{dislikes} Dislikes</Text>
                    </Flex>
                </Flex>
                <Flex justify={'center'} align={'center'} mt={5} >
                    <Icon as={FaComment} color={'gray.500'} onClick={handleCommentClick} _hover={{ cursor: 'pointer' }} />
                    <Text fontSize="md" ml={2} mr={4} onClick={handleCommentClick} _hover={{ cursor: 'pointer' }} >{comments} Comments</Text>
                </Flex>

            </Box>
        </Flex>
    )
}

export default PostCard
