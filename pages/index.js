import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div class="h-[80vh] lg:w-5/6 grid content-center space-y-4 ">
      <h1 class="text-2xl lg:text-4xl font-semibold">
        I&apos;m Amanda, a  <span class="font-bold bg-linear-to-r hover:bg-linear-to-l from-blue-500 via-orange-500 to-amber-500 inline-block leading-tight text-transparent bg-clip-text">designer &amp; developer </span> passionate about people and process.</h1>
      <h2 class="text-lg font-light">
       I care about community and storytelling and I love the challenge of turning ideas into inclusive, well-crafted solutions that serve both people and purpose.
      </h2>
      {/* <div class="my-6 text-blue-300 font-light text-lg italic">&mdash; Just like me, this website is a constant work in progress :)</div> */}
    </div>
  )
}

// gradient text code from: https://redpixelthemes.com/blog/tailwindcss-gradient-text/
// line height cutoff fix from: https://stackoverflow.com/questions/74542280/bottom-of-gradient-text-gets-cut-off-tailwindcss