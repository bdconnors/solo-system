import { Avatar, Box, BoxProps, Flex, HStack, Stack, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import React, { ReactElement, ReactNode } from 'react';

export interface ListCardProps extends BoxProps {
  children:ReactNode,
  title:string,
  photo?:string,
  menu?:ReactElement<ListCardMenuProps>,
  onClick?:()=>void
}

export const ListCard = (props:ListCardProps) => {
  const {children, menu, photo, title, onClick, ...boxProps} = props;
  const smallScreen = useBreakpointValue({
    base: true, 
    xs: true, 
    sm: false, 
    md: false, 
    lg: false,
    xl: false, 
    '2xl': false,
  });
  return (
    <Box
      onClick={onClick}
      bg={useColorModeValue('white', 'gray.700')}
      mx="auto"
      p={{ base: '6', md: '8' }}
      mb={2}
      rounded={{ sm: 'lg' }}
      shadow={{ md: 'base' }}
      {...boxProps}
    >
      <Stack fontSize="sm" px="4" >
        <Stack direction={smallScreen ? 'column' : 'row'} justify="space-between">
          { smallScreen && menu}
          <HStack>
            <Avatar src={photo} boxSize="10"/>
            <Box w={'full'} px={2}>
              <Text fontWeight="medium" color="emphasized">{title}</Text>
              { children }
            </Box>
          </HStack>
          {!smallScreen && menu }
        </Stack>
      </Stack>
    </Box>
  );
};

export interface ListCardMenuProps {
  children:ReactNode
}

const ListCardMenu = (props:ListCardMenuProps) => {
  const { children } = props;
  return (
    <Flex justifyContent="space-between" alignItems="center">
      { children }
    </Flex>
  );
};

ListCard.Menu = ListCardMenu;
