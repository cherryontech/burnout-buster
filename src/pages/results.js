import Head from 'next/head'
import styles from '@/styles/Results.module.css'
import Card from '../components/card.js'
import Navbar from '@/components/navbar.js';
import { resultsObject } from '@/data/results.js'
import { Results_data } from "../../context/context";
import { useContext } from "react";
import { quizResults } from './quiz.js';
import { sortedResultsObject } from '@/utils/quiz_logic'


export default function Results() {
  const { answer } = useContext(Results_data);
  console.log('ANSWER: ', answer);
  
  return (
    <>
      <Head>
        <title>Results Page</title>
        <meta name="description" content="Results page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar emailMessage={resultsObject} emailFeature={true}/>

      <main className={styles.main}>
        <section className='results_intro'>
          <h1 className={styles.results_title}>Check these out&hellip;</h1>
        </section>
        
        {console.log(quizResults)}

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
