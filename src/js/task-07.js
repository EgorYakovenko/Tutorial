// Напиши скрипт, который реагирует на изменение значения 
// input#font - size - control(событие input) 
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const controlEl = document.querySelector('#font-size-control');

const spanEl = document.querySelector('#text');





controlEl.addEventListener('input', () => {
    
    spanEl.style.fontSize = controlEl.value + 'px';

    
     
})

const onInput = () => {
    
    spanEl.style.fontSize = controlEl.value + 'px';
}
onInput()
    




