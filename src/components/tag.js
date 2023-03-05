import styles from '@/styles/Results.module.css'

function Tag({tagName}) {
  return (
    <li className={styles.tag}>{tagName}</li>
  )
}

export default Tag
