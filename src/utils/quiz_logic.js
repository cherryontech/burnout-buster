import { resultsObject } from '@/data/results.js'

let tagsScores = {
  affordable: 0,
  job: 0,
  community: 0,
}

// mocked tags' scores
// I just want to test the logic, this should come from the form/quiz
tagsScores = {
  affordable: 1,
  job: 3,
  community: 2,
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

let rankedScores = rankTagsScores(tagsScores)

// remove the one we don't care about from our object
function deleteLastTag(rankedScores, tagsResults) {
  let lastTag = rankedScores.slice(-1)[0]
  delete tagsResults[lastTag]

  return tagsResults
}

deleteLastTag(rankedScores, tagsResults)

// we want to match the remaining results to our resultsObject
// we want to sort the remaining results
