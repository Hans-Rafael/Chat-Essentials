import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>
        Deploy <span>-&gt;</span>
      </h2>
      <p>
        Instantly deploy your Next.js site to a shareable URL with Vercel.
      </p>
    </main>
  )
}
