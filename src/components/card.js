import Link from 'next/link'
import styles from '@/styles/Results.module.css'
import resultsObject from '../data/results.js';

const resultsObject2 = {
  sensa:  {
    image: "https://sensa.health/static/06abdded9fa8e6e3e192540f099f1218/4b995/bean_in_heart.webp",
    title: "Sensa.Health",
    tag: "Mental health support",
    url: "https://sensa.health/",
    description: "CBT (Cognitive Behavioral Therapy) content to calming exercises, and even guides on self-improvement your journey to a stress-free life has never been quite so simple."
  },
  pocketwell:  {
    image: "https://sensa.health/static/06abdded9fa8e6e3e192540f099f1218/4b995/bean_in_heart.webp",
    title: "Pocketwell",
    tag: "Mental health support",
    url: "https://sensa.health/",
    description: "The Wellness Together Canada program offers a range of services, including online self-assessments, self-guided courses, group coaching, and one-on-one counseling with trained professionals. The program also includes a crisis support line for individuals experiencing a mental health emergency."
  },
  sidebyside:  {
    image: "https://sensa.health/static/06abdded9fa8e6e3e192540f099f1218/4b995/bean_in_heart.webp",
    title: "Side by Side",
    tag: "Online community",
    url: "https://sensa.health/",
    description: "Side by Side is an online community where you can listen, share and be heard. Provides advice and support to empower anyone experiencing a mental health problem."
  },
  mighty:  {
    image: "https://sensa.health/static/06abdded9fa8e6e3e192540f099f1218/4b995/bean_in_heart.webp",
    title: "The Mighty",
    tag: "Online community",
    url: "https://sensa.health/",
    description: "The Mighty also offers a community feature where individuals can connect with others who share their experiences, ask questions, and provide support to one another. The platform covers a wide range of topics, including chronic illnesses, mental health, and disabilities, and aims to create awareness and reduce stigma surrounding these issues."
  },
  jobnetwork:  {
    image: "https://sensa.health/static/06abdded9fa8e6e3e192540f099f1218/4b995/bean_in_heart.webp",
    title: "Jobnetwork",
    tag: "Job search",
    url: "https://sensa.health/",
    description: "This website offers job listings, career advice, and resources to help you with your job search. They also have a section dedicated to managing stress and burnout while job searching."
  }
}

function Card({imgUrl, cardTitle, cardTag, linkUrl, cardDesc}) {

  return (
    <div className={styles.card}>
      <picture className={styles.card_image}>
        <source srcSet={imgUrl} type="image/webp" />
        <img
          src={imgUrl}
          alt="Antropomorphic cartoon bean relaxing inside a cartoon heart"
          width={250}
          // height={500}
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
          <Link href={linkUrl} className={[styles.card_resource_link, styles.tag].join(" ")}>Learn more</Link>
        </div>
      </section>
    </div>
  )
}



export default Card;
