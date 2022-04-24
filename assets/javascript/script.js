let questions = [{
    question: 'What is 12 x 12?',
    answer1: '234',
    answer2: '122',
    answer3: '111',
    answer4: '144',
    correctAnswer: 4
},
{
    question: 'How many 100ml bottles of water can fit in a 1litre container?',
    answer1: '2',
    answer2: '10',
    answer3: '4',
    answer4: '8',
    correctAnswer: 2
}]

const question = document.getElementById('question');
const answers = document.getElementsByClassName('answers');
const progressBar = document.getElementById('progressBar');
const score = document.getElementById('score');
const MAX_QUESTIONS = 2;

console.log(questions);
let questionCounter;
let userScore;
let acceptingAnswer = false;

/**
 * Function that starts the game by
 * calling all relevant functions.
 */
function startGame(){
    questionCounter = 0;
    userScore = 0;
    availableQuestions = getRandomQuestion(questions, MAX_QUESTIONS);
}

