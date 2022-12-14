import '../styles/style.css'
import '../styles/plugins.css'
import '../public/css2.css'
import '../public/css2-1.css'
import type { AppProps } from 'next/app'

import {Layout} from '../components';


export default function App({ Component, pageProps }: AppProps) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}


