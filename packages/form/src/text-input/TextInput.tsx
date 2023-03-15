import { Input } from '@chakra-ui/react';
import { ControllerRenderProps, useController } from 'react-hook-form';
import { ControllableInput } from 'controllable-input';
import { InputLayout } from '@solo-system/layout';

export interface TextInputProps extends ControllableInput {
  placeholder?: string,
  bg?:string,
  type?:string,
  maxW?:string,
}

export const TextInput = (props:TextInputProps) => {

  const { bg, type, maxW, placeholder, options, ...controller } = props;
  const { field, fieldState } = useController(controller);

  const fieldProps: ControllerRenderProps | undefined = controller.control ? { ...field } : undefined;

  return (
    <InputLayout 
      inline={options?.inline} 
      label={options?.label} 
      error={controller.control ? fieldState.error?.message : options?.error}
    >
      <Input placeholder={placeholder} maxW={maxW} bg={bg} {...fieldProps} />
    </InputLayout>
  );
};

TextInput.defaultProps = {
  bg:'white',
  type:'tel',
  defaultValue:''
};