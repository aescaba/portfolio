// navbar code from https://j471n.in/blogs/active-navbar-next-js
// animation https://letsbuildui.dev/articles/animated-page-transitions-in-nextjs

import '../styles/globals.css'
import Layout from '../components/layout';
import Transition from '../components/transition';


function MyApp({ Component, pageProps, }) {
  return (

    <Layout>
      {/* <Transition> */}
        <Component {...pageProps} />
      {/* </Transition> */}
    </Layout>
  );
}

export default MyApp
