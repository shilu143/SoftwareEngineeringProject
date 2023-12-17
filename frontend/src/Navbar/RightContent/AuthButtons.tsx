import { Button } from '@chakra-ui/button'
import { useState } from 'react'
import LoginModal from '../../Modal/LoginModal'
import RegisterModal from '../../Modal/RegisterModal'

function AuthButtons() {
  const [openLogin, setOpenLogin] = useState(false)
  const [openRegister, setOpenRegister] = useState(false)
  return (
    <>
      <LoginModal open={openLogin} handleClose={() => setOpenLogin(false)} />
      <RegisterModal open={openRegister} handleClose={() => setOpenRegister(false)} />
      <Button
        variant={'outline'}
        display={{ base: 'none', sm: 'flex' }}
        width={{ base: '70px', md: '110px' }}
        mr={2}
        onClick={() => {
          setOpenLogin(true)
        }}
      >
        Log In
      </Button>
      <Button
        variant={'solid'}
        display={{ base: 'none', sm: 'flex' }}
        width={{ base: '70px', md: '110px' }}
        mr={2}
        onClick={() => {
          setOpenRegister(true)
        }}
      >
        Sign Up
      </Button>
    </>
  )
}

export default AuthButtons
