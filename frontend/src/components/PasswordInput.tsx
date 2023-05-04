import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import * as React from 'react'

type FormData = {
  name: string
  gender: string
  age: number
  password: string
  email: string
  profile: File | null
}

interface PasswordInputProps {
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
}

const PasswordInput: React.FunctionComponent<PasswordInputProps> = ({ formData, setFormData }) => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        value={formData.password}
        onChange={(event) =>
          setFormData((prevFormData) => ({
            ...prevFormData,
            password: event.target.value,
          }))
        }
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' variant={'outline'} size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default PasswordInput
