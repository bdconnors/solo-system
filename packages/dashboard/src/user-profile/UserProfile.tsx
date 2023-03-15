import { Avatar, Box, Center, HStack, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Portal, Text } from '@chakra-ui/react'
import { DashboardUser } from 'config';

export interface UserProfileProps {
  user:DashboardUser,
  signOut:()=>void
}

export const UserProfile = (props:UserProfileProps) => {
  const { user, signOut } = props;
  return (
    <Menu>
      <MenuButton>
        <HStack spacing="3" ps="2">
          <Avatar 
            name={ user?.name }
            src={ user?.photoURL } 
            size="md" 
          />
          <Box>
            <Text fontWeight="medium" fontSize="sm" color="on-accent">
              {user?.name}
            </Text>
            <Text fontSize="sm" color="on-accent-muted">
              {user?.email}
            </Text>
          </Box>           
        </HStack> 
      </MenuButton>
      <Portal>
        <MenuList alignItems={'center'}>
          <Center>
            <Avatar size={'lg'} src={user?.photoURL}/>
          </Center>
          <Center>
            <Text>{user?.name}</Text>
          </Center>
          <MenuDivider />
          <MenuItem>Account Settings</MenuItem>
          <MenuItem onClick={()=>signOut()}>Logout</MenuItem>
        </MenuList> 
      </Portal>
    </Menu> 
  )
}
