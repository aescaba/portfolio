import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div class="flex-col h-[60vh] content-center space-y-4">
      <h1 class="text-2xl lg:text-4xl font-semibold">
        I&apos;m Amanda, a  <span class="font-bold bg-linear-to-r hover:bg-linear-to-l from-blue-500 via-orange-500 to-amber-500 inline-block leading-tight text-transparent bg-clip-text">designer &amp; developer </span> motivated by people, process, and the creative journey.</h1>
      <h2 class="text-lg font-light">
       Driven by my passion for community and storytelling, I love turning chaos into clarity and bringing ideas to life through well-crafted solutions that serve both people and purpose.
      </h2>
      <Link class="text-blue-400 italic" href="https://new--amandaescaba.netlify.app/" target="_blank">Preview new portfolio site (in progress) &gt;</Link>
      {/* <div class="my-6 text-blue-300 font-light text-lg italic">Preview new portfolio site (in progress) &gt;</div> */}
    </div>
  )
}

// gradient text code from: https://redpixelthemes.com/blog/tailwindcss-gradient-text/
// line height cutoff fix from: https://stackoverflow.com/questions/74542280/bottom-of-gradient-text-gets-cut-off-tailwindcss