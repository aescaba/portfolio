import styles from '../styles/Home.module.css'
import Link from 'next/link'
import PageTitle from '../components/pagetitle'

export default function Contact() {
  return (
    <div class="">

      <PageTitle title={"Contact"}/>
      <div class="">

        <h2 class="text-2xl">
          Amanda Escaba
        </h2>

        <h3 class="text-xl">
            <Link href="mailto:amandaescaba@gmail.com">amandaescaba@gmail.com</Link>
        </h3>

        <div class="flex flex-col-reverse lg:flex-row mt-6">
          <button class="outline outline-2 rounded-full px-12 py-1 hover:bg-white hover:text-black">
            <a href="https://drive.google.com/file/d/1n4lYfD1M7ZoGZGENIhkVUaDjUM4hhpkh/view?usp=sharing" target="_blank">Resume</a>
          </button>
        </div>

      </div>

    </div>
  )
}
