import React, { ReactNode } from 'react';
import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react';
import { ControllerRenderProps, useController } from 'react-hook-form';
import { TextInputProps } from '..';
import { InputLayout } from '@solo-system/layout';

export interface PasswordInputProps extends TextInputProps {
  toggle?: { showElement:ReactNode, hideElement:ReactNode }
}

export const PasswordInput = (props:PasswordInputProps) => {

  const { bg, type, maxW, placeholder, toggle, options, ...controller } = props;
  const { field, fieldState } = useController(controller);

  const fieldProps: ControllerRenderProps | undefined = controller.control ? { ...field } : undefined;

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  
  return (
    <InputLayout 
      inline={options?.inline} 
      label={options?.label} 
      error={controller.control ? fieldState.error?.message : options?.error}
    >
        <InputGroup maxW={maxW}>
          <Input 
            {...fieldProps} 
            type={ show ? 'text' : 'password'}
            placeholder={placeholder} 
            maxW={maxW}
            bg={ bg }
          />
            {toggle && 
              <InputRightAddon
                aria-label={show ? 'Reveal password' : 'Mask password'}
                onClick={handleClick}
              >
                {show ?  toggle.showElement : toggle.hideElement }
              </InputRightAddon>
            }
        </InputGroup>
    </InputLayout>
  );
};

PasswordInput.defaultProps = {
  bg:'white',
  defaultValue:''
};