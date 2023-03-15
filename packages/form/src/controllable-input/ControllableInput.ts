import { InputLayoutNativeProps } from '@solo-system/layout';
import { UseControllerProps } from 'react-hook-form';

export interface ControllableInput extends UseControllerProps { 
  options?:InputLayoutNativeProps
}