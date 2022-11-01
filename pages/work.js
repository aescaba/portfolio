import styles from '../styles/Home.module.css'
import PageTitle from '../components/pagetitle'
import Image from 'next/image'


export default function Work() {
  return (
    <div class="">

      <PageTitle title={"Work"}/>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-28">

        {/* project one */}
        <div class="">
          <div class="mb-4 lg:mb-6">
            <Image class="" src="/../public/images/work/placeholder_art.png" alt="placeholder" width={1280} height={800}/>
          </div>

          <div class="font-bold">
            Project #1 Title
          </div>

          <div class="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          </div>
        </div>

        {/* project two */}
        <div class="">
          <div class="mb-4 lg:mb-6">
            <Image class="" src="/../public/images/work/placeholder_art.png" alt="placeholder" width={1280} height={800}/>
          </div>

          <div class="font-bold">
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
