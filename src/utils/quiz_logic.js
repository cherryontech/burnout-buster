import { resultsObject } from '@/data/results.js'

let tagsScores = {
  affordable: 0,
  job: 0,
  community: 0,
}

// mocked tags' scores
// I just want to test the logic, this should come from the form/quiz
tagsScores = {
  affordable: 2,
  job: 1,
  community: 3,
}

let tagsResults = {
  affordable: ['sensa', 'pocketwell'],
  job: ['jobnetwork'],
  community: ['sidebyside', 'mighty'],
}

// we rank the scores
function rankTagsScores(tagsScores) {
  let tagsScoresArr = Object.entries(tagsScores)

  tagsScoresArr.sort(function(a, b) {
    return b[1] - a[1];
  })

  let orderedTags = []
  tagsScoresArr.forEach( tag => orderedTags.push(tag[0]))

  return orderedTags
}


// remove the one we don't care about from our object
function deleteLastPlaceResults(rankedScores, tagsResults, resultsObject) {
  let lastTag = rankedScores.slice(-1)[0]

  let lastPlaceResults = tagsResults[lastTag]
  lastPlaceResults.forEach(result => delete resultsObject[result])

  return resultsObject
}


function sortResultsObject(resultsObject, rankedScores) {
  let betterPlacedTags = rankedScores.slice(0,-1)

  let orderedResultsArray = []
  betterPlacedTags.forEach( tag => tagsResults[tag].forEach( result => orderedResultsArray.push(resultsObject[result])))

  return orderedResultsArray
}

let rankedScores = rankTagsScores(tagsScores)
deleteLastPlaceResults(rankedScores, tagsResults, resultsObject)

export const sortedResultsObject = sortResultsObject(resultsObject, rankedScores)
