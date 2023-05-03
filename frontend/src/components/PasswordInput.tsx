import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import * as React from 'react'

const PasswordInput: React.FunctionComponent = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <InputGroup size='md'>
      <Input pr='4.5rem' type={show ? 'text' : 'password'} placeholder='Enter password' />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' variant={'outline'} size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default PasswordInput
