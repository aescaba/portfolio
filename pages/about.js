import PageTitle from '../components/pagetitle'
import Image from 'next/image'
import photo from '../public/images/about/amanda_2025.png'

export default function About() {
  return (
    <div class="">

      <PageTitle title={"About"}/>

      <div class="flex flex-col-reverse lg:flex-row">
        {/* first column - photo */}
        <div class="max-w-sm mt-16 pb-24 lg:pb-0 lg:mt-0 lg:mr-20 xl:mr-24 place-self-center lg:place-self-auto">
          <Image class="" src={photo} alt="Photo of Amanda smiling holding an apple in front of an apple tree" placeholder="blur" width={1536} height={2048}/>
        </div>

        {/* second column - bio */}
        <div class="space-y-6 font-light">
          <p class="font-semibold text-2xl">
         I&apos;m a designer developer, and digital professional who thrives where creativity meets problem-solving.</p>

          <p>I love coding for its logic and challenge and I love design for its narrative and impact. Together, my combined background lets me approach challenges from different perspectives and create experiences that are both functional and human.</p>

          <p>I&apos;ve always been invigorated by the creative journey of untangling complexity, turning chaos into clarity, and getting to see ideas brought to life. I&apos;m just as interested in how things are built as I am in how they work, are maintained, and can be made better.</p>
           
          <p>Above all, my process is grounded in curiosity, collaboration, and care for the people I&apos;m creating for and the teams I work with. From designing UIs and building responsive websites to managing digital properties, troubleshooting technical challenges, and streamlining workflows, I&apos;m driven by a passion for community and storytelling to create spaces that foster connection and help people feel seen.</p>

          <p>Off the clock, you might find me catching up on my endless video game and book backlog, baking or cooking, curating too many Spotify playlists, or planning my next cosplay.</p>

          <p>(ﾉ´ヮ´)ﾉ\*:･ﾟ✧</p>
        </div>
      </div>
    </div>
  )
}
