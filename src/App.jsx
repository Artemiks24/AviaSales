/* eslint-disable no-nested-ternary */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

import { fetchTickets } from './store/aviaSlice'
import Header from './components/Header'
import Tabs from './components/Tabs/Tabs'
import Filter from './components/Filter'
import TicketList from './components/TicketList/TicketList'

export default function App() {
  const { error, status } = useSelector((state) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTickets())
  }, [dispatch])

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 44,
      }}
      spin
    />
  )

  return (
    <>
      <Header />
      <Tabs />
      <Filter />
      {status === 'loading...' ? (
        <div className="сentered">
          <Spin indicator={antIcon} />
        </div>
      ) : error ? (
        <h2 className="сentered">ошибка: {error}, пожалуйста обновите страницу</h2>
      ) : (
        <TicketList />
      )}
    </>
  )
}
