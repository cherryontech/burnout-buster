import Head from 'next/head'
import styles from '@/styles/Results.module.css'
import Card from '../components/card.js'
import { resultsObject } from '@/data/results.js'

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
          {Object.entries(resultsObject).map(itemArr => (
            <Card
              key={itemArr[0]}
              imgUrl={Object.values(itemArr[1].image)}
              imgAlt={Object.values(itemArr[1].alt)}
              cardTitle={Object.values(itemArr[1].title)}
              cardTag={Object.values(itemArr[1].tag)}
              cardUrl = {Object.values(itemArr[1].url)}
              cardDesc = {Object.values(itemArr[1].description)}
            />
          ))}
        </section>
      </main>
    </>
  )
}
