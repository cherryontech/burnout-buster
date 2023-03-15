import Link from 'next/link'
import styles from '@/styles/Results.module.css'

function Card() {
  return (
    <div className={styles.card}>
      <picture className={styles.card_image}>
        <source srcSet="https://sensa.health/static/06abdded9fa8e6e3e192540f099f1218/4b995/bean_in_heart.webp" type="image/webp" />
        <img
          src="https://sensa.health/static/06abdded9fa8e6e3e192540f099f1218/4b995/bean_in_heart.webp"
          alt="Antropomorphic cartoon bean relaxing inside a cartoon heart"
          width={250}
          // height={500}
        />
      </picture>

      <section className={styles.card_text}>
        <div className={styles.card_title}>
          <h2>Sensa.health</h2>
          <p className={styles.tag}>Mental health support</p>
        </div>

        <div>
          <p>CBT (Cognitive Behavioral Therapy) content to calming exercises, and even guides on self-improvement your journey to a stress-free life has never been quite so simple.</p>
        </div>

        <div className={styles.card_redirect}>
          <Link href="https://sensa.health/" className={[styles.card_resource_link, styles.tag].join(" ")}>Learn more</Link>
        </div>
      </section>
    </div>
  )
}

export default Card;
