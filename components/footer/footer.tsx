import Image from 'next/image'
import styles from './footer.module.css'
import Cats from './cats/cats'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div>
          <Image
            src="/eglenelim.svg"
            alt="Eğlenelim Logo"
            width={150}
            height={50}
            priority
          />
        </div>
        <div>
          <p>Social</p>
          <a>Twitter ( X )</a>
          <a>Facebook</a>
          <a>Instagram</a>
          <a>Youtube</a>
        </div>
        <div>
          <p>Company</p>
          <a>About Us</a>
          <a>Team</a>
        </div>
        <div>
          <p>Community</p>
          <a>Join Us</a>
          <a>Blog</a>
        </div>
        <div>
          <p>Legal</p>
          <a>Terms of Use</a>
          <a>Cookie Policy</a>
          <a>Privacy Policy</a>
          <a>Terms & Conditions</a>
        </div>
      </div>
      <Cats />
    </footer>
  )
}
