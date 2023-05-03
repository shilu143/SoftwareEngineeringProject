import { Button } from '@chakra-ui/button'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal'
import {
  Box,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  useToast,
} from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { BsPatchCheckFill, BsPatchExclamationFill } from 'react-icons/bs'
import { AvatarWithFileManager } from '../components/FileUploader'
import { AuthContext, useAuth } from '../hooks/useAuth'
import PasswordInput from '../components/PasswordInput'

interface Props {
  open: boolean
  handleClose: () => void
}

const LoginModal: React.FC<Props> = ({ open, handleClose }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [avatarSrc, setAvatarSrc] = useState<string>('')
  const [communityName, setCommunityName] = useState('')
  const [charsRemaining, setCharsRemaining] = useState(25)
  const [validCommunity, setValidCommunity] = useState(false)
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState('')
  const [tagError, setTagError] = useState(false)
  const userToken = useContext(AuthContext)
  const toast = useToast()

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 25) {
      setCommunityName(event.target.value)
      setCharsRemaining(25 - event.target.value.length)
      const params = { comName: event.target.value }
      const headers = { Authorization: `Bearer ${userToken}` } // Add the token to the headers
      if (event.target.value.length !== 0) {
        const response = await axios.get('/checkSameNameCommunity', { params, headers })
        setValidCommunity(response.data.exists)
      } else {
        setValidCommunity(false)
      }
    }
  }

  const addTag = () => {
    if (tagInput.trim() !== '' && !tags.includes(tagInput)) {
      setTags([...tags, tagInput])
      setTagInput('')
      setTagError(false)
    } else {
      setTagError(true)
    }
  }

  const removeTag = (index: number) => {
    const newTags = [...tags]
    newTags.splice(index, 1)
    setTags(newTags)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      addTag()
    }
  }
  const handleCreateCommunity = async () => {
    const formData = new FormData()
    formData.append('profile', selectedFile as File)
    formData.append('comName', communityName)
    for (let i = 0; i < tags.length; i++) {
      formData.append('category', tags[i])
    }
    const headers = { Authorization: `Bearer ${userToken}` }
    axios
      .post('/insertCommunityInDatabase', formData, { headers })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.status)
          toast({
            title: 'Community Created',
            description: `Name : ${communityName}`,
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
        } else if (response.status === 500) {
          console.log('Error')
          toast({
            title: 'Failed to Create Community',
            description: 'An error occurred while creating the community',
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
        }
      })
      .catch((error) => {
        console.error(error)
        toast({
          title: 'Failed to Create Community',
          description: 'An error occurred while creating the community',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      })
    resetState()
    handleClose()
  }

  const resetState = () => {
    setCommunityName('')
    setCharsRemaining(25)
    setValidCommunity(false)
    setTags([])
    setTagInput('')
    setTagError(false)
    setSelectedFile(null)
    setAvatarSrc('')
  }
  return (
    <>
      <Modal isOpen={open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent bg={'black'} color={'white'}>
          <ModalHeader>Login</ModalHeader>
          <Box pl={3} pr={3}>
            <ModalCloseButton />
            <ModalBody display={'flex'} flexDirection={'column'} py={'10px'}>
              <Flex flexDir={'column'} mb={4}>
                <Text fontWeight={600} fontSize={15} mb={2}>
                  Email
                </Text>
                <InputGroup>
                  <Input
                    value={communityName}
                    onChange={handleChange}
                    placeholder='Enter Email'
                    required
                  />
                </InputGroup>
              </Flex>
              <Flex flexWrap='wrap' flexDir={'column'} mb={4}>
                <Text fontWeight={600} fontSize={15} mb={2}>
                  Password
                </Text>
                <PasswordInput />
              </Flex>
            </ModalBody>
          </Box>
          <ModalFooter>
            <Button
              bg='black'
              border={'1px solid white'}
              cursor={!validCommunity ? 'not-allowed' : 'cursor'}
              isDisabled={!validCommunity}
              onClick={handleCreateCommunity}
            >
              Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default LoginModal
