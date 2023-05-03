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
import React, { useContext, useState } from 'react'
import { AvatarWithFileManager } from '../components/FileUploader'
import PasswordInput from '../components/PasswordInput'
import { AuthContext } from '../hooks/useAuth'

interface Props {
  open: boolean
  handleClose: () => void
}

const RegisterModal: React.FC<Props> = ({ open, handleClose }) => {
  const options = ['Male', 'Female', 'Others']
  const [selectedOption, setSelectedOption] = useState('Gender')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [avatarSrc, setAvatarSrc] = useState<string>('')
  const [communityName, setCommunityName] = useState('')
  const [charsRemaining, setCharsRemaining] = useState(25)
  const [validCommunity, setValidCommunity] = useState(false)
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

  const resetState = () => {
    setCommunityName('')
    setCharsRemaining(25)
    setValidCommunity(false)
    setSelectedFile(null)
    setAvatarSrc('')
  }
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

              <Flex flexDir={'column'} mb={3}>
                <Text fontWeight={600} fontSize={15}>
                  Name
                </Text>
                <InputGroup>
                  <Input value={communityName} onChange={handleChange} placeholder='Enter Name' />
                </InputGroup>
              </Flex>
              <Flex flexDir={'column'} mb={3}>
                <Text fontWeight={600} fontSize={15}>
                  Email
                </Text>
                <InputGroup>
                  <Input placeholder='Enter Email' />
                </InputGroup>
              </Flex>
              <Flex flexDir={'column'} mb={3}>
                <Text fontWeight={600} fontSize={15}>
                  Gender
                </Text>
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
                <Text fontWeight={600} fontSize={15}>
                  Age
                </Text>
                <NumberInput min={10} max={100}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Flex>
              <Flex flexDir={'column'} mb={3}>
                <Text fontWeight={600} fontSize={15}>
                  OTP
                </Text>
                <HStack>
                  <PinInput>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </HStack>
              </Flex>
              <Flex flexDir={'column'} mb={3}>
                <Text fontWeight={600} fontSize={15}>
                  Password
                </Text>
                <PasswordInput />
              </Flex>
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
              onClick={handleClose}
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
