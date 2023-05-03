import { ChevronDownIcon, Icon } from '@chakra-ui/icons'
import { Flex, Text } from '@chakra-ui/layout'
import { Menu, MenuButton, MenuList } from '@chakra-ui/menu'
import React, { useContext, useEffect, useState } from 'react'
import { TiHome } from 'react-icons/ti'
import Communities from './Communities'
import { AuthContext } from '../../hooks/useAuth'
import axios from 'axios'
interface Community {
  comid: number
  comname: string
  category: string[]
  communityprofileimage: string
  timeCreated: string
}

function Directory() {
  // handleChange()
  return (
    <Menu>
      <MenuButton
        cursor={'pointer'}
        padding={'0.5em 1em'}
        borderRadius={4}
        bg={'black'}
        mx={'0.5em'}
        _hover={{ outline: '1px solid', outlineColor: 'palette.200' }}
      >
        <Flex align={'center'} justify={'space-between'} width={{ base: 'auto', lg: '200px' }}>
          <Flex align={'center'}>
            <Icon fontSize={24} mr={{ base: 1, md: 2 }} as={TiHome} />
            <Flex display={{ base: 'none', lg: 'flex' }}>
              <Text fontWeight={600}>Home</Text>
            </Flex>
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList bg={'black'} px={'0.5em'}>
        <Communities />
      </MenuList>
    </Menu>
  )
}

export default Directory
