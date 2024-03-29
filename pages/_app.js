import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main.js'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
// global styles
import '../lib/main.css'
import Script from 'next/script'

const Website = ({ Component, pageProps, router }) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <head>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="images/favicon-16x16.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="images/apple-touch-icon.png"
          />
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=G-TH2VWY74G3`}
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TH2VWY74G3', {
              page_path: window.location.pathname,
              });
              `}
          </Script>
        </head>
        <Fonts />
        <Layout router={router}>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default Website
