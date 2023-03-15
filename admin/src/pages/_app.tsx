import { FirebaseClient } from '@/firebase-client';
import { ChakraProvider } from '@chakra-ui/react';
import { AccountProvider } from '@solo-system/firebase-client';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { JWT_KEY, THEME_CONFIG } from '@/app.config';

export default function App({ Component, pageProps }: AppProps) {
  const auth = FirebaseClient.getAuthInstance();
  return( 
    <ChakraProvider theme={THEME_CONFIG}>
      <AccountProvider jwtKey={JWT_KEY} auth={auth}>
        <Component { ...pageProps }/>  
      </AccountProvider>
    </ChakraProvider >
  )
}
