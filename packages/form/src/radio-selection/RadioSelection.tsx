import { ReactElement } from 'react';
import { RadioGroup, RadioProps, Stack } from '@chakra-ui/react';
import { ControllerRenderProps, useController } from 'react-hook-form';
import { ControllableInput } from 'controllable-input';
import { InputLayout } from '@solo-system/layout';

export interface RadioSelectionProps extends ControllableInput {
  children: ReactElement<RadioProps>[],
  direction?:'column' | 'row',
}

export const RadioSelection = (props: RadioSelectionProps) => {

  const { children, direction, options, ...controller } = props;
  const { field, fieldState } = useController(controller);

  const fieldProps: ControllerRenderProps | undefined = controller.control ? { ...field } : undefined;
  
  return (
    <InputLayout 
      inline={options?.inline} 
      label={options?.label} 
      error={controller.control ? fieldState.error?.message : options?.error}
    >
      <RadioGroup {...fieldProps}>
        <Stack direction={direction}>
          { children }
        </Stack>
      </RadioGroup>
    </InputLayout>

  );
};

RadioSelection.defaultProps = {
  direction:'column'
};