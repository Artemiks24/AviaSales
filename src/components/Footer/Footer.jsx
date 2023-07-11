import { useDispatch } from 'react-redux'

import { showMoreTickets } from '../../store/aviaSlice'

import styles from './Footer.module.scss'

export default function Footer() {
  const dispatch = useDispatch()
  return (
    <div className={styles.footer}>
      <button
        className={styles.footer__button}
        type="button"
        aria-label="Save"
        onClick={() => dispatch(showMoreTickets())}
      >
        Показать еще 5 билетов!
      </button>
    </div>
  )
}
