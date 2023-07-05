import Banner from '../../pictures/S7 Logo.png'

import styles from './Ticket.module.scss'

export default function Ticket() {
  return (
    <li className={styles.ticket}>
      <div className={styles.header}>
        <span className={styles.header__price}>13 400 Р </span>
        <img className={styles.header__banner} src={Banner} alt="banner" />
      </div>
      <div className={styles.section}>
        <div className={styles.section__container}>
          <span className={styles.section__hight}>MOW – HKT</span>
          <span className={styles.section__low}>10:45 - 08:00</span>
        </div>
        <div className={styles.section__container}>
          <span className={styles.section__hight}>В пути</span>
          <span className={styles.section__low}>21ч 15м</span>
        </div>
        <div className={styles.section__container}>
          <span className={styles.section__hight}>2 пересадки</span>
          <span className={styles.section__low}>HKG, JNB</span>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.section__container}>
          <span className={styles.section__hight}>MOW – HKT</span>
          <span className={styles.section__low}>10:45 - 08:00</span>
        </div>
        <div className={styles.section__container}>
          <span className={styles.section__hight}>В пути</span>
          <span className={styles.section__low}>21ч 15м</span>
        </div>
        <div className={styles.section__container}>
          <span className={styles.section__hight}>2 пересадки</span>
          <span className={styles.section__low}>HKG, JNB</span>
        </div>
      </div>
    </li>
  )
}
