import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchTickets } from './store/aviaSlice'
import Header from './components/Header'
import Tabs from './components/Tabs/Tabs'
import Filter from './components/Filter'
import TicketList from './components/TicketList/TicketList'
import { selectError, selectStop } from './store/selectors'

export default function App() {
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine ? 'Онлайн' : 'Офлайн')
  const error = useSelector(selectError)
  const stop = useSelector(selectStop)
  const dispatch = useDispatch()

  useEffect(() => {
    if (onlineStatus === 'Онлайн') {
      dispatch(fetchTickets())
    }
  }, [dispatch, stop, onlineStatus])

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setOnlineStatus(navigator.onLine ? 'Онлайн' : 'Офлайн')
    }

    window.addEventListener('online', handleOnlineStatusChange)
    window.addEventListener('offline', handleOnlineStatusChange)

    return () => {
      window.removeEventListener('online', handleOnlineStatusChange)
      window.removeEventListener('offline', handleOnlineStatusChange)
    }
  }, [])

  return (
    <>
      <Header />
      <Tabs />
      <Filter />
      {onlineStatus === 'Офлайн' ? (
        <h2 className="сentered">ошибка: {error}, не удалось получить данные, попробуйте позже</h2>
      ) : (
        <TicketList />
      )}
    </>
  )
}
