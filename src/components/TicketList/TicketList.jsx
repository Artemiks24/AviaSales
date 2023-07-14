/* eslint-disable react/jsx-props-no-spreading */
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Alert, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import Ticket from '../Ticket/Ticket'
import Footer from '../Footer/Footer'
import { startTimer, stopTimer } from '../../store/aviaSlice'

import styles from './TicketList.module.scss'
import { ALLSTOPS } from './consts'

function checkSearsh(stops, filters) {
  return filters.find((filter) => filter === stops) !== undefined
}

export default function TicketList() {
  const dispatch = useDispatch()
  const { count, boxes, status, stop } = useSelector((state) => state)

  useEffect(() => {
    dispatch(startTimer())

    return () => {
      setTimeout(() => {
        dispatch(stopTimer())
      }, 4000)
    }
  }, [])

  // eslint-disable-next-line prefer-const
  let ticketList = useSelector((state) => state.tickets)

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 44,
      }}
      spin
    />
  )

  const filterTickets = () => {
    const checkedBoxes = boxes.filter((box) => box.checked)
    if (!checkedBoxes) return []
    if (checkedBoxes.find((box) => box.text === ALLSTOPS)) return ticketList
    if (ticketList) {
      return ticketList.filter((ticket) =>
        ticket.ticket.segments.some((seg) =>
          checkSearsh(
            seg.stops.length,
            checkedBoxes.map((box) => box.stops)
          )
        )
      )
    }
    return []
  }

  const newTicketList = filterTickets().slice(0, count)

  return (
    <>
      {newTicketList.length ? (
        <>
          <ul className={styles.ticketList}>
            {newTicketList.map((ticket) => (
              <Ticket key={ticket.id} {...ticket} />
            ))}
          </ul>
          <Footer />
        </>
      ) : (
        <Alert
          className={styles.alert}
          message="Рейсов, подходящих под заданные фильтры, не найдено"
          description="Выберете количество пересадок"
          showIcon
        />
      )}
      {(status || stop) && (
        <div className="сentered">
          <Spin indicator={antIcon} />
        </div>
      )}
    </>
  )
}
