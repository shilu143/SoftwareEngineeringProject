import { Avatar, AvatarBadge, Icon, IconButton, useToast } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'
import { FiEdit } from 'react-icons/fi'

interface AvatarWithFileManagerProps {
  avatarSrc: string
  setAvatarSrc: Dispatch<SetStateAction<string>>
  selectedFile: File | null
  setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>
}

export function AvatarWithFileManager({
  avatarSrc,
  setAvatarSrc,
  selectedFile,
  setSelectedFile,
}: AvatarWithFileManagerProps) {
  const toast = useToast()

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files?.[0]
    if (file) {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg']
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: 'Invalid file type',
          description: 'Please select a JPG, PNG, or JPEG file.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        return
      }
      const reader = new FileReader()
      reader.onload = (event) => {
        setAvatarSrc(event.target?.result as string)
        setSelectedFile(file)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <>
      <Avatar size='lg' src={avatarSrc}>
        <AvatarBadge boxSize='1em' bg='gray.500'>
          <IconButton
            aria-label='Edit avatar'
            icon={<Icon as={FiEdit} />}
            size='xs'
            isRound
            onClick={() => document.getElementById('file-input')?.click()}
          />
        </AvatarBadge>
      </Avatar>
      <input
        type='file'
        id='file-input'
        style={{ display: 'none' }}
        accept='.jpg,.png,.jpeg'
        onChange={handleFileSelect}
      />
    </>
  )
}
