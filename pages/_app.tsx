import '../scss/main.scss';
import type { AppProps } from 'next/app'
import Layout from '../src/layout/Layout';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      {/* children of the layout component */}
      <Component {...pageProps} />
    </Layout>
  )
}
