import { Flex, useColorModeValue, Divider, Stack, As, Image} from '@chakra-ui/react'
import { DashboardMenu, DashboardUser } from 'config';
import { DashboardNavMenu } from 'dashboard-nav-menu';
import { SearchBar } from 'search-bar';
import { UserProfile } from '../user-profile/UserProfile';
export interface VerticalNavbarProps {
  brand:string,
  active:string,
  search?:As,
  menu:DashboardMenu,
  user:DashboardUser,
  onSearch?:(e:any)=>void,
  signOut:()=>void
}
export const VerticalNavbar = (props:VerticalNavbarProps) => {
  const { search, user, menu, brand, active, onSearch, signOut } = props;
  return (
    <Flex as="section" minH="100vh" bg="bg-canvas">
      <Flex
        flex="1"
        bg="bg-accent"
        overflowY="auto"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
        maxW={{ base: 'full', sm: 'xs' }}
        py={{ base: '6', sm: '8' }}
        px={{ base: '4', sm: '6' }}
      >
        <Stack justify="space-between" spacing="1">
          <Stack spacing={{ base: '5', sm: '6' }} shouldWrapChildren>
            <Image src={brand}/>
            { search && <SearchBar icon={ search } onSubmit={ onSearch }/>}
            <Stack spacing="10">
              <DashboardNavMenu buttons={menu.top} active={active}/>
            </Stack>
          </Stack>
          <Stack spacing={{ base: '5', sm: '6' }}>
            <DashboardNavMenu buttons={menu.bottom} active={active}/>
            <Divider/>
            <UserProfile user={user} signOut={signOut}/>
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
}