// Используй массив объектов images для создания элементов <img> вложенных в <li>. 
// Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.


const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const gallery = document.querySelector('.gallery');
// console.log(gallery)

// const listImages = images.map(image => {

//   const imgEl = document.createElement('img');
//   imgEl.setAttribute('url', `${image.url}`);
//   imgEl.setAttribute('alt', `${image.alt}`);

//   const liEl = document.createElement('li');
//   liEl.append(imgEl)
//   console.log(liEl)


// });
// gallery.insertAdjacentHTML("afterend", listImages);




const galleryEl = document.querySelector('.gallery')

const galleryitem = images.map(image =>
  `<li><img 
    src="${image.url},
    alt=${image.alt}"/>
    </li>`)
  .join('');
galleryEl.insertAdjacentHTML("beforeend", galleryitem)
console.log(galleryitem)
