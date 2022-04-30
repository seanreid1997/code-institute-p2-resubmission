console.log('CONNECTED')

const element = document.getElementById('game-container');
const start = document.getElementById('start');
const aquestion = document.getElementById('question')
const answers = document.getElementById('answers')
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
    newQuestion()
}

function newQuestion() {
  showQuestion(randQuestion[currentQuestionIndex]);
}

function showQuestion(question) {
  aquestion.innerText = question.question
  answers.innerText = question.choices[0]
  console.log()

}

