// navbar code from https://j471n.in/blogs/active-navbar-next-js
// animation https://letsbuildui.dev/articles/animated-page-transitions-in-nextjs

import '../styles/globals.css'
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import Head from 'next/head';
import Footer from '../components/footer'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Amanda Escaba &ndash; Web Designer & Developer &ndash; Portfolio Site</title>
        <meta name="description" content="My name is Amanda and I'm a web designer, developer based in the New York Metropolitan Area. I love designing user-centered experiences and everything about the process of creating!" />
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
