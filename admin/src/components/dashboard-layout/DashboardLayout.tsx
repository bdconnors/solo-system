import { DASHBOARD_CONFIG } from "@/app.config";
import { Dashboard, DashboardUser } from "@solo-system/dashboard";
import { useAccount } from "@solo-system/firebase-client";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export interface DashboardLayoutProps {
  children:ReactNode
}
export const DashboardLayout = (props:DashboardLayoutProps) => {
  const { account, logout } = useAccount();
  console.log(account);
  const { children } = props;
  const user:DashboardUser = {
    name:account?.displayName ? account.displayName : undefined,
    photoURL: account?.photoURL ? account.photoURL : undefined,
    email: account?.email ? account.email : undefined
  };
  const router = useRouter();
  const signOut = async () => {
    await logout('/');
    router.push('/')
  }
  return (
    <Dashboard 
      active={router.basePath ? router.basePath : router.asPath}
       config={DASHBOARD_CONFIG}
       onSearch={(e:any)=>{ console.log(e)}}
       signOut={async ()=>{ await signOut() }}
       user={user}
    >
      { children }
    </Dashboard>
  );
}