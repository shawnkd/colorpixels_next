import '../styles/globals.css'
import {ChakraProvider} from  "@chakra-ui/react"
import { ThemeProvider } from 'degen'
import 'degen/styles'


function MyApp({ Component, pageProps }) {
  return ( 

      
        <ThemeProvider> 
          {/* <ChakraProvider> */}
            <Component {...pageProps} /> 
          {/* </ChakraProvider> */}
        </ThemeProvider>   
        

  )
}

export default MyApp
