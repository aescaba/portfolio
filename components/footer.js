// https://j471n.in/blogs/portfolio-tutorial#creating-layout

import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Footer() {
  return (
    <div className="relative mt-[10vh] py-20">
      <div className="absolute inset-x-0 bottom-0">
        <div className="flex flex-wrap space-y-4 sm:space-y-0 md:justify-between items-center text- sm:text-xs uppercase">
          <div className="flex">
            <p>designed & developed with next.js and tailwind</p>
          </div>
          <div className="flex space-x-8 uppercase">
            <p className="font-bold">Contact</p>
            <div className="transition ease-in-out delay-75 hover:text-blueberry"><a href="mailto:amandaescaba@gmail.com">email &gt; </a></div>
            <div className="transition ease-in-out delay-75 hover:text-blueberry"><a href="https://www.linkedin.com/in/aescaba/" target="_blank">linkedin &gt;</a></div>
          </div>
        </div>
        {/* <a className=""
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a> */}
      </div>
    </div>
  );
}