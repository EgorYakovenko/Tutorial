// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка "Anonymous".

const inputEl = document.querySelector('#name-input');
let spanEl = document.querySelector('#name-output');

const inputText = inputEl.addEventListener('input', (event) => {
    spanEl.textContent = event.currentTarget.value;
    
    if (spanEl.textContent === '') {
        spanEl.textContent = 'Anonymous'
    };      
});