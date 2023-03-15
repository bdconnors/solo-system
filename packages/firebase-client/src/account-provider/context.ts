import { User } from "firebase/auth"

export interface IAccountState {
  status: 'loading' | 'error' | 'logged-in' | 'logged-out',
  account:User | null,
  token:string | null,
  errors: Record<string, any>
}

export interface IAccountContext extends IAccountState {
  logout: (redirect:string) => Promise<void>,
  credentialLogin: (email:string, password:string)=>Promise<void>
}