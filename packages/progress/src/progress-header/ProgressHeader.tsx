import { Box, useBreakpointValue, Stack, HStack, VStack, Progress, Center } from '@chakra-ui/react';
import { useProgress } from 'progress-provider';
import React, { ReactNode } from 'react';

export interface ProgressHeaderProps {
  children: ReactNode,
}

export const ProgressHeader: React.FC<ProgressHeaderProps> = (props: ProgressHeaderProps) => {
  const { children } = props;

  const barWidth = useBreakpointValue({
    base: '15em', sm: '15em', md: '30em', lg: '55em', xl: '55em', '55em': '55em',
  });
  const isDesktop = useBreakpointValue({
    base: false, xs: false, sm: false, md: false, lg: true, xl: true, '2xl': true,
  });
  const [progress] = useProgress();
  const StackType = isDesktop ? HStack : VStack;
  return (
    <Stack direction="column" boxShadow="sm" bg="portal.content" pb={4} style={{ position: 'sticky', top: 0, zIndex: 2 }}>
      <Box p={5} bg="portal.content">
        <StackType>
          {children}
        </StackType>
      </Box>
      <Center>
        <Box px={5} bg="portal.content">
          <Progress value={progress.progress} borderRadius={12} border="2px" borderColor="gray.300" h="1em" w={barWidth} {...props} />
        </Box>
      </Center>
    </Stack>
  );
};