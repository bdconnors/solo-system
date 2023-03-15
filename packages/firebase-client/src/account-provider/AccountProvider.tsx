import { ReactNode, useEffect, useState, useContext, createContext, Context } from 'react';
import { Auth, IdTokenResult, signInWithEmailAndPassword, signOut, Unsubscribe, User } from 'firebase/auth';
import cookie from 'js-cookie';
import { IAccountContext, IAccountState } from './context';

export const AccountContext:Context<IAccountContext> = createContext<IAccountContext>({
  status:'loading',
  account:null,
  token:null,
  errors:{},
  logout: async (redirect:string):Promise<void> => {},
  credentialLogin:async (email:string, password:string):Promise<void>=>{}
});


export interface AccountProviderProps {
  children:ReactNode,
  auth:Auth,
  jwtKey:string
}

export const AccountProvider = (props:AccountProviderProps) => {
  const { children, jwtKey, auth } = props;
  const [state, setState] = useState<IAccountState>({ status:'loading', account: null, token:null, errors:{} });
  // Basic Firebase email login function.
  const credentialLogin = async (email:string, password:string):Promise<void> => {
    try{
      await signInWithEmailAndPassword(auth, email, password);
    }catch(e:any){
      setState({ ...state, status:'error', errors:{ signInEmailAndPassword:e.message } });
    }
  };
  const logout = async () => {
    await signOut(auth);
  };
  // Checks that user state has changed and then creates or destroys cookie with Firebase token.
  const onAuthStateChange = ():Unsubscribe => {
    return auth.onAuthStateChanged(async (user:User | null) => {
      if (user) {
        try{
          const token: string = await user.getIdToken();
          const tokenResult: IdTokenResult = await user.getIdTokenResult();
          cookie.set(jwtKey, token, { expires: new Date(tokenResult.expirationTime) });
          setState({ ...state, status:'logged-in', account:user, token:token, errors:{} });
        }catch(e:any){
          setState({ ...state, status:'error', errors:{ authStateChange:e.message } });
        }
      } else {
        cookie.remove(jwtKey);
        setState({ ...state, status:'logged-out', account:null, token: null, errors:{} });
      }
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChange();
    return () => {
      unsubscribe();
    };
  }, []);
  
  return (
    <AccountContext.Provider value={{ 
      status: state.status,
      account: state.account, 
      token:state.token, 
      errors:state.errors, 
      logout:logout,
      credentialLogin: credentialLogin
    }}>
      { children }
    </AccountContext.Provider>
  );
}

export const useAccount = () => {
  const context = useContext(AccountContext)
  if(!context){
    throw new Error('useAccount must be used within a AccountProvider')
  }
  return context;
}