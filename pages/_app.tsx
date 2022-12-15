import '../scss/main.scss';
import type { AppProps } from 'next/app'
import Layout from '../src/layout/Layout';
import {StateContext} from '../src/hooks/context/StateContext'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateContext>
      <Layout>
        {/* children of the layout component */}
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}
