import Header from './components/Header'
import Tabs from './components/Tabs/Tabs'
import Filter from './components/Filter'
import TicketList from './components/TicketList/TicketList'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Header />
      <Tabs />
      <Filter />
      <TicketList />
      <Footer />
    </>
  )
}
