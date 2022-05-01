console.log('CONNECTED')

const element = document.getElementById('game-container');
const start = document.getElementById('start');
const aquestion = document.getElementById('question')
const answers = document.getElementById('answers')
const ans1 = document.getElementById('1')
const ans2 = document.getElementById('2')
const ans3 = document.getElementById('3')
const ans4 = document.getElementById('4')
const ansarr = [ans1, ans2, ans3, ans4]
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
  ans1.innerText = question.choice1
  ans2.innerText = question.choice2
  ans3.innerText = question.choice3
  ans4.innerText = question.choice4

  ansarr.classList.add('hide')
}

function selectAnswer(params) {
  
}
