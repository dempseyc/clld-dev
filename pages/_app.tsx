import "../styles/globals.css";
import "../styles/AnimatedLogo.css";
import "../styles/animatedTitle.css";
import "../styles/_LAYOUT_TopHeader.module.css"; 
import "../styles/_LAYOUT_NavBar.module.css";
import '@fontsource/alexandria/200.css' //extralight
import '@fontsource/alexandria/500.css' //medium
import '@fontsource/alexandria/700.css' //bold
import '@fontsource/roboto-slab/400.css' //regular
import '@fontsource/roboto-slab/700.css' //bold
import '@fontsource/courier-prime/400.css' //regular

import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../theme";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || (page => page);
  return (
    <ChakraProvider theme={theme}>
      <CSSReset/>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}
