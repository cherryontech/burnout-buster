import '@/styles/globals.css'
import Layout from '../components/layout'
import '@/styles/fonts.css'
import Context from "../../context/context"
import {useState} from 'react';


export default function App({ Component, pageProps, ...appProps }) {

  const [formData, setFormData] = useState({});
  const updateFormData = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  if ([`/`].includes(appProps.router.pathname))
  return <Component {...pageProps} />;

  return (
    <Context>
      <Layout>
        <Component {...pageProps} updateFormData = {updateFormData} />
      </Layout>
    </Context>

  )
}
