import { Container, Avatar, Image, Button, Flex, Text, IconButton, Box, Icon } from '@chakra-ui/react'
import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { FaChevronUp, FaChevronDown, FaComment } from 'react-icons/fa'
import { BiUpvote, BiDownvote } from 'react-icons/bi'
import { AuthContext } from '../../../context/AuthContext'


interface Props {
    postid: string;
}

function PostCard({ postid }: Props) {
    const user = useContext(AuthContext).user;

    const [imageSrc, setImageSrc] = useState('')
    const [comImageSrc, setcomImageSrc] = useState('')
    const [votes, setVotes] = useState(0)
    const [isUpvoted, setIsUpvoted] = useState(false)
    const [isDownvoted, setIsDownvoted] = useState(false)
    const [comments, setComments] = useState(0)
    const [community, setCommunity] = useState('')
    const [communityname, setCommunityname] = useState('')
    const [postedby, setPostedby] = useState('')
    const [postTime, setPostTime] = useState('')
    const [postCaption, setPostCaption] = useState('')
    
    useEffect(() => {
        const caller = async() =>{
        const response = await axios.get(`/returnDetailsOfAPost?postId=${postid}`, {
          headers: {
            Authorization: `Bearer ${user?.token}`
          },
        })
        setImageSrc(response.data[0].postimage)
        setcomImageSrc(response.data[0].comImageSrc)
        setVotes(response.data[0].votes)
        setComments(response.data[0].commentRows.length)
        setCommunity(response.data[0].communityId)
        setPostedby(response.data[0].creatorName)
        setPostTime(response.data[0].timecreated)
        setPostCaption(response.data[0].posttitle)
        setCommunityname(response.data[0].communityname)
        }
        caller()
      }, [postid, user?.token]);
    


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
              <Avatar size="sm" name="community image" src={comImageSrc} onClick={handleCommunityClick} />
              <Text ml={2} onClick={handleCommunityClick}>cc/{communityname}</Text>
              <Text ml={2} fontSize="sm" color="gray.500" onClick={handlePostedByClick}>posted by {postedby} {postTime} ago</Text>
            </Flex>
      
            <Image src={imageSrc} alt="Post image" />
            <Flex align="center" justify="space-between" mt={2}>
              <Flex align={'center'}>
                <Icon as={BiUpvote} color={isUpvoted ? 'blue.500' : 'gray.500'} onClick={handleUpvoteClick} _hover={{ cursor: 'pointer' }} />
                <Icon as={BiDownvote} color={isDownvoted ? 'blue.500' : 'gray.500'} onClick={handleDownvoteClick} _hover={{ cursor: 'pointer' }} />
                <Text fontSize="md" ml={2} mr={4}>{votes} points</Text>
              </Flex>
            </Flex>
            <Flex justify={'center'} align={'center'} mt={5}>
              <Icon as={FaComment} color={'gray.500'} onClick={handleCommentClick} _hover={{ cursor: 'pointer' }} />
              <Text fontSize="md" ml={2} mr={4} onClick={handleCommentClick} _hover={{ cursor: 'pointer' }}>{comments} Comments</Text>
            </Flex>
            <Box mt={5}>
              <Text fontWeight={'bold'} fontSize={'xl'}>{postCaption}</Text>
            </Box>
          </Box>
        </Flex>
      );
      
}

export default PostCard


// setImageSrc(res.data.imageSrc)
//             setcomImageSrc(res.data.comImageSrc)
//             setVotes(res.data.votes)
//             setIsUpvoted(res.data.isUpvoted)
//             setIsDownvoted(res.data.isDownvoted)
//             setComments(res.data.comments)
//             setCommunity(res.data.community)
//             setPostedby(res.data.postedby)
//             setPostTime(res.data.postTime)
//             setPostCaption(res.data.postCaption)