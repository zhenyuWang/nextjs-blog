// this is the root component that will be used to wrap all the pages in the application

import Head from 'next/head'
import Layout from '@/components/layout/layout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='description' content='NextJS Blog' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
