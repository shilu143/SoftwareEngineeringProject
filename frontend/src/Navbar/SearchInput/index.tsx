import { Search2Icon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import React from 'react'

function SearchInput() {
  return (
    <InputGroup width={{ base: '60%', md: '20%' }}>
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
  )
}

export default SearchInput
