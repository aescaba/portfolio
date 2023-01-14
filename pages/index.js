
export default function Home() {
  return (
    // <div className={styles.container}>

  <div class="h-[80vh] grid content-center space-y-4 font-light">
    <h1 class="text-3xl lg:text-5xl">
          Hi there!
        </h1>
        <h1 class="text-4xl lg:text-6xl">
          My name is Amanda and I&apos;m a 
          <br/>
          <span class="font-bold bg-gradient-to-r hover:bg-gradient-to-l from-blue-500 to-amber-400 inline-block leading-tight text-transparent bg-clip-text"> web designer,</span> <span class="font-bold bg-gradient-to-r hover:bg-gradient-to-l from-amber-400 to-orange-400 inline-block leading-tight text-transparent bg-clip-text">developer,</span> and <span class="font-bold bg-gradient-to-r hover:bg-gradient-to-l from-orange-400 to-blue-500 inline-block text-transparent bg-clip-text">artist.</span>
        </h1>
        <h2 class="text-xl lg:text-2xl">
          I like designing creative user-centered experiences, leaving no detail behind. Whether it&apos;s wireframing an app, 
          coding a website, or sketching the artwork, from the smallest quality-of-life details to the overall look and feel, 
          I love the process of creating!
          </h2>
         <div class="my-6 text-blue-300 font-light text-lg italic">&mdash; Just like me, this website is a constant work in progress :)</div>
    </div>
    
  )
}

// gradient text code from: https://redpixelthemes.com/blog/tailwindcss-gradient-text/
// line height cutoff fix from: https://stackoverflow.com/questions/74542280/bottom-of-gradient-text-gets-cut-off-tailwindcss