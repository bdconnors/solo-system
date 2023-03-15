
import { Switch } from '@chakra-ui/react';
import { ControllerRenderProps, useController } from 'react-hook-form';
import { ControllableInput } from 'controllable-input';
import { InputLayout } from '@solo-system/layout';

export interface ToggleInputProps extends ControllableInput {
  colorScheme?: string,
}

export const ToggleInput = (props:ToggleInputProps) => {

  const { colorScheme, options, ...controller } = props;
  const { field, fieldState } = useController(controller);

  const fieldProps: ControllerRenderProps | undefined = controller.control ? { ...field } : undefined;

  return (
    <InputLayout 
      inline={options?.inline} 
      label={options?.label} 
      error={controller.control ? fieldState.error?.message : options?.error}
    >
      <Switch 
        colorScheme={ colorScheme ? colorScheme : undefined} 
        {...fieldProps}
      />
    </InputLayout>
  );
}