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

const tagsResults = {
  affordable: ['sensa', 'pocketwell'],
  job: ['jobnetwork'],
  community: ['sidebyside', 'mighty'],
}

function handleTagsScores(tagsScores) {
  let tagsScoresArr = Object.entries(tagsScores)

  tagsScoresArr.sort(function(a, b) {
    return b[1] - a[1];
  })

  tagsScoresArrTopScores = tagsScoresArr.slice(0,-1)

  let finalTags = []
  tagsScoresArrTopScores.forEach( tag => finalTags.push(tag[0]))

  return finalTags
}

handleTagsScores(tagsScores)
