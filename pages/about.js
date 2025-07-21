import PageTitle from '../components/pagetitle'
import Image from 'next/image'
import photo from '../public/images/about/apl.webp'

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
        <div class="space-y-6 font-light text-xl leading-8">
          <p>
          Hi there! <span class="font-bold text-blue-400">I&apos;m Amanda (she/her)</span>&mdash;a detail-oriented, user-focused Web Designer &amp; Developer who loves <span class="font-semibold text-orange-400">blending creativity and code
          to craft digital experiences</span> that don&apos;t just work, but resonate. With a strong foundation in both technical problem-solving and visual design, I thrive in roles that let me bridge
          the gap between the two.</p>

          <p>Whether I&apos;m designing interfaces, building custom sites, or exploring new tools, I bring a <span class="font-semibold text-amber-400">collaborative, solutions-oriented mindset</span> and a deep care for intuitive, accessible,
            and cohesive user experiences. I also believe that how we work shapes what we create &mdash; so I look for ways to support great design by sharing knowledge and refining team workflows.</p>

          <p>At the heart of my work is a drive to build digital spaces that <span class="font-semibold text-blue-400">foster connection</span>, 
           <span class="font-semibold text-amber-400"> uplift underrepresented stories</span>, and <span class="font-semibold text-orange-400">help people feel seen</span>. I care deeply about storytelling,
           cultural preservation, and community; those values shape how I design, build, and collaborate.</p>

          <p>Outside of work, you can find me cooking my way through my favorite cuisines, making too many Spotify playlists, adding to my endless video game and book backlog, singing both parts of a duet, tinkering with my mechanical keyboard,
             or getting distracted by cute dogs in public.
          </p>
        </div>
      </div>
    </div>
  )
}
