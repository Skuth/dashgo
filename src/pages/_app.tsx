import "../config/yup"

import { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"

import { theme } from "../styles/theme"
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp
