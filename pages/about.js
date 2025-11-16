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
        <div class="space-y-6 font-light text-lg/7">
          <p class="font-semibold text-2xl">
         I&apos;m a designer and developer who thrives where creativity meets problem-solving.</p>

          <p>I love coding for its logic and challenge, and design for its ability to tell stories and improve how people experience the web. Together, they let me create solutions that are both functional and human.</p>

          <p>From designing UIs to building responsive sites to streamlining workflows, my process is grounded in curiosity, collaboration, and care for the people I&apos;m creating for and the people I work with.</p>

          <p>I&apos;m driven by a passion for community and storytelling, creating spaces that foster connection, honor diverse voices, and help people feel seen.</p>

          <p>Off the clock, you might find me catching up on my endless video game and book backlog, baking or cooking, curating too many Spotify playlists, or planning my next cosplay.</p>

          <p>(ﾉ´ヮ´)ﾉ\*:･ﾟ✧</p>
        </div>
      </div>
    </div>
  )
}
