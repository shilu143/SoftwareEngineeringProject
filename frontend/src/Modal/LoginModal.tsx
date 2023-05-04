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
import { Box, Flex, Input, InputGroup, Text, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import PasswordInput from '../components/PasswordInput'
import Cookies from 'js-cookie'
import { AuthContext } from '../context/AuthContext'

// import { AuthContext } from '../hooks/useAuth'

interface Props {
  open: boolean
  handleClose: () => void
}
interface User {
  email: string
  token: string
}

type FormData = {
  name: string
  gender: string
  age: number
  password: string
  email: string
  profile: File | null
}

const LoginModal: React.FC<Props> = ({ open, handleClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    gender: '',
    age: 10,
    password: '',
    email: '',
    profile: null,
  })
  const { user, setUser } = useContext(AuthContext)
  const [communityName, setCommunityName] = useState('')
  const [validCommunity, setValidCommunity] = useState(false)
  // const userToken = useContext(AuthContext)
  const toast = useToast()
  const handleLogin = async () => {
    const response = await axios
      .post('/loginCheck', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .catch((error) => {
        console.log(error)
        toast({
          title: 'Invalid Email or Password',
          description: '',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      })

    if (response && response.status === 200) {
      toast({
        title: 'Logged In Successful',
        description: '',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      Cookies.set('authToken', response.data.auth)
      Cookies.set('email', response.data.userEmail)
      setUser({ email: response.data.userEmail, token: response.data.auth })
      // login(response.data.Email, response.data.auth)
      resetState()
      handleClose()
    }
    console.log(response)
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      email: event.target.value,
    }))
  }
  const resetState = () => {
    setFormData({
      name: '',
      gender: '',
      age: 10,
      password: '',
      email: '',
      profile: null,
    })
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
                    value={formData.email}
                    onChange={handleEmailChange}
                    placeholder='Enter Email'
                    required
                  />
                </InputGroup>
              </Flex>
              <Flex flexWrap='wrap' flexDir={'column'} mb={4}>
                <Text fontWeight={600} fontSize={15} mb={2}>
                  Password
                </Text>
                <PasswordInput formData={formData} setFormData={setFormData} />
              </Flex>
            </ModalBody>
          </Box>
          <ModalFooter>
            <Button
              bg='black'
              border={'1px solid white'}
              cursor={validCommunity ? 'not-allowed' : 'cursor'}
              isDisabled={validCommunity}
              onClick={handleLogin}
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
