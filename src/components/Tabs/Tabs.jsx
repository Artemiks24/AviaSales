import { useSelector, useDispatch } from 'react-redux'

import { changeActiveBtns } from '../../store/aviaSlice'

import styles from './Tabs.module.scss'

// import classNames from 'classnames';

export default function Tabs() {
  const btns = useSelector((state) => state.btns)
  const dispatch = useDispatch()

  return (
    <ul className={styles.tabs}>
      {btns.map((btn) => (
        <li key={btn.id} className={styles.tabs__item}>
          <button
            onClick={() => {
              dispatch(changeActiveBtns(btn.id))
            }}
            className={btn.active ? `${styles.active} ${styles.button}` : styles.button}
            type="button"
            aria-label="Save"
          >
            {btn.text}
          </button>
        </li>
      ))}
    </ul>
  )
}
