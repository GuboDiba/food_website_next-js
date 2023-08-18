import Image from 'next/image'
import Navbar from './components/navbar/page'
import Homepage from './components/home/page'
import Footer from './components/footer/page'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar/>
      <Homepage/>
      <Footer/>
    </main>
  )
}
