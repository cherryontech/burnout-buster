import styles from '@/styles/Results.module.css'

function Card({imgUrl, imgAlt, cardTitle, cardTag, cardUrl, cardDesc}) {

  return (
    <div className={styles.card}>
      <picture>
        <source srcSet={imgUrl} type="image/webp" />
        <img
          src={imgUrl}
          alt={imgAlt}
          width={250}
          height={250}
          className={styles.card_image}
        />
      </picture>

      <section className={styles.card_text}>
        <div className={styles.card_title}>
          <h2>{cardTitle}</h2>
          <p className={styles.tag}>{cardTag}</p>
        </div>

        <div>
          <p>{cardDesc}</p>
        </div>

        <div className={styles.card_redirect}>
          <a href={cardUrl} rel="noreferrer" target="_blank" className={[styles.card_resource_a, styles.tag].join(" ")}>Learn more</a>
        </div>
      </section>
    </div>
  )
}

export default Card;
