import styles from '../styles/Home.module.css'
import Link from 'next/link'
import PageTitle from '../components/pagetitle'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export default function Contact() {
  return (
    <div>

      <PageTitle title={"Contact"} />
      
      <div>

        <h2 class="text-3xl font-semibold">
          Amanda Escaba
        </h2>

        <h3 class="text-2xl transition ease-in-out delay-75 hover:text-amber-400">
          <Link href="mailto:amandaescaba@gmail.com">amandaescaba@gmail.com</Link>
        </h3>

        <div class="flex flex-row mt-6 space-x-4">
          <a href="https://drive.google.com/file/d/1YuvgyURkuiX-TyeJXHtA8w7q7M-AIOpa/view?usp=sharing" target="_blank" rel="noreferrer">
            <button class="outline outline-2 rounded-full px-8 py-2 transition ease-in-out delay-[25ms] hover:bg-white hover:text-black hover:outline-0 text-xl font-semibold hover:bg-gradient-to-l from-orange-300 via-amber-300 to-blue-400">
              <p>Resume</p>
            </button>
          </a>

          <button class="saturate-0 hover:saturate-100 transition ease-in-out delay-[25ms]">
            <a href="https://www.linkedin.com/in/aescaba/" target="_blank" rel="noreferrer"><AiFillLinkedin fill="#fbbf24" size={45} /></a>
          </button>

          <button class="saturate-0 hover:saturate-100 transition ease-in-out delay-[25ms]">
            <a href="https://github.com/aescaba" target="_blank" rel="noreferrer"><AiFillGithub fill="#fbbf24" size={45} /></a>
          </button>

        </div>

      </div>

    </div>
  )
}
