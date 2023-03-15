import React, { useEffect } from 'react';
import { Button, Checkbox, HStack, Stack, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { PasswordInput, TextInput } from '@solo-system/form';
import { IAccountContext, useAccount } from '@solo-system/firebase-client';
import { LoadingScreen } from '@solo-system/progress';

import { RiseLoader } from 'react-spinners';
import { FormContainer } from '@/components/form-container/FormContainer';

export const LoginForm = () => {
  const { control } = useFormContext();
  
  return(
    <Stack spacing="6">
      <Stack spacing="5">
        <TextInput options={{ label:'Email' }} name='email' control={control}/>
        <PasswordInput 
          options={{label:'Password'}} 
          name='password' 
          control={control} 
        />
      </Stack>
      <HStack justify="space-between">
        <Checkbox defaultChecked>Remember me</Checkbox>
        <Button variant="link" colorScheme="blue" size="sm">Forgot password?</Button>
      </HStack>
      <Stack spacing="6">
        <Button variant="primary" type="submit">Sign In</Button>
      </Stack>
    </Stack>
  );
};

const Login = () => {
  const { status, credentialLogin, token} = useAccount() as IAccountContext;
  console.log(token);
  const router = useRouter();
  const toast = useToast();
  
  useEffect(()=>{
    if(status !== 'loading' && status ==='logged-in'){
      router.push('/home')
    }
  })
  const showLogin = status !== 'loading' && status !== 'logged-in';
  
  return (
    <LoadingScreen loading={!showLogin} spinner={<RiseLoader color='green'/>}>
      <FormContainer
        logo='/logo.png'
        heading='Log in to your account' 
        onSubmit={async (data:any)=>{
          try{
            await credentialLogin(data.email, data.password);
            router.push('/home');
          }catch {
            toast({ title: 'Error signing in', status:'error', position:'top'})
          }
        }}
      >

      <LoginForm/>
      </FormContainer>
    </LoadingScreen>
  );
};

export default Login;
