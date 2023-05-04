
import { Container, Avatar, Image, Button, Flex, Text, IconButton, Box, Icon } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaChevronUp, FaChevronDown, FaComment } from 'react-icons/fa'
import { BiUpvote, BiDownvote } from 'react-icons/bi'


interface Props {
    postid: string;
}

function PostCard({ postid }: Props) {

    const [imageSrc, setImageSrc] = useState('./logo512.png')
    const [comImageSrc, setcomImageSrc] = useState('./logo512.png')
    const [votes, setVotes] = useState(0)
    const [isUpvoted, setIsUpvoted] = useState(false)
    const [isDownvoted, setIsDownvoted] = useState(false)
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

    const handleUpvoteClick = () => {
        if (isUpvoted) {
            setVotes((prevVotes) => prevVotes - 1)
            setIsUpvoted(false)
        } else {
            setVotes((prevVotes) => prevVotes + 1)
            setIsUpvoted(true)
            if (isDownvoted) {
                setVotes((prevVotes) => prevVotes + 1)
                setIsDownvoted(false)
            }
        }
    }

    const handleDownvoteClick = () => {
        if (isDownvoted) {
            setVotes((prevVotes) => prevVotes + 1)
            setIsDownvoted(false)
        } else {
            setVotes((prevVotes) => prevVotes - 1)
            setIsDownvoted(true)
            if (isUpvoted) {
                setVotes((prevVotes) => prevVotes - 1)
                setIsUpvoted(false)
            }
        }
    }


    const handleCommentClick = () => {
        console.log('comment clicked')
    }

    const handleCommunityClick = () => {
        console.log('community clicked')
    }

    const handlePostedByClick = () => {
        console.log('posted by click')
    }

    return (
        <Flex justify={'center'} align={'center'} px={'10em'} bg={'white'} m={{ base: '1%', md: '3%', lg: '5%' }}>
            <Box width={'100%'}>
                <Flex align="left" _hover={{ cursor: 'pointer' }}>
                    <Box w={10} mr={4}>
                        <Flex align="center" justify="center" bg="gray.100" h={10} rounded="md">
                            <Text fontWeight="bold" fontSize="lg">1</Text>
                        </Flex>
                    </Box>
                    <Avatar size="sm" name="community image" src={comImageSrc} onClick={handleCommunityClick} />
                    <Text ml={2} onClick={handleCommunityClick} >cc/{community}</Text>
                    <Text ml={2} fontSize="sm" color="gray.500" onClick={handlePostedByClick} >posted by {postedby} {postTime} ago</Text>
                </Flex>

                <Image src={imageSrc} alt="Post image" />
                <Flex align="center" justify="space-between" mt={2}>
                    <Flex align={'center'}>
                        <Icon as={BiUpvote} color={isUpvoted ? 'blue.500' : 'gray.500'} onClick={handleUpvoteClick}
                            _hover={{ cursor: 'pointer' }} />
                        <Icon as={BiDownvote} color={isDownvoted ? 'blue.500' : 'gray.500'} onClick={handleDownvoteClick}
                            _hover={{ cursor: 'pointer' }} />
                        <Text fontSize="md" ml={2} mr={4}>{votes} points</Text>
                    </Flex>
                </Flex>
                <Flex justify={'center'} align={'center'} mt={5} >
                    <Icon as={FaComment} color={'gray.500'} onClick={handleCommentClick} _hover={{ cursor: 'pointer' }} />
                    <Text fontSize="md" ml={2} mr={4} onClick={handleCommentClick} _hover={{ cursor: 'pointer' }} >{comments} Comments</Text>
                </Flex>
            </Box>
        </Flex>

    );

}
export default PostCard