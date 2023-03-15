import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react"
import { InlineStack } from "inline-stack";
import { Fragment, ReactNode } from "react";

export interface InputLayoutNativeProps {
  invalid?:boolean,
  inline?:boolean,
  label?:string,
  error?:string
}

export type InputLayoutProps = InputLayoutNativeProps & { children?:ReactNode }

export const InputLayout = (props:InputLayoutProps) => {
  const { invalid, label, error, inline, children} = props;
  const WrapperType = inline ? InlineStack : Fragment;
  return (    
    <FormControl isInvalid={ invalid }>  
        <WrapperType>
          { label ? <FormLabel>{ label }</FormLabel> : null }
          { children }
        </WrapperType>
      <FormErrorMessage>{ error }</FormErrorMessage>
    </FormControl>
  )
}