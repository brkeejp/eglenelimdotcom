import Image from 'next/image'

export default function Header() {
  return (
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
  )
}
