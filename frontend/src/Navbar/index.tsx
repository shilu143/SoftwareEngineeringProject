import { Box, Flex, Spacer } from '@chakra-ui/react'
import RightContent from './RightContent/RightContent'
import SearchInput from './SearchInput'

const Navbar = () => {
  return (
    <Flex
      align='center'
      justify='space-between'
      height={16}
      px={4}
      py={2}
      bg={'blackAlpha.500'}
      color='white'
    >
      {/* <Flex align='center' display={{ base: 'none', md: 'initial' }}>
        <img src='/logo512.png' alt='Logo' width={32} height={32} /> */}
      <Box as='span' ml={2} fontWeight='bold' fontSize={24} display={{ base: 'none', md: 'unset' }}>
        Reddit
      </Box>
      {/* </Flex> */}
      {/* <Spacer /> */}
      {/* <Spacer /> */}
      {/* <Flex width={'100vw'} position={'fixed'} justify={'center'}> */}
      <SearchInput />
      <RightContent />
      {/* <Spacer /> */}
      {/* </Flex> */}
    </Flex>
  )
}

export default Navbar
