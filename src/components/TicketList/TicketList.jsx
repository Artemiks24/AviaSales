/* eslint-disable react/jsx-props-no-spreading */
import { useSelector } from 'react-redux'

import Ticket from '../Ticket/Ticket'

import styles from './TicketList.module.scss'

export default function TicketList() {
  const count = useSelector((state) => state.count)
  const ticketList = useSelector((state) => state.tickets).slice(0, count)

  return (
    <ul className={styles.ticketList}>
      {ticketList.map((ticket) => (
        <Ticket key={ticket.id} {...ticket} />
      ))}
    </ul>
  )
}
