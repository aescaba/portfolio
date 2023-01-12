import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";

export default function Layout({ children }) {
    return (
        <>
        <Head>
            <title>Amanda Escaba - Web Designer & Developer</title>
            <meta name="description" content="Amanda Escaba - Web Designer & Developer - Portfolio Site" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <div class="mx-10 md:mx-24 lg:mx-32 xl:mx-48 2xl:mx-80 font-Assistant ">
            <div class="my-8">
                <Navbar/>
            </div>

            <div class="grid">
                <main class="">
                    {children}
                </main>
            </div>
            <div class="mt-14 hidden">
                <Footer/>
            </div>
        </div>
        </>
    );
}