import React from 'react'
import { Box } from '@chakra-ui/layout'
import Llline from '../assets/images/llline.png'
import Navbar from '../Navbar'

type Props = {
  children: React.ReactNode
}

const Layout = (props: Props) => {
  return (
    <>
      <Box
        bg='back.100'
        position='fixed'
        top='0'
        bottom='0'
        left='0'
        right='0'
        backgroundImage={`url(${Llline})`}
        backgroundRepeat='cover'
      >
        <Navbar />
        <main>{props.children}</main>
      </Box>
    </>
  )
}

export default Layout
