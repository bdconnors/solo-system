import { Box, useColorModeValue, useBreakpointValue, Stack, Container } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { LogoHeader } from "../logo-header";

export interface FormContentProps {
  children:ReactNode
}

export const FormContent = (props: FormContentProps) => {
  const { children } = props;

  const bg = useBreakpointValue({ base: 'transparent', sm: 'bg-surface' });
  const paddingY = { base: '0', sm: '8' };
  const paddingX = { base: '4', sm: '10' };
  const boxShadow = { base: 'none', sm: useColorModeValue('md', 'md-dark') };
  const borderRadius = { base: 'none', sm: 'xl' };

  return (
    <Box
      bg={bg}
      py={paddingY}
      px={paddingX}
      boxShadow={boxShadow}
      borderRadius={borderRadius}
    >
      { children }
    </Box>
  );
}

export interface FormContainerProps {
  children:ReactNode,
  onSubmit:(data:any)=>void,
  logo?:string,
  heading?:string,
}

export const FormContainer = (props: FormContainerProps) => {

  const { children, heading, onSubmit, logo } = props;

  const paddingY = { base: '12', md: '24' };
  const paddingX = { base: '0', sm: '8' };

  const form = useForm();

  return (
    <Container maxW="lg" py={paddingY} px={paddingX}>
      <Stack spacing="8">
        <LogoHeader logo={logo} heading={heading} />
        <FormProvider { ...form }>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormContent>
              { children }
            </FormContent>
          </form>
        </FormProvider>
      </Stack>
    </Container>
  );
}
