import { useSelector } from 'react-redux'
import { Alert, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import Ticket from '../Ticket/Ticket'
import Footer from '../Footer/Footer'
import { selectCount, selectBoxes, selectStatus, selectTickets } from '../../store/selectors'

import styles from './TicketList.module.scss'
import { ALLSTOPS } from './consts'

function checkSearsh(stops, filters) {
  return filters.find((filter) => filter === stops) !== undefined
}

export default function TicketList() {
  const count = useSelector(selectCount)
  const boxes = useSelector(selectBoxes)
  const status = useSelector(selectStatus)
  const ticketList = useSelector(selectTickets)

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
      {status && (
        <div className="сentered">
          <Spin indicator={antIcon} />
        </div>
      )}
    </>
  )
}
