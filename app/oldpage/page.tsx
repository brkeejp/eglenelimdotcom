import Image from 'next/image'

export default function OldPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          src="/eglenelim.svg"
          alt="Eğlenelim Logo"
          width={600}
          height={400}
          priority
        />
        <div>
          <p>Yolda muhteşem bir şey var! Çok yakında, oyun dünyasının üstadı olan oyuncularla bir araya gelip, birlikte gruplar kurabileceğiniz bir platform geliyor. Şimdi düşün, oyunlarda karşılaştığın ve "Nasıl oynuyor bu?" dediğin o efsanevi oyuncularla aynı takımda yer almak mümkün olacak!</p>
          <br />
          <p>Eğer cevabın evetse, seni de aramızda görmekten dolayı heyecan duyuyoruz. Bu platform, oyun deneyimini bir üst seviyeye taşımanın yanı sıra, eğlenceli ve rekabet dolu anlar yaşamanı sağlayacak. Takipte kalmayı unutma, çünkü bu heyecanı kaçırmak istemeyeceksin! 🎮🚀</p>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>
      </div>
    </main>
  )
}
