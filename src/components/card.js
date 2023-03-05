import Link from 'next/link'
import styles from '@/styles/Results.module.css'

function Card() {
  return (
    <div className={styles.card}>
      <div className='card_tittle'>
        <h2>Sensa.health</h2>
      </div>

      <picture className={styles.card_image}>
        <source srcSet="https://sensa.health/static/06abdded9fa8e6e3e192540f099f1218/4b995/bean_in_heart.webp" type="image/webp" />
        <img
          src="https://sensa.health/static/06abdded9fa8e6e3e192540f099f1218/4b995/bean_in_heart.webp"
          alt="Antropomorphic cartoon bean relaxing inside a cartoon heart"
          width={250}
          // height={500}
        />
      </picture>

      <div className={styles.card_footer}>
        <div className='card_buttons'>
          <button className={styles.card_button}></button>
          <button className={styles.card_button}></button>
        </div>
        <div className={styles.tag}>
          <Link href="https://sensa.health/" className={styles.card_resource_link}>Learn more</Link>
        </div>
      </div>
    </div>
  )
}

export default Card;
