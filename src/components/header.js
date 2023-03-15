import Link from 'next/link'
import styles from '@/styles/Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <a href='https://burnout-buster.netlify.app/' className={styles.logo}>Burnout Buster</a>
    </header>
  )
}

export default Header
