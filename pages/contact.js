import styles from '../styles/Home.module.css'
import Link from 'next/link'
import PageTitle from '../components/pagetitle'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export default function Contact() {
  return (
    <div class="">

      <PageTitle title={"Contact"}/>
      <div class="">

        <h2 class="text-3xl font-bold">
          Amanda Escaba
        </h2>

        <h3 class="text-2xl">
            <Link href="mailto:amandaescaba@gmail.com">amandaescaba@gmail.com</Link>
        </h3>

        <div class="flex flex-row mt-6 space-x-4">
          <a href="https://drive.google.com/file/d/1n4lYfD1M7ZoGZGENIhkVUaDjUM4hhpkh/view?usp=sharing" target="_blank" rel="noreferrer">
          <button class="outline outline-2 rounded-full px-14 py-2 transition ease-in-out delay-[25ms] hover:bg-white hover:text-black hover:outline-0 text-xl font-bold hover:bg-gradient-to-l from-orange-300 via-amber-300 to-blue-400">
          {/* <button class="outline outline-2 rounded-full px-14 py-1 text-xl text-white font-bold bg-gradient-to-r hover:bg-gradient-to-l from-blue-500 via-orange-500 to-amber-400"> */}
          {/* <button class="outline outline-2 rounded-full px-14 py-1 text-xl text-black font-black bg-gradient-to-r hover:bg-gradient-to-l from-blue-300 via-amber-200 to-orange-200"> */}
            <p>Resume</p>
          </button>
          </a>

          <button class="opacity-75 hover:opacity-100">
            <a href="https://www.linkedin.com/in/aescaba/" target="_blank" rel="noreferrer"><AiFillLinkedin size={45}/></a>
          </button>

          <button class="opacity-75 hover:opacity-100">
            <a href="https://github.com/aescaba" target="_blank" rel="noreferrer"><AiFillGithub size={45}/></a>
          </button>

        </div>

      </div>

    </div>
  )
}
