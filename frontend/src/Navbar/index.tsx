import { Avatar } from '@chakra-ui/avatar'
import { Button } from '@chakra-ui/button'
import { ChevronDownIcon, Search2Icon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { Badge } from '@chakra-ui/layout'
import SearchInput from './SearchInput'
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  border,
  useMediaQuery,
} from '@chakra-ui/react'
import { useState } from 'react'
import AuthButtons from './RightContent/AuthButtons'
import RightContent from './RightContent/RightContent'
import Directory from './Directory/Directory'

const Navbar = () => {
  const options = [
    { value: 'community1', label: 'Community1' },
    { value: 'community2', label: 'Community2' },
    { value: 'community3', label: 'Community3' },
  ]
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
  const [selectedOption, setSelectedOption] = useState('')

  const handleSelectChange = (e: any) => {
    setSelectedOption(e.target.value)
  }

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
      {/* Logo or brand name */}
      <Flex align='center'>
        <img src='/logo512.png' alt='Logo' width={32} height={32} />
        <Box as='span' ml={2} fontWeight='bold' display={{ base: 'none', md: 'unset' }}>
          Reddit
        </Box>
      </Flex>

      <Spacer />

      <SearchInput />
      {/* <Directory /> */}
      <Spacer />
      <RightContent />

      {/* <Spacer /> */}

      {/* Dropdown menu */}
      {/* {isLargerThan768 && (
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            bg='blackAlpha.700'
            _hover={{ bg: 'palete.800' }}
            _active={{ bg: 'palete.900' }}
          >
            {selectedOption || 'Home'}
          </MenuButton>
          <MenuList bg='blackAlpha.700'>
            {options.map((option) => (
              <MenuItem
                key={option.value}
                onClick={() => setSelectedOption(option.value)}
                bg='blackAlpha.700'
                _hover={{ bg: 'palete.600' }}
                _active={{ bg: 'palete.900' }}
              >
                {option.label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      )} */}
    </Flex>
  )
}

export default Navbar
