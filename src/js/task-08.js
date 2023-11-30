// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства,
// а значение поля - значением свойства.Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const formEl = document.querySelector('.login-form');
console.log(formEl)

formEl.addEventListener('submit', submitBtn);
const formData = {};
console.log(formData);

function submitBtn(event) {
    event.preventDefault();
    const inputEmail = formEl.elements.email.value;
    const inputPass = formEl.elements.password.value;
    
    formData.email = inputEmail;
    formData.password = inputPass;
    
    if (inputEmail === '' || inputPass === '') {
      alert('Заполните все поля')  
    };
    event.currentTarget.reset();
}

