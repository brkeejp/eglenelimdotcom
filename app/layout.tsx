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
            href='/'
            >
              <img src='' />
            </a>
        </header>
        {children}
        <footer>
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
              width={100}
              height={24}
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
              width={100}
              height={24}
              priority
            />
          </a>
        </footer>
      </body>
    </html>
  )
}
