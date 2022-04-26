console.log('CONNECTED')
var element = document.getElementsByClassName('container');
var start = document.getElementById('start');

start.addEventListener('click', myFunction)

function myFunction() {
    start.classList.add('hide');
    element.classList.remove('hide');
}