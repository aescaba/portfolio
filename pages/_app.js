// navbar code from https://j471n.in/blogs/active-navbar-next-js
// animation https://letsbuildui.dev/articles/animated-page-transitions-in-nextjs

import '../styles/globals.css'
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import Head from 'next/head';
import Footer from '../components/footer'
import { AnimatePresence } from 'framer-motion';


function MyApp({ Component, pageProps, }) {
  return (
    <>
      <Head>
        <title>Amanda Escaba - Web Designer & Developer</title>
        <meta name="description" content="Amanda Escaba - Web Designer & Developer - Portfolio Site" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <Navbar />
        
          <Layout>
            <Component {...pageProps} />
          </Layout>
        
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default MyApp
