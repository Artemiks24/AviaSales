import Ticket from '../Ticket/Ticket'

import styles from './TicketList.module.scss'

export default function TicketList() {
  return (
    <ul className={styles.ticketList}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </ul>
  )
}
