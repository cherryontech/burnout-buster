import Head from 'next/head'
import styles from '@/styles/Results.module.css'
import Card from '../components/card.js'
import { resultsObject } from '@/data/results.js'
import { sortedResultsObject } from '@/utils/quiz_logic'

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
          <h1 className={styles.results_title}>Check these out...</h1>
        </section>

        <section className={styles.cards_container}>
          {sortedResultsObject.map(itemArr => (
            <Card
              key={itemArr[0]}
              imgUrl={itemArr.image}
              imgAlt={itemArr.alt}
              cardTitle={itemArr.title}
              cardTag={itemArr.tag}
              cardUrl = {itemArr.url}
              cardDesc = {itemArr.description}
            />
          ))}
        </section>
      </main>
    </>
  )
}
