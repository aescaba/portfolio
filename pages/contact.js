import styles from '../styles/Home.module.css'
import Link from 'next/link'
import PageTitle from '../components/pagetitle'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

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

        <div class="flex flex-row mt-6 space-x-4">
          <button class="outline outline-2 rounded-full px-12 py-1 hover:bg-white hover:text-black font-semibold">
            <a href="https://drive.google.com/file/d/1n4lYfD1M7ZoGZGENIhkVUaDjUM4hhpkh/view?usp=sharing" target="_blank">Resume</a>
          </button>

          <button class="opacity-75 hover:opacity-100">
            <a href="https://www.linkedin.com/in/aescaba/" target="_blank"><AiFillLinkedin size={40}/></a>
          </button>

          <button class="opacity-75 hover:opacity-100">
            <a href="https://github.com/aescaba" target="_blank"><AiFillGithub size={40}/></a>
          </button>

        </div>

      </div>

    </div>
  )
}
