
import { GlobalStyled } from '@/styles/globalStyles'
import { Header } from '@/components/Header'
import { CardList } from '@/components/CardsList'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <GlobalStyled />
      <Header />
      <CardList />
      <Footer />
    </>
  )
}
