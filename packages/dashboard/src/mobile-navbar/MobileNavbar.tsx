import { Box, Flex, useColorModeValue, useDisclosure, Image, Drawer, DrawerContent, DrawerOverlay, As } from "@chakra-ui/react";
import { DashboardMenu, DashboardSearch, DashboardUser } from "config";
import { ToggleButton } from "mobile-navbar/ToggleButton";
import { VerticalNavbar } from "../vertical-navbar/VerticalNavbar";

export interface MobileNavbarProps {
  brand:string,
  active:string,
  menu:DashboardMenu,
  user:DashboardUser,
  search?:As,
  onSearch?:(e:any)=>void,
  signOut:()=>void
}
export const MobileNavbar = (props:MobileNavbarProps) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { brand } = props;
  return (
    <Box
      width="full"
      py="4"
      px={{ base: '4', md: '8' }}
      bg="bg-accent"
      boxShadow={useColorModeValue('sm', 'sm-dark')}
    >
      <Flex justify="space-between">
        <Image src={ brand }/>
        <ToggleButton isOpen={isOpen} aria-label="Open Menu" onClick={onToggle} />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          isFullHeight
          preserveScrollBarGap
          trapFocus={false}
        >
          <DrawerOverlay />
          <DrawerContent>
            <VerticalNavbar { ...props}/>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  )
}