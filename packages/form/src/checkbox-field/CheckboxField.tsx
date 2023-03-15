import { Checkbox } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { ControllerRenderProps, useController } from 'react-hook-form';
import { UseControllerProps } from 'react-hook-form';
import { ControllableInput } from 'controllable-input';
import { InputLayout } from '@solo-system/layout';

export interface CheckboxFieldNativeProps extends UseControllerProps {
  children: ReactNode,
}
export type CheckboxFieldProps = CheckboxFieldNativeProps & ControllableInput;

export const CheckboxField = (props:CheckboxFieldProps) => {
  const { children,  options, ...controller } = props;
  const { field, fieldState } = useController(controller);
  
  const fieldProps: ControllerRenderProps | undefined = controller.control ? { ...field } : undefined;

  return (
    <InputLayout 
      inline={options?.inline} 
      label={options?.label} 
      error={controller.control ? fieldState.error?.message : options?.error}
    >      <Checkbox {...fieldProps}>
        { children }
      </Checkbox>
    </InputLayout>

  );
}