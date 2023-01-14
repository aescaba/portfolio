// navbar code from https://j471n.in/blogs/active-navbar-next-js
// animation https://dev.to/ivandotv/full-page-transitions-with-next-js-1co5

import '../styles/globals.css'
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import Head from 'next/head';
import Footer from '../components/footer'
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Amanda Escaba - Web Designer & Developer</title>
        <meta name="description" content="Amanda Escaba - Web Designer & Developer - Portfolio Site" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <Navbar />

        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </motion.div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default MyApp
