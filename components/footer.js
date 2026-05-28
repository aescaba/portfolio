// https://j471n.in/blogs/portfolio-tutorial#creating-layout

import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Footer() {
  return (
    <div className="relative mt-[10vh] py-20">
      <div className="absolute inset-x-0 bottom-0">
        <div className="flex flex-col md:flex-row space-y-4 sm:space-y-0 justify-between gap-6 text-sm md:text-xs uppercase">
          <div className="flex flex-col">
            <p>designed & developed with next.js and tailwind</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 uppercase">
            <p className="font-bold">Contact</p>
            <div className="link"><a href="mailto:amandaescaba@gmail.com">email &gt; </a></div>
            <div className="link"><a href="https://www.linkedin.com/in/aescaba/" target="_blank">linkedin &gt;</a></div>
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