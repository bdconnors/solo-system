import React from 'react'
import { Button, Text } from '@chakra-ui/react';
import { FiGlobe } from 'react-icons/fi';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import { JWT_KEY } from '@/app.config';
import { GetServerSidePropsContext } from 'next';
import { ListCard } from '@/components';
import { DashboardContent } from '@solo-system/dashboard';
import { DashboardLayout } from '@/components/dashboard-layout/DashboardLayout';
import { useRouter } from 'next/router';




export interface WebsiteListProps {
  websites:any[]
}

const  WebsiteList = (props:WebsiteListProps) => {
  const router = useRouter();
  const { websites } = props;
  const onCardClick = (id:string) => {
    router.push(`/websites/${id}`);
  }
  return (
    <DashboardLayout>
        <DashboardContent 
          bg='grey.400'
          title ={'Websites'} 
          subtitle='Manage Websites'
        >
            { websites.map((website)=>
              <ListCard 
                key={uuid()} 
                photo={ website.favicon}
                title={website.name}
                onClick={()=>onCardClick(website.id)}
              >
                <Text color='muted'>{website.name}</Text>
              </ListCard>
            )}
        </DashboardContent>
    </DashboardLayout>
  )
};

export default WebsiteList;

export const getServerSideProps = async (ctx:GetServerSidePropsContext) => {
  try{
    const token : string | undefined = ctx.req.cookies[JWT_KEY]
    const result = await axios.post(
      'http://localhost:8000/website', 
      { cmd:'website.list', data:{} }, 
      { headers:{ Authorization:`Bearer ${token}`} }
    );
    const websites = result.data;
    console.log(websites);
    return {
      props:{
        websites:websites
      }
    }
  }catch(e:any){
    console.log(e.code);
    return {
      props: {
        websites:[]
      }
    }
  }
}