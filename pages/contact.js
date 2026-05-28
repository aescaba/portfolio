import styles from '../styles/Home.module.css'
import Link from 'next/link'
import PageTitle from '../components/pagetitle'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export default function Contact() {
  return (
    <div>

      <PageTitle title={"Contact"} />

      <div className="flex flex-col h-[40vh]">

        <h2 className="text-xl font-semibold">
          Amanda Escaba <span className="font-normal text-lg">&#40;she/her&#41;</span>
        </h2>

        <p className="link">
          <Link href="mailto:amandaescaba@gmail.com">amandaescaba@gmail.com &gt;</Link>
        </p>

        <div className="flex flex-col lg:flex-row mt-6 space-y-6 lg:space-x-6 uppercase text-xl lg:text-lg">
          <a href="https://drive.google.com/file/d/1YuvgyURkuiX-TyeJXHtA8w7q7M-AIOpa/view?usp=sharing" target="_blank" rel="noreferrer"
          >
            <p className="link text-sm">Resume &gt;</p>
          </a>

          <a href="https://www.linkedin.com/in/aescaba/" target="_blank" rel="noreferrer"
          >
            <p className="link text-sm">LinkedIn &gt;</p>
          </a>

          {/* <button class="saturate-0 hover:saturate-100 transition ease-in-out delay-25">
            <a href="https://www.linkedin.com/in/aescaba/" target="_blank" rel="noreferrer"><AiFillLinkedin fill="#fbbf24" size={30} /></a>
          </button>

          <button class="saturate-0 hover:saturate-100 transition ease-in-out delay-25">
            <a href="https://github.com/aescaba" target="_blank" rel="noreferrer"><AiFillGithub fill="#fbbf24" size={30} /></a>
          </button> */}

        </div>

      </div>

    </div>
  )
}
