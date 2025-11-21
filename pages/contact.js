import styles from '../styles/Home.module.css'
import Link from 'next/link'
import PageTitle from '../components/pagetitle'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export default function Contact() {
  return (
    <div>

      <PageTitle title={"Contact"} />
      
      <div>

        <h2 className="text-xl font-semibold">
          Amanda Escaba <span className="font-normal text-lg">&#40;she/her&#41;</span>
        </h2>

        <p className="transition ease-in-out delay-75 hover:text-blueberry">
          <Link href="mailto:amandaescaba@gmail.com">amandaescaba@gmail.com &gt;</Link>
        </p>

        <div className="flex flex-row mt-6 space-x-4">
          <a href="https://drive.google.com/file/d/1YuvgyURkuiX-TyeJXHtA8w7q7M-AIOpa/view?usp=sharing" target="_blank" rel="noreferrer"
          >
           <p className="text-lg uppercase transition ease-in-out delay-75 hover:text-blueberry">Resume &gt;</p>
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
