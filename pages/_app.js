import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main.js'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'
// global styles
import '../lib/main.css'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website
