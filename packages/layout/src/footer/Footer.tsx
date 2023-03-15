import { FC, ReactNode } from 'react';
import { Flex, VStack, Box, useBreakpointValue } from '@chakra-ui/react';

export interface FooterProps {
  children: ReactNode;
}

export const Footer:FC<FooterProps> = (props: FooterProps) => {

  const { children } = props;
  
  const textSize = useBreakpointValue({
    base: 'xs', 
    xs: 'xs', 
    md: 'md', 
    lg: 'md', 
    xl: 'md', 
    '2xl': 'md',
  });

  return (
    <Flex __css={{
      w: 'full',
      minHeight: '20vh',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      left: 0,
      bottom: 0,
      right: 0,
      py: 10,
    }}>
      <Box mt="auto">
        <VStack spacing={4} fontSize={textSize}>
          { children }
        </VStack>
      </Box>
    </Flex>
  );
};