import { Container, Image, Button, Flex, Text, IconButton, Box } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaHeart } from 'react-icons/fa'


function PostCard() {
    const [imageSrc, setImageSrc] = useState('./logo512.png')
    const [likes, setLikes] = useState(0)
    const [isLiked, setIsLiked] = useState(false)
    const [community, setCommunity] = useState('community')

    const buttonStyle = {
        
    }

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
        }
    }

    return (
        <Flex justify={'center'} align = {'center'} px={'10em'}>
            <Box width={'900px'}>
                <Text>
                    cc/{community}
                </Text>
                <Image src={imageSrc} alt="Post image" />
                <Flex align="center" justify="space-between" mt={2}>
                    <IconButton onClick={handleLikeClick}
                        aria-label="Like"
                        icon={<FaHeart color={isLiked ? 'red.500' : 'gray.500'} />}
                        {...buttonStyle}
                    />

                    <Text fontSize="md">Likes: {likes}</Text>
                </Flex>
            </Box>
        </Flex>
    )
}

export default PostCard
