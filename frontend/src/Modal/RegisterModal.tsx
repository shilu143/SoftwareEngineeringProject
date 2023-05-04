import { Button } from '@chakra-ui/button'
import { ChevronDownIcon } from '@chakra-ui/icons'
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
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  PinInput,
  PinInputField,
  Text,
  useToast,
} from '@chakra-ui/react'
import axios from 'axios'
import React, { SyntheticEvent, useContext, useEffect, useState } from 'react'
import { AvatarWithFileManager } from '../components/FileUploader'
import PasswordInput from '../components/PasswordInput'
// import { AuthContext } from '../hooks/useAuth'

interface Props {
  open: boolean
  handleClose: () => void
}

type FormData = {
  name: string
  gender: string
  age: number
  password: string
  email: string
  profile: File | null
}

const RegisterModal: React.FC<Props> = ({ open, handleClose }) => {
  const options = ['M', 'F']
  const [selectedOption, setSelectedOption] = useState('Gender')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [avatarSrc, setAvatarSrc] = useState<string>('')
  const [validCommunity, setValidCommunity] = useState(true)
  const toast = useToast()

  const handleSignUp = async () => {
    formData['profile'] = selectedFile as File
    const response = await axios.post('/userSignUp', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    console.log(response.data)
    toast({
      title: 'Sign Up Successful',
      description: `User : ${formData.email}`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
    resetState()
    handleClose()
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

  const [formData, setFormData] = useState<FormData>({
    name: '',
    gender: '',
    age: 10,
    password: '',
    email: '',
    profile: null,
  })

  const [error, setError] = useState('')
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      name: event.target.value,
    }))
  }
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      email: event.target.value,
    }))
  }

  const handleAgeChange = (valueAsString: string, valueAsNumber: number) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      age: valueAsNumber,
    }))
  }

  useEffect(() => {
    if (selectedOption !== 'Gender') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        gender: selectedOption,
      }))
    }
  }, [selectedOption])

  return (
    <>
      <Modal isOpen={open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent bg={'black'} color={'white'}>
          <ModalHeader>Sign Up</ModalHeader>
          <Box pl={3} pr={3}>
            <ModalCloseButton />
            <ModalBody display={'flex'} flexDirection={'column'} py={'10px'}>
              <Flex width={'100%'} justify={'center'} align='center' flexDir={'column'}>
                <AvatarWithFileManager
                  avatarSrc={avatarSrc}
                  setAvatarSrc={setAvatarSrc}
                  selectedFile={selectedFile}
                  setSelectedFile={setSelectedFile}
                />
                <Text fontWeight={600} fontSize={15} mt={3}>
                  Upload a picture
                </Text>
                <Text fontSize={11} color={'gray.500'} mb={5}>
                  Accepted file types: JPG, PNG. Maximum file size: 10 MB.
                </Text>
              </Flex>

              <FormControl>
                <Flex flexDir={'column'} mb={3}>
                  <FormLabel fontWeight={600} fontSize={15}>
                    Name
                  </FormLabel>
                  <InputGroup>
                    <Input
                      value={formData.name}
                      onChange={handleNameChange}
                      placeholder='Enter Name'
                    />
                  </InputGroup>
                </Flex>
                <Flex flexDir={'column'} mb={3}>
                  <FormLabel fontWeight={600} fontSize={15}>
                    Email
                  </FormLabel>
                  <InputGroup>
                    <Input
                      value={formData.email}
                      onChange={handleEmailChange}
                      placeholder='Enter Email'
                    />
                  </InputGroup>
                </Flex>
                <Flex flexDir={'column'} mb={3}>
                  <FormLabel fontWeight={600} fontSize={15}>
                    Gender
                  </FormLabel>
                  <Menu isLazy>
                    <MenuButton
                      as={Button}
                      variant={'unstyled'}
                      bg={'buttonClr.100'}
                      rightIcon={<ChevronDownIcon />}
                    >
                      {selectedOption}
                    </MenuButton>
                    <MenuList bg={'black'}>
                      {options.map((option) => (
                        <MenuItem
                          bg={'black'}
                          color={'white'}
                          key={option}
                          onClick={() => setSelectedOption(option)}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                </Flex>
                <Flex flexDir={'column'} mb={3}>
                  <FormLabel fontWeight={600} fontSize={15}>
                    Age
                  </FormLabel>
                  <NumberInput min={10} max={100} value={formData.age} onChange={handleAgeChange}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Flex>
                {/* <Flex flexDir={'column'} mb={3}>
                  <FormLabel fontWeight={600} fontSize={15}>
                    OTP
                  </FormLabel>
                  <HStack>
                    <PinInput>
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                    </PinInput>
                  </HStack>
                </Flex> */}
                <Flex flexDir={'column'} mb={3}>
                  <FormLabel fontWeight={600} fontSize={15}>
                    Password
                  </FormLabel>
                  <PasswordInput formData={formData} setFormData={setFormData} />
                </Flex>
              </FormControl>
            </ModalBody>
          </Box>
          <ModalFooter>
            <Button
              mr={3}
              onClick={() => {
                resetState()
                handleClose()
              }}
            >
              Cancel
            </Button>
            <Button
              bg='black'
              border={'1px solid white'}
              cursor={!validCommunity ? 'not-allowed' : 'cursor'}
              isDisabled={!validCommunity}
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default RegisterModal
