import Head from 'next/head'
import styles from '@/styles/Results.module.css'
import Card from '../components/card.js'

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
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>
    </>
  )
}
