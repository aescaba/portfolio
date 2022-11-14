// navbar code from https://j471n.in/blogs/active-navbar-next-js

import '../styles/globals.css'
import { motion } from 'framer-motion';
import Layout from '../components/layout';

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div
    key={router.route}
    initial="initial"
    animate="animate"
    variants={{
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
      },
    }}>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </motion.div>
    );
}

export default MyApp
