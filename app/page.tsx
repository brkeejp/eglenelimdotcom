import Carousel from '@/components/carousel/carousel'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div>

      </div>

      <div>
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

      <div>
      </div>
    </main>
  )
}
