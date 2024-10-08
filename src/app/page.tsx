import Header from '@/sections/Header'
import Hero from '@/sections/Hero'
import LatestArticles from '@/sections/LatestArticles'
import WhyUsSection from '@/sections/WhyUs'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <WhyUsSection />
      <LatestArticles />
    </div>
  )
}
