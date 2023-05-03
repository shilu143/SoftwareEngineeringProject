import { Search2Icon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { Flex } from '@chakra-ui/react'
import React from 'react'

function SearchInput() {
  return (
    <Flex flexGrow={1} mx={4}>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <Search2Icon color='gray.300' />
        </InputLeftElement>
        <Input
          type='tel'
          placeholder='Search'
          bg='back.100'
          color='white'
          _placeholder={{ color: 'gray.500' }}
        />
      </InputGroup>
    </Flex>
  )
}

export default SearchInput
