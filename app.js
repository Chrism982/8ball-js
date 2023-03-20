const ball = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answersArr = ['Tak!', 'Nie', 'Może', 'Cieżko powiedzieć...', 'Nie chcesz znać odpowiedzi na to pytanie... :/'];

//funkcja do wywołania animacji 
//funkcja do przechwyceniea i sprawdzenia imputa
//funkcja do generowania losowej odpowiedzi 

const animation = () => {
    ball.classList.add('shake-animation')
    setTimeout(checkInput, 1000)
}

const checkInput = () => {
    if(input.value !== '' && input.value.slice(-1) === '?'){
        randomAnswer();
        error.textContent = ''
    } else if (input.value !== '' && input.value.slice(-1) !== '?'){
        error.textContent = 'Pytanie musi być zakończone "?".'
        answer.textContent = ''
    } else {
        error.textContent = 'Musisz zadać jakieś pytanie'
        answer.textContent = ''
    }
    ball.classList.remove('shake-animation')
}

const randomAnswer = () => {
    
    const number = Math.floor(Math.random() * 5)

    answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[number]}`
}


ball.addEventListener('click', animation)