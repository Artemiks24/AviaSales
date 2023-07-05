/* eslint-disable jsx-a11y/label-has-associated-control */
import styles from './Filter.module.scss'

export default function Filter() {
  return (
    <form className={styles.form}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Количество пересадок</legend>
        <div className={styles.boxes}>
          <input type="checkbox" id="box-1" />
          <label htmlFor="box-1">Все</label>
          <input type="checkbox" id="box-2" defaultChecked="" />
          <label htmlFor="box-2">Без пересадок</label>
          <input type="checkbox" id="box-3" />
          <label htmlFor="box-3">1 пересадка</label>
          <input type="checkbox" id="box-4" />
          <label htmlFor="box-4">2 пересадки</label>
          <input type="checkbox" id="box-5" />
          <label htmlFor="box-5">3 пересадки</label>
        </div>
      </fieldset>
    </form>
  )
}
