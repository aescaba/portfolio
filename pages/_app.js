// navbar code from https://j471n.in/blogs/active-navbar-next-js

import '../styles/globals.css'
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
  <Component {...pageProps} />
  </Layout>
  );
}

export default MyApp
