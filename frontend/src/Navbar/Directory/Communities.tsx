import { Icon } from '@chakra-ui/icon'
import { AddIcon } from '@chakra-ui/icons'
import { Flex } from '@chakra-ui/layout'
import { MenuItem } from '@chakra-ui/menu'
import CreateCommunityModal from '../../Modal/CreateCommunityModal'
import { useState } from 'react'

const Communities = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <CreateCommunityModal open={open} handleClose={() => setOpen(false)} />
      <MenuItem
        bg={'black'}
        color={'white'}
        width={'100%'}
        fontSize={'10pt'}
        onClick={() => setOpen(true)}
      >
        <Flex align={'center'}>
          <Icon as={AddIcon} color='white' mr={2} fontSize={12} />
          <Flex>Create Community</Flex>
        </Flex>
      </MenuItem>
    </div>
  )
}

export default Communities
