import React, { ReactElement } from 'react';
import { Select } from '@chakra-ui/react';
import { ControllerRenderProps, useController } from 'react-hook-form';
import { ControllableInput } from 'controllable-input';
import { InputLayout } from '@solo-system/layout';

export interface DropdownNativeProps {
  bg?:string,
  maxW?:string,
  children: ReactElement<React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>>[],
}
export type DropdownProps = DropdownNativeProps & ControllableInput;

export const Dropdown = (props: DropdownProps) => {
  const { bg, maxW, children, options, ...controller } = props;

  const { field, fieldState } = useController(controller);

  const fieldProps: ControllerRenderProps | undefined = controller.control ? { ...field } : undefined;

  return (
    <InputLayout 
      inline={options?.inline} 
      label={options?.label} 
      error={controller.control ? fieldState.error?.message : options?.error}
    >
      <Select bg={bg} maxW={maxW} {...fieldProps}>
        { children }
      </Select>
    </InputLayout>
  );
};