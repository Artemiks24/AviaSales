import styles from './Tabs.module.scss'

// import classNames from 'classnames';

export default function Tabs() {
  return (
    <ul className={styles.tabs}>
      <li className={styles.button}>Самый дешевый </li>
      <li className={styles.button}>Самый быстрый</li>
      <li className={styles.button}>Оптимальный</li>
    </ul>
  )
}
