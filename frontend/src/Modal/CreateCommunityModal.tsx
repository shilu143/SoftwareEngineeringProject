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
import React from 'react'

interface Props {
  open: boolean
  handleClose: () => void
}

const CreateCommunityModal: React.FC<Props> = ({ open, handleClose }) => {
  return (
    <>
      <Modal isOpen={open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent bg={'black'} color={'white'}>
          <ModalHeader>Create Community</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Enter the community name</ModalBody>
          {/* localStorage.setItem('Name', name); */}
          <ModalFooter>
            <Button mr={3} onClick={handleClose}>
              Close
            </Button>
            <Button bg='black' border={'1px solid white'}>
              Create Community
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreateCommunityModal
