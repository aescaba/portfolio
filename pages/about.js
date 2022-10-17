import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amanda Escaba - Web Designer & Developer</title>
        <meta name="description" content="Amanda Escaba - Web Designer & Developer Portfolio Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main class="flex flex-col justify-center">
        <h1 class="text-3xl">
          About
        </h1>

        <p class="text-xl">
        Hi, I’m Amanda (she/her)! I'm a proud Filipino American who grew up in the Hudson Valley, New York and
         spent five years studying computer science and interaction design at Northeastern University in Boston.</p>

        <p class="text-xl">I've taken on the responsibilities of a front-end developer and UI/UX designer and I 
        thrive in positions that incorporate skills from both of my disciplines. My favorite thing that design and
         code have in common is the creative process—I love seeing how the decisions made each step of the way come 
         together to support the final product.</p>

        <p class="text-xl">When it comes to my work, I enjoy improving any type of user experience, but I’m most 
        passionate about sharing and preserving culture and uplifting marginalized voices, especially through storytelling.</p>

        <p class="text-xl">I spend my time cooking and baking dishes from my favorite cuisines, ignoring my pile of unread books 
        to buy new ones, singing both parts of the duet by myself, tinkering with my mechanical keyboard, making too many Spotify
         playlists, starting more video games than I tend to finish, and getting distracted by cute dogs in public.</p>

      </main>

    </div>
  )
}
