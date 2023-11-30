// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients')

// const liEl = document.createElement('li');

const liIngredients = ingredients.map(ingredient=> {
  const liEl = document.createElement('li');
  liEl.textContent = `${ingredient}`;
  liEl.classList = 'item';
  
  return liEl;
});
// console.log(liEl); 

listIngredients.append(...liIngredients)


