import { format } from 'date-fns'

import styles from './Ticket.module.scss'

export default function Ticket({ ticket }) {
  const { price, segments, carrier } = ticket
  const transplant = (stops) => {
    if (stops.length === 1) {
      return `${stops.length} пересадка`
    }
    if (stops.length > 1) {
      return `${stops.length} пересадки`
    }
    return 'без пересадок'
  }
  return (
    <li className={styles.ticket}>
      <div className={styles.header}>
        <span className={styles.header__price}>{`${price} P`}</span>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} style={{ width: '90px', height: '35px' }} alt="banner" />
      </div>
      <div className={styles.section}>
        <div className={styles.section__container}>
          <span className={styles.section__hight}>{`${segments[0].origin} - ${segments[0].destination}`}</span>
          <span className={styles.section__low}>{`${format(Date.parse(segments[0].date), 'HH:mm')} - ${format(
            new Date(Date.parse(segments[0].date) + segments[0].duration * 60000),
            'HH:mm'
          )}`}</span>
        </div>
        <div className={styles.section__container}>
          <span className={styles.section__hight}>В пути</span>
          <span className={styles.section__low}>{`${Math.floor(segments[0].duration / 60)}ч ${
            segments[0].duration % 60
          }м`}</span>
        </div>
        <div className={styles.section__container}>
          <span className={styles.section__hight}>{transplant(segments[0].stops)}</span>
          <span className={styles.section__low}>{segments[0].stops.join(' ')}</span>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.section__container}>
          <span className={styles.section__hight}>{`${segments[1].origin} - ${segments[1].destination}`}</span>
          <span className={styles.section__low}>{`${format(Date.parse(segments[1].date), 'HH:mm')} - ${format(
            new Date(Date.parse(segments[1].date) + segments[1].duration * 60000),
            'HH:mm'
          )}`}</span>
        </div>
        <div className={styles.section__container}>
          <span className={styles.section__hight}>В пути</span>
          <span className={styles.section__low}>{`${Math.floor(segments[1].duration / 60)}ч ${
            segments[1].duration % 60
          }м`}</span>
        </div>
        <div className={styles.section__container}>
          <span className={styles.section__hight}>{transplant(segments[1].stops)}</span>
          <span className={styles.section__low}>{segments[1].stops.join(' ')}</span>
        </div>
      </div>
    </li>
  )
}
