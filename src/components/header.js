import Link from 'next/link'
import styles from '@/styles/Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <Link href='/' className={styles.logo}>Burnout Buster</Link>
    </header>
  )
}

export default Header
