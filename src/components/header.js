import Link from 'next/link'
import styles from '@/styles/Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Burnout Buster</div>
    </header>
  )
}

export default Header
