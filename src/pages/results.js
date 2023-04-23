import Head from 'next/head'
import styles from '@/styles/Results.module.css'
import Card from '../components/card.js'
import Navbar from '@/components/navbar.js';
import { resultsObject } from '@/data/results.js'
import { Results_data } from "../../context/context";
import { useContext } from "react";
import { quizResults } from './quiz.js';
import {
  rankTagsScores,
  deleteLastPlaceResults,
  sortResultsObject,
} from '@/utils/quiz_logic'


export default function Results() {
  const { answer } = useContext(Results_data);

  // Reference for how answers get filtered
  let tagsResults = {
    affordable: ['sensa', 'pocketwell'],
    job: ['jobnetwork'],
    community: ['sidebyside', 'mighty'],
  }

  // PROCESS USER INPUT. Add tags for each of the questions then push to an array
  let results = [];

  answer?.forEach(element => {
    results.push(element.userAnswer);
  });

  let tagsScoresObj = {
    affordable: results[0],
    job: results[1],
    community: results[2],
  };
  console.log('Sorted answers with tags: ', tagsScoresObj);

  // 1. rank tags scores
  let rankedScores = rankTagsScores(tagsScoresObj);
  // 2. remove last place results
  deleteLastPlaceResults(rankedScores, tagsResults, resultsObject);
  // 3. return sorted results object (final output)
  let finalOutput = sortResultsObject(resultsObject, rankedScores);

  return (
    <>
      <Head>
        <title>Results Page</title>
        <meta name="description" content="Results page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar emailMessage={finalOutput} emailFeature={true}/>

      <main className={styles.main}>
        <section className='results_intro'>
          <h1 className={styles.results_title}>Check these out&hellip;</h1>
        </section>

        <section className={styles.cards_container}>
          {finalOutput.map(itemArr => (
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
