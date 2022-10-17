import styles from '../styles/Home.module.css'
import Link from 'next/link'
import PageTitle from '../components/pagetitle'

export default function Contact() {
  return (
    <div className={styles.container}>
      <main class="flex flex-col justify-center">

      <PageTitle title={"Contact"}/>

        <h2 class="text-2xl">
        Amanda Escaba
        </h2>

        <h3 class="text-xl">
            <Link href="mailto:amandaescaba@gmail.com">amandaescaba@gmail.com</Link>
        </h3>

      </main>

    </div>
  )
}
