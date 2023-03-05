import Link from 'next/link'
import styles from '@/styles/Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.tag}>Home</Link>
      <div className={styles.logo}>Burnout Buster</div>
      <Link href="/" className={styles.tag}>Exit</Link>
    </header>
  )
}

export default Header
