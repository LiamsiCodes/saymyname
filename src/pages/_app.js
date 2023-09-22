import Layout from '@/components/Layout'
import '@/styles/globals.css'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import { CartProvider } from 'use-shopping-cart'

export default function App({ Component, pageProps }) {

  const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

  return(
    <div>
    <Head>
    <title>Cara</title>
    <link href='/favicon.ico' />
  </Head>
    <CartProvider cartMode="checkout-session" stripe={stripeKey} currency="USD" >
   <Layout>
    <Component {...pageProps} />
    <Toaster/>
  </Layout>
  </CartProvider>
    </div>
  )
}
