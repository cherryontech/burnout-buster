import '@/styles/globals.css'
import Layout from '../components/layout'
import '@/styles/fonts.css'
import Context from "../../context/context"


export default function App({ Component, pageProps, ...appProps }) {



  if ([`/`].includes(appProps.router.pathname))
  return <Component {...pageProps} />;

  return (
    <Context>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context>

  )
}


