console.log('CONNECTED')
const questions = [{
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

const element = document.getElementById('game-container');
const start = document.getElementById('start');
const aquestion = document.getElementById('question')
const answers = document.getElementsByClassName('answers')
var randQuestion;
var currentQuestionIndex;


/**
 * Function that starts the game when user 
 * clicks on the start button
 */
function startGame(){
    
    start.classList.add('hide');
    randQuestion = questions.sort(() => Math.random() - 5)
    currentQuestionIndex = 0;

    element.classList.remove('hide');
    return element
    newQuestion()
}

function newQuestion() {
    showQuestion(randQuestion[currentQuestionIndex]);
}

function showQuestion(question) {
    aquestion.innerText = 'hello';
    return aquestion;
}

