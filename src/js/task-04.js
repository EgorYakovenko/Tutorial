// Создай переменную counterValue в которой будет храниться текущее значение счетчика
// и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай
// значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;


const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const span = document.querySelector('#value');



decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    span.textContent = counterValue;
});


incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    span.textContent = counterValue;
});

