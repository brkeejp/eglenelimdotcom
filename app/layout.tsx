import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eğlenelim mi?',
  description: 'Oyunlarda, uzmanından eğlenmeye ne dersin?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <header>
          <a
            href="/"
          >
            <Image
              src="/eglenelim.svg"
              alt="Eğlenelim Logo"
              width={100}
              height={25}
              priority
            />
          </a>
        </header>
        {children}
        <footer>
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
          </div>
          <div>
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
        </footer>
      </body>
    </html>
  )
}
