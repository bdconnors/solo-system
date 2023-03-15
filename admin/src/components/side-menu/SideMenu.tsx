import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react"
import { ReactNode } from "react";

export interface SideMenuProps {
  isOpen:boolean,
  onClose:()=>void,
  children:ReactNode,
  overlay?:boolean,
  title?:string
}
export const SideMenu = (props:SideMenuProps) => {
  const { isOpen, onClose, title, children, overlay } = props;
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (  
    <Drawer onClose={onClose} isOpen={isOpen} size={'xs'} placement={isDesktop ? 'right' : 'bottom'}>
      { overlay && <DrawerOverlay/> }
    <DrawerContent  bg="bg-canvas" color={'black'} borderRadius={'lg'}>
      <DrawerCloseButton color={'black'}/>
      {title && <DrawerHeader>{title}</DrawerHeader> }
      <DrawerBody>
        { children }
      </DrawerBody>
    </DrawerContent>
  </Drawer>
  )
}