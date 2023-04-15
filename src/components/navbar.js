import Link from 'next/link'
import styles from '@/styles/Navbar.module.css';

function Navbar() {

  return (
    <nav className={styles.navbar}>
      <Link href='/' className={styles.tag}>Exit</Link>
    </nav>
  )
}

export default Navbar;
