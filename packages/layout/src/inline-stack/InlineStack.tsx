import { Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface InlineStackProps {
  children:ReactNode,
}

export const InlineStack = (props:InlineStackProps) =>{
  const { children } = props;
  return(  
    <Stack
      direction={{ base: 'column', md: 'row' }}
      spacing={{ base: '1.5', md: '24' }}
      justify="space-between"
    >
      {children}
    </Stack>
  )
}