import styles from '../styles/Home.module.css'
import PageTitle from '../components/pagetitle'
import Image from 'next/image'


export default function Work() {
  return (
    <div class="">

      <PageTitle title={"Work"}/>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-28">

        {/* CHANGE THIS TO BE A FEED LATER ? */}

        {/* project one */}
        <div class="text-xl">
          <div class="mb-4 lg:mb-6">
            <Image class="" src="/../public/images/work/capstone/LECHON.png" alt="placeholder" width={1280} height={800}/>
          </div>

          <div class="font-bold">
            Tastes of the Motherland
          </div>

          <div class="">
          Northeastern University capstone project&mdash;an interactive website prototype
          </div>
        </div>

        {/* project two */}
        <div class="text-xl">
          <div class="mb-4 lg:mb-6">
            <Image class="" src="/../public/images/work/placeholder_art.png" alt="placeholder" width={1280} height={800}/>
          </div>

          <div class="font-extrabold">
            Project #2 Title
          </div>

          <div class="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          </div>
        </div>

      </div>

    </div>
  )
}
