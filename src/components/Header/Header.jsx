import Logo from '../../pictures/Logo.svg'

import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={Logo} alt="logo" />
    </header>
  )
}
