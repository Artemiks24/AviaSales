/* eslint-disable jsx-a11y/label-has-associated-control */
import { useSelector, useDispatch } from 'react-redux'

import { changeCheckedBoxes } from '../../store/aviaSlice'

import styles from './Filter.module.scss'

export default function Filter() {
  const boxes = useSelector((state) => state.boxes)
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

// <div className={styles.boxes}>
// <input type="checkbox" id="box-1" />
// <label htmlFor="box-1">Все</label>
// <input type="checkbox" id="box-2" defaultChecked="" />
// <label htmlFor="box-2">Без пересадок</label>
// <input type="checkbox" id="box-3" />
// <label htmlFor="box-3">1 пересадка</label>
// <input type="checkbox" id="box-4" />
// <label htmlFor="box-4">2 пересадки</label>
// <input type="checkbox" id="box-5" />
// <label htmlFor="box-5">3 пересадки</label>
// </div>
