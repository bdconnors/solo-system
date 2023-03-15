import React, { ReactNode } from 'react';
import {As, Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

export interface SearchBarProps {
  icon:As | null,
  onSubmit?:(e:any)=>void
}

export const SearchBar: React.FC<SearchBarProps> = (props:SearchBarProps) => {
  const { icon, onSubmit } = props;
  return (
    <InputGroup>
      { icon && 
        <InputLeftElement pointerEvents="none">
          <Icon as={icon} color="muted" boxSize="5" />
        </InputLeftElement>
      }
      <Input placeholder="Search" onSubmit={onSubmit}/>
    </InputGroup>
  );
}
