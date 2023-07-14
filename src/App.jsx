/* eslint-disable no-nested-ternary */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchTickets } from './store/aviaSlice'
import Header from './components/Header'
import Tabs from './components/Tabs/Tabs'
import Filter from './components/Filter'
import TicketList from './components/TicketList/TicketList'

export default function App() {
  const { error } = useSelector((state) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTickets())
  }, [dispatch])

  if (error) {
    return <h2 className="сentered">ошибка: {error}, пожалуйста обновите страницу</h2>
  }

  return (
    <>
      <Header />
      <Tabs />
      <Filter />
      <TicketList />
    </>
  )
}
