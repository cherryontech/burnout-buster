import Head from 'next/head'
import styles from '@/styles/Results.module.css'
import Card from '../components/card.js'

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

export default function Results() {
  return (
    <>
      <Head>
        <title>Results Page</title>
        <meta name="description" content="Results page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* to do: add cards with some results */}
        <section className='results_intro'>
          <h1>Check these out...</h1>
        </section>

        <section className={styles.cards_container}>
          {Object.entries(resultsObject2).map(itemArr => (
            <Card
              key={itemArr[0]}
              imgUrl={Object.values(itemArr[1].image)}
              cardTitle={Object.values(itemArr[1].title)}
              cardTag={Object.values(itemArr[1].tag)}
              linkUrl = {Object.values(itemArr[1].url)}
              cardDesc = {Object.values(itemArr[1].description)}
            />
          ))}
        </section>
      </main>
    </>
  )
}
