import { useSelector, useDispatch } from 'react-redux'

import { changeCheckedBoxes } from '../../store/aviaSlice'
import { selectBoxes } from '../../store/selectors'

import styles from './Filter.module.scss'

export default function Filter() {
  const boxes = useSelector(selectBoxes)
  const dispatch = useDispatch()

  return (
    <form className={styles.form}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Количество пересадок</legend>
        {boxes.map((box) => (
          <div key={box.id} className={styles.boxes}>
            <input
              type="checkbox"
              id={box.id}
              checked={box.checked}
              onChange={() => dispatch(changeCheckedBoxes(box.id))}
            />
            <label htmlFor={box.id}>{box.text}</label>
          </div>
        ))}
      </fieldset>
    </form>
  )
}
