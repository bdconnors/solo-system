import React from 'react';
import axios from 'axios';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { v4 as uuid } from 'uuid';
import { JWT_KEY } from '@/app.config';
import { GetServerSidePropsContext } from 'next';
import { DashboardContent } from '@solo-system/dashboard';
import { DashboardLayout } from '@/components';
import { PasswordInput, TextInput, ToggleInput } from '@solo-system/form';
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { Container, Divider, Flex, Stack } from '@chakra-ui/react';

export interface AddUserContentProps {}

export interface AddUserProps {
  websites:any[]
}

const AddUser = (props:AddUserProps) => {
  const { websites } = props;
  const form = useForm();
  const onSubmit = async(values:any) => {
    console.log(values);
  }
  return (
  <DashboardLayout>
    <DashboardContent 
      bg='grey.400'
      title ={'Users'} 
      subtitle='Add User'
    >        
      <DashboardContent.Wrapper>
        <Container>
          <FormProvider { ...form }>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Stack py={10} spacing={5}>
                <Divider />
                <TextInput 
                  options={{ label:'Name', inline:true }} 
                  name={'displayName'} 
                  control={form.control}
                />
                <Divider />
                <TextInput 
                  options={{ label:'Email', inline:true }} 
                  name={'email'} 
                  placeholder={'email@example.com'}
                  control={form.control}
                />
                <Divider />
                <PasswordInput 
                  options={{ label:'Password', inline:true }} 
                  toggle={{ showElement: <FiEye />, hideElement: <FiEyeOff/> }}
                  name={'password'}
                  defaultValue={uuid()} 
                  control={form.control}
                />
                <Divider />
              </Stack>
            </form>
          </FormProvider>
        </Container>
      </DashboardContent.Wrapper>
    </DashboardContent>
  </DashboardLayout>
  )
};

export default AddUser;


export const getServerSideProps = async (ctx:GetServerSidePropsContext) => {
  try{
    const token: string | undefined = ctx.req.cookies[JWT_KEY]
    const result = await axios.post(
      'http://localhost:8000/website', 
      { cmd:'website.list', data:{} }, 
      { headers: { Authorization:`Bearer ${token}` } }
    )
    const websites = result.data;
    return { props: { websites:websites } }
  }catch(e:any){
    console.log(e.code);
    return {
      props: {
        websites:[]
      }
    }
  }
}