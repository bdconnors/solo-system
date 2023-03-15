import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { useAccount } from "@solo-system/firebase-client";

export interface AuthGuardProps {
  children:ReactNode,
  signedOutRedirect?: string,
  rbac?: { redirect:string, allowed:string[] }
}
export const AuthGuard: React.FC<AuthGuardProps> = (props:AuthGuardProps) => {
  const {children, signedOutRedirect ='/' } = props;
  const { status, account, token } = useAccount();
  console.log(account, token);
  const router = useRouter();
  useEffect(()=>{
    if(status !== 'loading' && status !== 'logged-in' ){
      router.push(signedOutRedirect)
    }
  });
  return ( 
    <>
      { children }
    </>
  )
};