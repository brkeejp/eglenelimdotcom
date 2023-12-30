import Image from 'next/image'
import styles from './cats.module.css'

export default function Cats() {
  return (
    <div className={styles.cats}>
      <a
        className=""
        href="https://nextjs.org?utm_source=eglenelimdotcom&utm_medium=poweredbyheader"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by
        <Image
          src="/next.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={72}
          height={10}
          priority
        />
      </a>
      <span className='VSperator' />
      <a
        className=""
        href="https://brkee.net?utm_source=eglenelimdotcom&utm_medium=designedbyheader"
        target="_blank"
        rel="noopener noreferrer"
      >
        Designed by
        <Image
          src="/brkee_wide.svg"
          alt="brkee Logo"
          className="dark:invert"
          width={72}
          height={10}
          priority
        />
      </a>
    </div>
  )
}
