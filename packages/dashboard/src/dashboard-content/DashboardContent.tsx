import { Box, Container, Heading, Stack, useBreakpointValue, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export interface DashboardContentProps {
  title:string,
  subtitle?:string,
  menu?:ReactNode,
  children?:ReactNode,
  bg?:string
}

export const DashboardContent = (props:DashboardContentProps) => {
  const { children, title, subtitle, menu, bg} = props;
  const headingSize = useBreakpointValue({ base: 'xs', lg: 'sm' });
  return (  
    <Container py="8" height="full">
      <Stack spacing={{ base: '8', lg: '6' }} height="full">
        <Stack
          spacing="4"
          direction={{ base: 'column', lg: 'row' }}
          justify="space-between"
          align={{ base: 'start', lg: 'center' }}
        >
          <Stack spacing="1">
              <Heading size={headingSize} fontWeight="medium">   
                { title }
              </Heading>
            { subtitle && <Text color="muted">{ subtitle }</Text> }
          </Stack>
          { menu }
        </Stack>

            { children }
      </Stack>
    </Container>
  );
};

export interface DashboardContentWrapperProps {
  children:ReactNode
}

const DashboardContentWrapper = (props:DashboardContentWrapperProps) => {
  const { children } = props;
  return(
    <Box 
      bg="bg-surface" 
      borderRadius="lg" 
      borderWidth="1px" 
      height="full" 
    >
      { children }
    </Box>
  )
}

DashboardContent.Wrapper = DashboardContentWrapper;
