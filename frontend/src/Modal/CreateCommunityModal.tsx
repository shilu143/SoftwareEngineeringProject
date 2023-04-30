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
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsPatchCheckFill, BsPatchExclamationFill } from 'react-icons/bs'
import { UploadButton } from 'react-uploader'
import { Uploader } from 'uploader'

interface Props {
  open: boolean
  handleClose: () => void
}

const CreateCommunityModal: React.FC<Props> = ({ open, handleClose }) => {
  const [communityName, setCommunityName] = useState('')
  const [charsRemaining, setCharsRemaining] = useState(25)
  const [validCommunity, setValidCommunity] = useState(false)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 25) {
      setCommunityName(event.target.value)
      setCharsRemaining(25 - event.target.value.length)
    }
  }
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState('')
  const [tagError, setTagError] = useState(false)

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

  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleUpload = () => {
    console.log(selectedFile)
    // Add your upload logic here
  }
  const options = { multi: true }

  const uploader = Uploader({
    apiKey: 'free',
  })
  const resetState = () => {
    setCommunityName('')
    setCharsRemaining(25)
    setValidCommunity(false)
    setTags([])
    setTagInput('')
    setTagError(false)
  }
  return (
    <>
      <Modal isOpen={open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent bg={'black'} color={'white'}>
          <ModalHeader>Create Community</ModalHeader>
          <Box pl={3} pr={3}>
            <ModalCloseButton />
            <ModalBody display={'flex'} flexDirection={'column'} py={'10px'}>
              <Text fontWeight={600} fontSize={15}>
                Name
              </Text>
              <Text fontSize={11} color={'gray.500'} mb={3}>
                Make your community easy to find with a clear and concise name
              </Text>
              <InputGroup>
                <Input
                  value={communityName}
                  onChange={handleChange}
                  placeholder='Enter community name'
                />
                <InputRightElement>
                  {charsRemaining !== 25 && (
                    <>
                      {validCommunity ? (
                        <Icon as={BsPatchCheckFill} color='green.600' />
                      ) : (
                        <Icon as={BsPatchExclamationFill} color='red.600' />
                      )}
                    </>
                  )}
                </InputRightElement>
              </InputGroup>
              <Flex mt={2} justify={'space-between'}>
                <Text fontSize={12} color={charsRemaining == 0 ? 'red.500' : 'gray.500'}>
                  {charsRemaining} characters remaining
                </Text>
                {charsRemaining !== 25 && (
                  <>
                    {!validCommunity ? (
                      <Text fontSize={12} color={'red.500'}>
                        community name already in use
                      </Text>
                    ) : (
                      ''
                    )}
                  </>
                )}
              </Flex>
              <Box mt={4}>
                <Flex flexWrap='wrap' flexDir={'column'}>
                  <Text fontWeight={600} fontSize={15}>
                    Tags
                  </Text>
                  <Text fontSize={11} color={'gray.500'} mb={3}>
                    Help us build your community by adding relevant tags
                  </Text>
                  <Input
                    value={tagInput}
                    placeholder='Add tag'
                    // size='sm'
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    isInvalid={tagError}
                    mb={3}
                  />
                  <Box>
                    {tags.map((tag, index) => (
                      <Tag key={index} mr={2} mb={2} size='md' variant='subtle' colorScheme='cyan'>
                        <TagLabel>{tag}</TagLabel>
                        <TagCloseButton onClick={() => removeTag(index)} />
                      </Tag>
                    ))}
                  </Box>
                  <Box>
                    <Text fontWeight={600} fontSize={15} mt={3}>
                      Upload a picture for your community
                    </Text>
                    <Text fontSize={11} color={'gray.500'} mb={3}>
                      Accepted file types: JPG, PNG. Maximum file size: 10 MB.
                    </Text>
                    <UploadButton
                      uploader={uploader}
                      options={options}
                      onComplete={(files) => {
                        if (files.length === 0) {
                          console.log('No files selected.')
                        } else {
                          console.log('Files uploaded:')
                          console.log(files.map((f) => f.fileUrl))
                        }
                      }}
                    >
                      {({ onClick }) => (
                        <Button onClick={onClick}>
                          Upload Pic
                          <input
                            type='file'
                            accept='.png, .jpeg'
                            style={{ display: 'none' }} // hide the default file input
                          />
                        </Button>
                      )}
                    </UploadButton>
                  </Box>
                </Flex>
              </Box>
            </ModalBody>
          </Box>
          <ModalFooter>
            <Button
              mr={3}
              onClick={() => {
                handleClose()
                resetState()
              }}
            >
              Cancel
            </Button>
            <Button
              bg='black'
              border={'1px solid white'}
              cursor={!validCommunity ? 'not-allowed' : 'cursor'}
              isDisabled={!validCommunity}
            >
              Create Community
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreateCommunityModal
