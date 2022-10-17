import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";

export default function Layout({ children }) {
    return (
        <>
        <Head>
            <title>Amanda Escaba - Web Designer & Developer</title>
            <meta name="description" content="Amanda Escaba - Web Designer & Developer Portfolio Site" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
       <div class="mx-52">
            <Navbar/>
            {/* <main class="grid container mx-auto"> */}
            <main>
                {children}
            </main>
            <Footer/>
        </div>
        </>
    );
}