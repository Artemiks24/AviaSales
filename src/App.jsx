/* eslint-disable no-nested-ternary */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchTickets } from './store/aviaSlice'
import Header from './components/Header'
import Tabs from './components/Tabs/Tabs'
import Filter from './components/Filter'
import TicketList from './components/TicketList/TicketList'
import Footer from './components/Footer/Footer'

export default function App() {
  const { error, status } = useSelector((state) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTickets())
  }, [dispatch])

  return (
    <>
      <Header />
      <Tabs />
      <Filter />
      {status === 'loading...' ? (
        <h2 className="сentered">loading...</h2>
      ) : error ? (
        <h2 className="сentered">an error: {error}</h2>
      ) : (
        <>
          <TicketList />
          <Footer />
        </>
      )}
    </>
  )
}
