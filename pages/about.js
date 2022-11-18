import styles from '../styles/Home.module.css'
import PageTitle from '../components/pagetitle'
import Image from 'next/image'

export default function About() {
  return (
    <div class="">

      <PageTitle title={"About"}/>

      <div class="flex flex-col-reverse lg:flex-row">
        {/* first column - photo */}
        <div class="max-w-sm mt-16 lg:mt-0 lg:mr-20 xl:mr-24 place-self-center lg:place-self-auto">
          <Image class="" src="/../public/images/apl.png" alt="Photo of Amanda holding an apple in front of an apple tree" width={1536} height={2048}/>
        </div>

        {/* second column - bio */}
        <div class="space-y-4">
          <p class="text-xl">
          <span class="font-extrabold">Hi, I’m Amanda (she/her)!</span> I'm a proud Filipino American who grew up in the Hudson Valley, New York and
          spent five years studying computer science and interaction design at Northeastern University in Boston.</p>

          <p class="text-xl">I've taken on the responsibilities of a front-end developer and UI/UX designer and I 
          thrive in positions that incorporate skills from both of my disciplines. My favorite thing that design and
          code have in common is the creative process—I love seeing how the decisions made each step of the way come 
          together to support the final product.</p>

          <p class="text-xl">When it comes to my work, I enjoy improving any type of user experience, but I’m most 
          passionate about sharing and preserving culture, uplifting marginalized voices, and building community, especially through storytelling.</p>

          <p class="text-xl">I spend my time cooking and baking dishes from my favorite cuisines, ignoring my pile of unread books 
          to buy new ones, singing both parts of the duet by myself, tinkering with my mechanical keyboard, making too many Spotify
          playlists, starting more video games than I tend to finish, and getting distracted by cute dogs in public.</p>
        </div>
      </div>
    </div>
  )
}
