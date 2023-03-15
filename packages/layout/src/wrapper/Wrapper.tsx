import { Box, Container, useBreakpointValue } from '@chakra-ui/react';
import { ReactNode } from "react";

export interface WrapperProps {
  children: ReactNode,
}

export const Wrapper: React.FC<WrapperProps> = (props: WrapperProps) => {
  
  const { children } = props;

  const maxW = useBreakpointValue({
    base: '200rem', 
    sm: '200rem', 
    md: '200rem', 
    lg: '100rem', 
    xl: '60rem', 
    '2xl': '60rem',
  });

  return (
    <Box bg="portal.bg" minH="100vh">
      <Container bg="portal.content" minH="100vh" p={0} maxW={maxW}>
        { children }
      </Container>
    </Box>
  );
}