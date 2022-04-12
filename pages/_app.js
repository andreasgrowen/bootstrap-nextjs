import Footer from '../components/Footer';
import Header from '../components/Header'
import 'bootstrap/dist/css/bootstrap.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import Head from 'next/head';

import { useEffect } from 'react';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);
 
 if(Component.getLayout){
   return Component.getLayout(<Component{...pageProps}/>)
 }
 
  return (
    <>
      <Head>
        <title>Awesom NextJs and Bootstrap Bootcamp</title>
      </Head>
      <SSRProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
      </SSRProvider>
    </>
  )
}

export default MyApp;
