import React from 'react'
import { Box, Button, Container, Stack, Tab, TabList, Tabs, Text } from '@chakra-ui/react';
import { FiGlobe } from 'react-icons/fi';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import { JWT_KEY } from '@/app.config';
import { GetServerSidePropsContext } from 'next';
import { ListCard, TabbedPage } from '@/components';
import { DashboardContent } from '@solo-system/dashboard';
import { DashboardLayout } from '@/components/dashboard-layout/DashboardLayout';

export interface WebsiteListProps {
  website:any
}

const  WebsiteList = (props:WebsiteListProps) => {
  const { website } = props;
  return (
    <DashboardLayout>
        <DashboardContent 
          bg='grey.400'
          title ={`${website.name}`} 
          subtitle={`${website.name}`}
        >
          <DashboardContent.Wrapper>
        <TabbedPage tabs={['Layout', 'Theme', 'Components']}>
          <></>
          <></>
          <></>
        </TabbedPage>
        </DashboardContent.Wrapper>
        </DashboardContent>
    </DashboardLayout>
  )
};

export default WebsiteList;

export const getServerSideProps = async (ctx:GetServerSidePropsContext) => {
  try{
    const token : string | undefined = ctx.req.cookies[JWT_KEY]
    const websiteID:string = ctx.params!.id as  string;
    const result = await axios.post('http://localhost:8000/website', { cmd:'website.get', data:{ id: websiteID } }, { headers:{ Authorization:`Bearer ${token}`}});
    const website =  result.data;
    console.log(website);
    return {
      props:{
        website:website
      }
    }
  }catch(e){
    console.log(e);
    return {
      props: {
        website:null
      }
    }
  }
}