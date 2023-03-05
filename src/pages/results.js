import Head from 'next/head'
import styles from '@/styles/Results.module.css'
import Card from '../components/card.js'


export default function Results() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* to do: add cards with some results */}
        <section className='results_intro'>
          <h1>Here's what we came up with...</h1>
        </section>
        <section className='tags_container'>
          <ul className={styles.tags}>
            <li className={styles.tag}>Goal Setting</li>
            <li className={styles.tag}>Activity tracking</li>
            <li className={styles.tag}>Mental health support</li>
            <li className={styles.tag}>E-counseling</li>
          </ul>
        </section>
        <section className={styles.cards_container}>
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>
    </>
  )
}
