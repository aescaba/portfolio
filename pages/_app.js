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
        <meta name="description" content="Amanda is a designer and developer in New York passionate about digital experiences, creative problem-solving, community, and bringing ideas to life through technology and design." />
        <link rel="icon" href="/AE_Logo_BG.svg" />
      </Head>

      <div className="w-2/3 max-w-5xl mx-auto my-8 justify-between">
        <Navbar />
        <Layout>
            <Component {...pageProps} />
        </Layout>
        <Footer />
      </div>
    </>
  );
}

export default MyApp
