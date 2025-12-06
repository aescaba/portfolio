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
         I&apos;m a designer and developer who thrives where creativity meets problem-solving.</p>

          <p>I love <span className="font-semibold">coding</span> for its logic and challenge and I love <span className="font-semibold">design</span> for its narrative and impact. Together, they let me craft solutions that are both functional and human.</p>

          <p>The creative journey of <span className="font-semibold">untangling complexity</span> and <span className="font-semibold">turning chaos into clarity</span> energizes me, and <span className="font-semibold">bringing ideas to life</span> is the cherry on top.</p>
           
          <p>My process is grounded in curiosity, collaboration, and care for the people I&apos;m creating for <span className="italic">and</span> the teams I work with&mdash;from designing UIs to building responsive sites to streamlining workflows, I&apos;m driven by a passion 
          for <span className="font-semibold">community and storytelling</span> to create spaces that foster connection and help people feel seen.</p>

          <p>Off the clock, you might find me catching up on my endless video game and book backlog, baking or cooking, curating too many Spotify playlists, or planning my next cosplay.</p>

          <p>(ﾉ´ヮ´)ﾉ\*:･ﾟ✧</p>
        </div>
      </div>
    </div>
  )
}
