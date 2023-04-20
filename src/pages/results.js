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
  // console.log('ANSWER: ', answer);


  let results = [];

  answer?.forEach(element => {
    // console.log(element.userAnswer);
    results.push(element.userAnswer);
  });
  console.log('RESULTS: ', results);

  let finalScores = {
    affordable: results[0],
    job: results[1],
    community: results[2],
  };
  console.log('FINAL SCORE: ', finalScores);

  let tagsResults = {
    affordable: ['sensa', 'pocketwell'],
    job: ['jobnetwork'],
    community: ['sidebyside', 'mighty'],
  }

  let rankedScores = rankTagsScores(finalScores);
  deleteLastPlaceResults(rankedScores, tagsResults, resultsObject);
  const sortedResultsObject = sortResultsObject(resultsObject, rankedScores);

  console.log('rankedScores: ', rankedScores);
  console.log('resultsObject: ', resultsObject);
  console.log('sortedResultsObject: ', sortedResultsObject)



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
        
        {console.log('sortedResultsObject: ', sortedResultsObject)}

        {/* <section className={styles.cards_container}>
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
        </section> */}

      

      </main>
    </>
  )
}
