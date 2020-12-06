import { AppProps } from 'next/dist/next-server/lib/router/router'
import "../styles/antd.less";
import '../styles/globals.less'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
