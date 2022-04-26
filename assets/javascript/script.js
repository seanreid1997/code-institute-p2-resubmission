console.log('CONNECTED')
var element = document.getElementsByClassName('container');
var start = document.getElementById('start');

let questions = [{
    question: 'hi',
    answer: '1',
    answer: '2'
},
{
    question: 'hello',
    answer: '1',
    answer: '2'
},
{
    question: 'hello',
    answer: '1',
    answer: '2'
}
]

for (question in questions){
    console.log(question);
}


start.addEventListener('click', myFunction)

function myFunction() {
    start.classList.add('hide');
    element.classList.remove('hide');
}