import '@/styles/globals.css'
import Layout from '../components/layout'
import '@/styles/fonts.css'


export default function App({ Component, pageProps, ...appProps }) {

  if ([`/`].includes(appProps.router.pathname))
  return <Component {...pageProps} />;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
