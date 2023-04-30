import { Button } from '@chakra-ui/button'

function AuthButtons() {
  return (
    <>
      <Button
        variant={'outline'}
        display={{ base: 'none', sm: 'flex' }}
        width={{ base: '70px', md: '110px' }}
        mr={2}
      >
        Log In
      </Button>
      <Button
        variant={'solid'}
        display={{ base: 'none', sm: 'flex' }}
        width={{ base: '70px', md: '110px' }}
        mr={2}
      >
        Sign Up
      </Button>
    </>
  )
}

export default AuthButtons
