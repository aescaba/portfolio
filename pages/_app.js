// navbar code from https://j471n.in/blogs/active-navbar-next-js
// framer motion tutorial from https://javascript.plainenglish.io/how-to-create-page-transitions-in-next-js-with-framer-motion-47642c462c62

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
