import { Heading, Stack, StackProps } from '@chakra-ui/react';
import React from 'react';
import { ReactNode } from "react";

export interface SectionProps extends StackProps {
  heading?: string,
  headingSize?: string,
  children: ReactNode,
}

export const Section: React.FC<SectionProps> = (props:SectionProps) => {
  const {
    children, heading, py = 5, headingSize = 'md', ...stackProps
  } = props;
  return (
    <Stack direction="column" py={py} {...stackProps} spacing={4}>
      { heading ? <Heading size={headingSize}>{ heading }</Heading> : null }
      { children }
    </Stack>
  );
}