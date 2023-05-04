import { Flex, Icon, Image, MenuItem } from '@chakra-ui/react'
import React from 'react'
import { IconType } from 'react-icons'
import { GrGoogleWallet } from 'react-icons/gr'
type MenuListItemsProps = {
  displayText: string
  //   link: string
  //   icon: IconType
  iconColor: string
  imageURL?: string
  onClick?: () => void;
}

const MenuListItems: React.FC<MenuListItemsProps> = ({
  displayText,
  //   link,
  //   icon,
  iconColor,
  imageURL,
  onClick
}) => {
  return (
    <MenuItem
      width={'100%'}
      fontSize={'10pt'}
      bg='black'
      borderRadius={'5px'}
      _hover={{ bg: 'back.100' }}
      onClick={onClick}
    >
      <Flex align='center'>
        {imageURL ? (
          <Image src={imageURL} borderRadius={'full'} boxSize={'18px'} mr={2} />
        ) : (
          <Icon as={GrGoogleWallet} fontSize={20} mr={2} color={iconColor} />
        )}
        {displayText}
      </Flex>
    </MenuItem>
  )
}
export default MenuListItems
