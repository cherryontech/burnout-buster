//Questions & input answers
const Content = [
    {
    question: "I feel exhausted, overwhelmed, and emotionally drained. I can\'t seem to find the motivation to keep going.",
    tag: "community", //added tag 
    quizAnswers: [
        {answer: 1}, 
        {answer: 2},
        {answer: 3},
        {answer: 4},
        {answer: 5},
        {answer: 6},
        {answer: 7}
    ]},
    {
    question: "Affording mental health support can be challenging right now.",
    tag: "affordable", //added tag 
    quizAnswers: [
        {answer: 1},
        {answer: 2},
        {answer: 3},
        {answer: 4},
        {answer: 5},
        {answer: 6},
        {answer: 7}
        ]},
    {
    question: "I am feeling overwhelmed and anxious about what the future holds, due to my recent job loss.",
    tag: "job", //added tag 
    quizAnswers: [
        {answer: 1},
        {answer: 2},
        {answer: 3},
        {answer: 4},
        {answer: 5},
        {answer: 6},
        {answer: 7}
    ]}
]

//Variable that holds tag scores
let tagsScores = {
    affordable: 0,
    job: 0,
    community: 0,
  };
  
  //Calculates tag scores
  Content.forEach((contentObj) => {
    const tag = contentObj.tag;
    const quizAnswers = contentObj.quizAnswers;
  
    quizAnswers.forEach((quizAnswer) => {
      const answer = quizAnswer.answer;
  
      // Increment the score of the tag by the value of the answer
      tagsScores[tag] += answer;
    });
  });
  
  console.log(tagsScores);

export default Content;

