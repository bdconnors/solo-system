import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import { VerticalNavbar } from "vertical-navbar";
import { MobileNavbar } from "mobile-navbar";
import { DashboardConfig, DashboardUser } from "config";

export interface DashboardProps {
  children:ReactNode,
  active:string,
  user:DashboardUser,
  config:DashboardConfig,
  onSearch?:(e:any)=>void,
  signOut:()=>void
}

export const Dashboard = (props:DashboardProps) => {
  const { children, active, user, config, onSearch, signOut } = props;
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const Navbar = isDesktop ? VerticalNavbar : MobileNavbar;
  return(
    <Flex
      as="section"
      direction={{ base: 'column', lg: 'row' }}
      height="100vh"
      bg="bg-"
      overflowY="auto"
    >
      <Navbar 
        active={active} 
        brand={config.brand} 
        menu={config.menu} 
        search={config.search}
        user={user}
        onSearch={onSearch}
        signOut={signOut}
      />
      <Box bg="bg-accent" pt={{ base: '0', lg: '3' }} flex="1">
        <Box bg="bg-canvas" borderTopLeftRadius={{ base: 'none', lg: '2rem' }} height="full">

          { children }
  
        </Box>
      </Box>
    </Flex>
  )
};