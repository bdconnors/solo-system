import React, { useEffect } from 'react'
import { Button, IconButton, Text } from '@chakra-ui/react';
import { FiFilePlus, FiGlobe, FiUserPlus } from 'react-icons/fi';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import { DASHBOARD_CONFIG, JWT_KEY } from '@/app.config';
import { GetServerSidePropsContext } from 'next';
import { AuthGuard, ListCard } from '@/components';
import { useAccount } from '@solo-system/firebase-client';
import { Dashboard, DashboardConfig, DashboardContent, DashboardUser } from '@solo-system/dashboard';
import { useRouter } from 'next/router';
import { DashboardLayout } from '@/components/dashboard-layout/DashboardLayout';


export interface UserListProps {
  accounts:any[]
}

const UserList = (props:UserListProps) => {
  const { accounts = [] } = props;
  return (
    <DashboardLayout>
        <DashboardContent 
          bg='grey.400'
          title ={'Users'} 
          subtitle='Manage Users'
        >
            { accounts.map((account)=>
              <ListCard 
                key={uuid()} 
                title={account.displayName ? account.displayName : account.email}
              >
              </ListCard>
            )}
        </DashboardContent>
    </DashboardLayout>
  )
};

export default UserList;

export const getServerSideProps = async (ctx:GetServerSidePropsContext) => {
  try{
    const token : string | undefined = ctx.req.cookies[JWT_KEY]
    console.log(token);
    const result = await axios.post('http://localhost:8000/account', { cmd:'list-accounts', data:{} }, { headers:{ Authorization:`Bearer ${token}`}});
    const apps =  result.data.accounts;
    console.log(apps);
    return {
      props:{
        accounts:apps
      }
    }
  }catch(e){
    console.log(e);
    return {
      props: {
        accounts:[]
      }
    }
  }
}