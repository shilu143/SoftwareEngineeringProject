import React, { useContext, useEffect, useState } from 'react'
import AuthButtons from './AuthButtons'
import { Flex } from '@chakra-ui/layout'
import Directory from '../Directory/Directory'
import { Avatar, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { AuthContext } from '../../context/AuthContext'
import Cookies from 'js-cookie'
import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons'
import { setSourceMapRange } from 'typescript'

const RightContent = () => {
  const { user, setUser } = useContext(AuthContext)
  const [email, setEmail] = useState<string>('')
  const handleLogout = () => {
    setUser(null)
    Cookies.remove('email')
    Cookies.remove('authToken')
    Cookies.remove('profileImage')
  }

  useEffect(() => {
    setEmail(user?.email || '')
  }, [user])

  return (
    <Flex justify={'center'} align={'center'}>
      <Directory />
      {user?.token ? (
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<Avatar name={email} src={user?.profileImage} />}
            border={'none'}
            variant='unstyled'
          />
          <MenuList bg={'black'} color={'white'}>
            <MenuItem bg={'black'} color={'white'}>
              Profile
            </MenuItem>
            <MenuItem bg={'black'} color={'white'} onClick={handleLogout}>
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <AuthButtons />
      )}
    </Flex>
  )
}

export default RightContent
