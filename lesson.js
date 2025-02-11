// 1.1
// 1. Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.

// Math.sign(3);     //  1
// Math.sign(-3);    // -1
// Math.sign('-3');  // -1
// Math.sign(0);     //  0
// Math.sign(-0);    // -0
// Math.sign(NaN);   // NaN
// Math.sign('foo'); // NaN
// Math.sign();      // NaN

// const number = Math.sign(3);
// if ( number === 1) {
//   console.log ('положительное число')
// } else {
//   console.log ('число с минусом')
// }

// ================================================================================

// 2. Дана строка. Выведите в консоль длину этой строки.

// const string = 'Длина';
// const lengthString = string.length;
// console.log(lengthString)

// ================================================================================

// 3. Дана строка. Выведите в консоль последний символ строки.

// const string = 'Длина';
// const lengthString = string[string.length - 1];
// console.log(lengthString);

// ================================================================================

// 4.Дано число. Проверьте, четное оно или нет.

// const inputNumber = 6
// const number = inputNumber % 2;
// if (number ===0) {
//   console.log('Число целое');
// }else {
//   console.log('Не целое')
// }

// ================================================================================

// 5. Даны два слова. Проверьте, что первые буквы этих слов совпадают.

// const string1 = 'Длина';
// const string2 = 'Дюйм';
// const lengthString1 = string1.at(0);
// const lengthString2 = string2.at(0);

// if (lengthString1===lengthString2) {
//   console.log('Первый буквы совпадают');
// } else {
//   console.log('Первый не буквы совпадают');
// }

// ================================================================================

// 6.Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

// const string = 'Площадь';

// let res = string.endsWith('ь');

// switch (res) {
//   case true:
//     console.log ('Слово заканчивается на ь-знак');
//     break;

//     default:
//     console.log (string[string.length - 1]);
// }

// ================================================================================
// 1.2

// 1. Дано число. Выведите в консоль первую цифру этого числа.

// const number = 223;
// let firstNumber = String(number).charAt(0);
// console.log(firstNumber);

// ================================================================================

// 2.Дано число. Выведите в консоль последнюю цифру этого числа.

// const number = 223;
// let firstNumber = String(number).length;
// console.log(firstNumber);
// ================================================================================
// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

// ===============================АВТОПРОВЕРКА=================================================
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls =  fruits.slice(1,4);
// const lastThreeEls = fruits.slice(2);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);
// ================================================================================

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);
// console.log(allClients)

// const fruits = ["Яблуко", "Груша", "Апельсин"];
// const shoppingCart = fruits;
// shoppingCart.push("Банан");
// console.log(fruits.length);

// ================================================================================
// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// ================================================================================
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр
// order - массив чисел, и рассчитывает общую сумму его элементов.
// Общая сумма элементов должна сохраняться в переменной total,
// которая возвращается, как результат работы функции.

// function calculateTotalPrice(order) {
//   let total = 0;

// for (i = 0; i < order.length; i++) {
//     total += order[i];
// }

//   return total;
// }

//================================================================================
// Напиши функцию findLongestWord(string) которая принимает
// произвольную строку состоящую только из слов разделённых
// пробелом(параметр string) и возвращает самое длинное слово в этой
// строке.

// const str = "The quick brown fox jumped over the lazy dog ";
// const stringSpace = str.split(' ');
// let longString = '';

// for (i = 0; i < stringSpace.length; i += 1){
//     if (stringSpace[i].length > longString.length) {
//          longString = stringSpace[i]
//     }

// }
// console.log(longString);

//================================================================================

// Дополни код функции createArrayOfNumbers(min, max) так,
// чтобы она возвращала массив всех целых чисел от значения min до max.

// const max = 20;
// const min = 1;
// let newArray = [];

// for (let i = min; i <= max; i += 1) {
//     newArray.push(i);
//     console.log(newArray)
// }

//================================================================================

// Напиши функцию filterArray(numbers, value), которая принимает
// массив чисел(параметр numbers) и возвращает новый массив,
// в котором будут только те элементы массива numbers,
// которые больше чем значение параметра value(число).

// function filterArray(numbers, value) {
//     newArray = [];
//     for (i = 0; i <= numbers.length; i += 1) {
//         if (numbers[i] > value) {
//             newArray.push(numbers[i]);
//         }
//         console.log(newArray);
//     }
//     return newArray;

// }
// filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);

//================================================================================
// Функция checkFruit(fruit) принимает строку с названием фрукта
// (параметр fruit), и проверяет есть ли такой фрукт в массиве
// fruits.

// Дополни код функции так, что если:

// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//     return fruits.includes(fruit); // Change this line

// }

//================================================================================

// Напиши функцию getCommonElements(array1, array2) которая
// получает два массива произвольной длины в параметры array1
// и array2, и возвращает новый массив, состоящий из тех
// элементов, которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
//     let newArray = [];
//     for (let arr1 of array1) {
//         if (array2.includes(arr1)) {
//             newArray.push(arr1);
//         }
//     }
//     return newArray;
// }
// getCommonElements([1, 2, 3], [2, 4]);

//================================================================================

// Выполни рефакторинг кода функции calculateTotalPrice(order)
// заменив цикл for на for...of.

// const arr1 = [12, 85, 37, 4];

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let array of order) {
//       total += array;

//   }
//     console.log(total);
//   // Change code above this line
//   return total;
// }

// calculateTotalPrice(arr1)

//================================================================================

// Пример функции

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];
// const arr3 = [11, 12, 13, 14, 15];

// function sum(item) {
//    for (let i = 0; i < item.length; i += 1) {
//     item[i] = item[i] * 2;
// }
// console.log(item)
// }
// sum(arr1)
// sum(arr2)
// sum(arr3)

//================================================================================

// Напиши функцию filterArray(numbers, value), которая принимает
// массив чисел(параметр numbers) и возвращает новый массив,
// в котором будут только те элементы массива numbers,
// которые больше чем значение параметра value(число).
//=========
// Выполни рефакторинг функции filterArray(numbers, value)
//  заменив цикл for на for...of.
//=========

// function filterArray(numbers, value) {
//   // Change code below this line
//     const filteredNumbers = [];
//   for (let num of numbers) {
//     const number = num;
//     if (number > value) {
//         filteredNumbers.push(number);
//       }
//   }
//     console.log(filteredNumbers);
//   return filteredNumbers;
// }
// filterArray([12, 24, 8, 41, 76], 32)
// filterArray([1, 2, 3, 4, 5], 3)

//================================================================================

// Дополни выражения остатка от деления так,
// чтобы код проходил тесты.

// Объявлена переменная a
// Значение переменной a это число 0
// Объявлена переменная b
// Значение переменной b это число 1
// Объявлена переменная c
// Значение переменной c это число 3
// Объявлена переменная d
// Значение переменной d это число 5
// Объявлена переменная e
// Значение переменной e это число 2

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

//================================================================================

// Напиши функцию getEvenNumbers(start, end) которая
// возвращает массив всех чётных чисел от start до end.
// Чётным считается число которое делится на 2 без
// остатка(10 % 2 === 0).

// function getEvenNumbers(start, end) {
//     let evenArray = [];
//     for (let i = start; i <= end; i += 1){
//         if (i % 2===0 ) {
//             evenArray.push(i);
//         }
//     }
//     return evenArray;
//   }
// getEvenNumbers(2, 5);

//================================================================================

// Напиши функцию includes(array, value), которая делает тоже самое,
// что и метод массива массив.includes(значение) - проверяет,
// есть ли в массиве array значение value, возвращая true если
// есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя
// использовать метод массив.includes(значение).

// function includes(array, value) {

//     for (let i = 0; i < array.length; i+=1) {
//         if (array[i] === value) {
//             console.log(true)
//             return true;

//         }

// }
// return false;
// }

// // includes([1, 2, 3, 4, 5], 3)
//  includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter')

//================================================================================

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
// };

// console.log(book.title, book.genres);
// console.log(book.genres);

//================================================================================

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length-1];
// // Change code above this line
// console.log(ownerName)
// console.log(ownerPhone)
// console.log(ownerEmail)
// console.log(numberOfTags)
// console.log(firstTag)
// console.log(lastTag)

//================================================================================

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line
// console.log(aptRating)
// console.log(aptDescr)
// console.log(aptPrice)
// console.log(aptTags)

//================================================================================

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted")

// console.log(apartment.price)
// console.log(apartment.owner.name)
// console.log(apartment.tags)

//================================================================================

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = { country: "Jamaica", city: "Kingston" };

// console.log(apartment.area)
// console.log(apartment.location)

//================================================================================

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };
// console.log(product.name);
// console.log(price)

//================================================================================

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",

// };
// console.log(credentials)

//================================================================================
// Перебери объект apartment используя цикл for...in и запиши в
// массив keys все его ключи, а в массив values все значения его
// свойств.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (let apart in apartment) {

//   keys.push(apart);
//   // values.push(apart[apartment])
//   values.push(apartment[apart]);
// };

// console.log(keys)
// console.log(values)

//================================================================================

// Выполни рефакторинг решения предыдущего задания добавив
// в цикл for...in проверку на собственное свойство.

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//     values.push(apartment[key]);
//     console.log(key)
// }
//   // Change code above this line

// }
// // console.log(keys)
// // console.log(values)

//================================================================================

// Напиши функцию countProps(object), которая считает и
// возвращает количество собственных свойств объекта в
// параметре object.Используй переменную propCount для
// хранения количества свойств объекта.

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const totalProps in object) {
//     if (object.hasOwnProperty(totalProps))
//       propCount += 1;
//   }

// console.log(propCount)
//   // Change code above this line
//   return propCount;
// }
// countProps({ name: "Mango", age: 2 })
//================================================================================

// Перебери объект apartment используя метод Object.keys()
// и цикл for...of.Запиши в переменную keys массив ключей
// собственных свойств объекта apartment, и добавь в массив
// values все значения его свойств.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

//================================================================================

// Выполни рефакторинг функции countProps(object) используя
// метод Object.keys() и, возможно, но необязательно,
//   цикл for...of.

// function countProps(object) {

//   return Object.keys(object).length

// }
// countProps({ name: "Mango", age: 2 })
// console.log(countProps)

//================================================================================

// Запиши в переменную keys массив ключей собственных
// свойств объекта apartment, а в переменную values
// массив всех значений его свойств.Используй методы
// Object.keys() и Object.values().

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys)
// console.log(values)

//================================================================================

// Напиши функцию countTotalSalary(salaries) которая принимает
// объект зарплат, где имя свойства это имя сотрудника,
// а значение свойства это зарплата.Функция должна
// рассчитать общую сумму зарплат сотрудников и вернуть её.
// Используй переменную totalSalary для хранения общей суммы
// зарплаты.

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//     const totalValue = Object.values(salaries)
//     for (const salar of totalValue) {

//         totalSalary += salar
//         // console.log(totalSalary)
// }
//   // Change code above this line
//   return totalSalary;
// }
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 })
// console.log(totalSalary)

//================================================================================
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const key of colors) {

//     hexColors.push(key.hex)
//     rgbColors.push(key.rgb)

// }
// console.log(hexColors)
// console.log(rgbColors)

//================================================================================

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line

// // const prod = Object.keys(products)
//     for (const product of products) {
//       if (productName === product.name) {

//         return product.price;
//       }

//     }
//   return null;
//   // Change code above this line
// }
// console.log(getProductPrice("Radar"))

//================================================================================

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {

//   let returnValue = [];

//   for (const product of products) {
//     if (propName in product) {
//       returnValue.push(product[propName])
//     }
//   }
//      return returnValue;
// }

// getAllPropValues("name")
// console.log(getAllPropValues("name"))

//================================================================================

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;

//   for (const product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity
//     }
//   }
//   return totalPrice;

//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice("Radar"));

//================================================================================
// ==================== ДЕСТРУКТУРИЗАЦИЯ ====================
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;
// // console.log(highTemperatures)

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

//================================================================================

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

//================================================================================

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday:highYesterday, today:highToday, tomorrow:highTomorrow, icon:highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

//================================================================================

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {hex, rgb} of colors) {

//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors)
// console.log(rgbColors)

//================================================================================

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const { today: { low:lowToday, high:highToday, icon:todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },tomorrow:{low:lowTomorrow, high:highTomorrow, icon: tomorrowIcon="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} } = forecast;

// console.log(highToday);
// console.log(lowToday);
// console.log(todayIcon);

// console.log(highTomorrow);
// console.log(lowTomorrow);
// console.log(tomorrowIcon);

//================================================================================

// // Change code below this line
// function calculateMeanTemperature(forecast) {

//   const {today: {low:todayLow,high:todayHigh},tomorrow:{low:tomorrowLow, high:tomorrowHigh}  } = forecast;

//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} })
// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} })
// )

//================================================================================
// ==================== РАСПЫЛЕНИЕ ====================

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(bestScore)
// console.log(worstScore)

//================================================================================

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores,...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores)
// console.log(bestScore)
// console.log(worstScore)

//================================================================================

// function makeTask(data) {
//   // const completed = false;
//   // const category = "General";
//   // const priority = "Normal";
//   // Change code below this line

//   const { text } = data;

//     const newArr = {
//     text,
//     category,
//     priority,
//     completed
//   };
//   return {...newArr, ...data};
//   // Change code above this line
// }
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })

//================================================================================

// // Change code below this line
// function add(...args) {
//   let totalArgs = 0;
//   for (const arr of args) {
//     totalArgs += arr;
//   }
//   return totalArgs;
//   // Change code above this line
// }
//
// console.log(add(15, 27));

//================================================================================

// // Change code below this line
// function addOverNum(firstNumber, ...args) {
//   let total = 0;
// // console.log(total)
//   for (const arg of args) {
//     if (arg > firstNumber) {
//       total += arg;
//     }
//   }
//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

//================================================================================

// // Change code below this line
// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line
//   for (const arg of args) {
//     if (array.includes(arg)) {
//     matches.push(arg)
//   }
// }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7))

//================================================================================
// ==================== МЕТОДЫ ОБЪЕКТОВ ====================
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//     },
//     removeBook(bookName) {
//       return `Deleting book ${bookName}`
//     },
//     updateBook(oldName, newName) {
//         return `Updating book ${oldName} to ${newName}`
//     },
//   // Change code above this line
// };

//================================================================================

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//       const index = this.books.indexOf(oldName);
//       const array = this.books.splice(index, 1, newName)
//         console.log(array)
//       return array;

//     // Change code above this line
//   },
// };
// bookShelf.updateBook("Haze", "Dungeon chronicles")

//================================================================================

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     //   console.log(potions);
//         this.potions.push(potionName)

//     // Change code above this line
//     },

// };
// atTheOldToad.addPotion("Invisibility")
// console.log(atTheOldToad);

//================================================================================

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//       const oldIndex = this.potions.indexOf(oldName);
//       const addArray = this.potions.splice(oldIndex, 1, newName);

//         // console.log(addArray)
//         // console.log(oldIndex)
//     // Change code above this line
//   },
// };
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
// atTheOldToad.updatePotionName("Stone skin", "Invisibility")
// console.log(atTheOldToad)

//================================================================================

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     const potionNames = this.potions.map(potion => potion.name);
//     if (potionNames.includes(newPotion.name)) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     const potionIndex = this.potions.findIndex(potion => potion.name === potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },

//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.findIndex(potion => potion.name === oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions[potionIndex].name = newName;
//   },
// };

//================================================================================
//================================ Колбэк-функции ================================================

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;
// console.log(result)
// console.log(pointer)

//================================================================================

// // Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Mango", greet);

//================================================================================

// function deliverPizza(pizzaName) {

//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {

//   return callback(pizzaName);
// }

// console.log(makeMessage("Royal Grand", makePizza))
// console.log(makeMessage("Ultracheese", deliverPizza))

//================================================================================

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`)
// });

//================================================================================

// Необходимо написать логику обработки заказа пиццы.
// Выполни рефакторинг метода order так,
// чтобы он принимал вторым и третим параметрами два
// колбэка onSuccess и onError.
// Если в свойстве pizzas нет пиццы с названием из параметра
// pizzaName, метод order должен возвращать результат вызова
// колбэка onError, передавая ему аргументом строку
// "There is no pizza with a name <имя пиццы> in the assortment."
// Если в свойстве pizzas есть пицца с названием из параметра
// pizzaName, метод order должен возвращать результат вызова
// колбэка onSuccess, передавая ему аргументом имя заказанной
// пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и
// вызовы методов.Пожалуйста ничего там не меняй.

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, makePizza, onOrderError) {
//         if (this.pizzas.includes(pizzaName)) {
//         return makePizza(pizzaName)
//         }

//         return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError))

//================================================================================

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
//     orderedItems.forEach(function (number) {
//         totalPrice += number
//     })
//   // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]))

//================================================================================

// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

//================================================================================

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//   numbers.forEach(function (numbers) {
//       if (numbers > value) {
//         filteredNumbers.push(numbers);
//     }
//     })
//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3))

//================================================================================

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//   firstArray.forEach(function (firstArray) {
//     if (secondArray.includes(firstArray)) {
//       commonElements.push(firstArray);
//     }
//   })

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   return commonElements;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]))

//================================================= Стрелочные функции ===============================

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// }
// // function calculateTotalPrice(quantity, pricePerItem) {
// //   // Change code above this line
// //   return quantity * pricePerItem;
// // }
// console.log(calculateTotalPrice(5, 100))

// //================= неявный возврат =================
// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) =>
//   quantity * pricePerItem;

// // Change code above this line

//================================================================================

// Change code below this line
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach ((orderedItems) => {
//     totalPrice += orderedItems;
//   });

//   return totalPrice;
// }

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// Change code above this line

//================================================================================

// Change code below this line

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((numbers) => {
//     if (numbers > value) {
//       filteredNumbers.push(numbers);
//     }
//   });
//     // Change code above this line
//   return filteredNumbers;
// }

//================================================================================

// Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }

//================================================================================

// function changeEven(numbers, value) {
//   // Change code below this line
//   const updatedNumbers = numbers.map((num) => {
//     if (num % 2 === 0) {
//       console.log(num + value)
//       return num + value;

//     }

//     return num;
//   });

//   return updatedNumbers;

//   // Change code above this line
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10))

//================================================================================

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths)

//================================================================================

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);
// console.log(titles)

//================================================================================

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Массив объектов с именами Mango и Kiwi

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Массив с одним объектом Ajax

// // В коллбек-функции удобно деструктуризировать свойства объекта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Массив объектов с именами Poly и Houston

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks)
// console.log(booksByAuthor)

//================================================================================

// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {

//   return users.filter(user => user.eyeColor === color)

// };
// // Change code above this line

//================================================================================

// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(user => user.age >= minAge && user.age <= maxAge);

// };
// // Change code above this line

//================================================================================

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]
// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friends.includes(friendName));
// };
// // Change code above this line

//================================================================================

// // Change code below this line
// const getFriends = (users) => {
//   const friends = users.flatMap(user => user.friends).filter((friend, index, array) => array.indexOf(friend) === index);
//   return friends
// };
// // Change code above this line

// // const books = [
// //   {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     genres: ["adventure", "history"],
// //   },
// //   {
// //     title: "Beside Still Waters",
// //     author: "Robert Sheckley",
// //     genres: ["fiction", "mysticism"],
// //   },
// //   {
// //     title: "Redder Than Blood",
// //     author: "Tanith Lee",
// //     genres: ["horror", "mysticism", "adventure"],
// //   },
// // ];
// // // Change code below this line
// // const allGenres = books.flatMap(book => book.genres);
// // const uniqueGenres = allGenres.filter((genre, index, array)
// //  => array.indexOf(genre) === index);

//================================================================================

// // Change code below this line
// const getActiveUsers = (users) => {
//    return users.filter(user => user.isActive === true)
// };
// // Change code above this line

//================================================================================

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// console.log(bookWithTitle)
// console.log(bookByAuthor)
//================================================================================

// // Change code below this line
// const getUserWithEmail = (users, email) => {
//    return users.find(user => user.email === email)
// };
// // Change code above this line

//================================================================================

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(firstEven => firstEven % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(firstOdd => firstOdd % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(secondEven =>secondEven % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(secondOdd => secondOdd % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(thirdEven => thirdEven % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(thirdEven => thirdEven % 2 !== 0);

// console.log(eachElementInFirstIsEven)
// console.log(eachElementInFirstIsOdd)

// console.log(eachElementInSecondIsEven)
// console.log(eachElementInSecondIsOdd)

// console.log(eachElementInThirdIsEven)
// console.log(eachElementInThirdIsOdd)

//================================================================================

// // Change code below this line
// const isEveryUserActive = (users) => {
//    return users.every(user => user.isActive === true)
// };
// // Change code above this line

//================================================================================

// const firstArray = [33, 33, 35, 37];
// const secondArray = [10, 20, 40];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(firstEven => firstEven % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(firstOdd => firstOdd % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(secondEven => secondEven % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(secondEven => secondEven % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(ThirdEven => ThirdEven % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(ThirdEven => ThirdEven % 2 !== 0);

// // console.log(anyElementInFirstIsEven)
// console.log(anyElementInFirstIsOdd)

//================================================================================

// // Change code below this line
// const isAnyUserActive = users => {
//    return users.some(user => user.isActive === true)
// };
// // Change code above this line

//============================================= reduce =============================

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((acc , playtimes) => acc + playtimes, 0)

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(playtimes)
// console.log(totalPlayTime)
// console.log(averagePlayTime)

//================================================================================

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const time = players.map(player => player.playtime)
// const game = players.map(player => player.gamesPlayed)

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => acc + player.playtime / player.gamesPlayed,0);

// console.log(time)
// console.log(game)
// console.log(totalAveragePlaytimePerGame)

//================================================================================

// // Change code below this line
// const calculateTotalBalance = users => {
//   return users.reduce((acc, total) => acc + total.balance, 0);
// };
// // Change code above this line

//================================================================================

// // Change code below this line
// const calculateTotalBalance = users => {
//   return users.reduce((acc, total) => acc + total.friends.length, 0);
// };
// // Change code above this line

//============================sort()====================================================

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line
// const ascendingReleaseDates = [...releaseDates].sort();
// const alphabeticalAuthors = [...authors].sort();
// console.log(ascendingReleaseDates)
// console.log(authors)

//================================================================================

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort ((a, b)=> a-b);

// const descendingReleaseDates = [...releaseDates].sort ((a, b)=> b-a);

// console.log(ascendingReleaseDates)
// console.log(descendingReleaseDates)

//================================================================================

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b)=> a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b)=> b.localeCompare(a));

// console.log(authorsInAlphabetOrder)
// console.log(authorsInReversedOrder)

//================================================================================

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// console.log(sortedByAuthorName)
// console.log(sortedByReversedAuthorName)
// console.log(sortedByAscendingRating)

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

// const inAscendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = [...students].sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

// console.log(inAscendingScoreOrder)
// console.log(inDescendingScoreOrder)
// console.log(inAlphabeticalOrder)

//================================================================================

// // Change code below this line
// const sortByAscendingBalance = users => {
//    return users.sort((a, b) => a.balance - b.balance)
// };
// // Change code above this line
//================================================================================
// // Change code below this line
// const sortByAscendingBalance = users => {
//   return [...users].sort((a, b) => b.friends.length - a.friends.length);
// };
// // Change code above this line
//================================================================================
// // Change code below this line
// const sortByName = users => {
//    return [...users].sort((a, b)=>a.name.localeCompare(b.name))
// };
// // Change code above this line
//================================================================================

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books].filter((book) => book.rating >= MIN_BOOK_RATING)
// .sort((a, b) => a.author.localeCompare(b.author)).map((book) => book.author);
// console.log(names)

//================================================================================
// // Change code below this line
// const getNamesSortedByFriendCount = users => {
//    return [...users].sort((a, b) => a.friends.length - b.friends.length).map((user) => user.name);
// };
// // Change code above this line

//================================================================================
//=============================== 5-й МОДУЛЬ =================================================
//================================================================================

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;

// console.log(child.age);

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;

//   }
//   // Change code below this line
//     getPrice() {
//       return this.price;
//     }

//     changePrice(newPrice){
//       this.price = newPrice;
//     }

//   // Change code above this line
// }

//================================================================================

// class Storage {
//   constructor(items){
//     this.items = items;
//   }
//   getItems(){
//     return this.items;
//   }
//   addItem(newItem){
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     let myIndex = this.items.indexOf(itemToRemove);
//       if(myIndex !==-1) {
//         this.items.splice(myIndex, 1)
//       }
//   }

// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//================================================================================

// class StringBuilder {
//     constructor(value) {
//         this.value = value;
//     }
//     getValue() {
//         return this.value;
//     }
//     padEnd(str) {
//         this.value += str;
//     }
//     padStart(str) {
//         this.value = str + this.value;
//     }
//     padBoth(str) {
//         this.value = str + this.value + str;
//     }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

//================================================================================

// class Car {
//   // Change code below this line
//         #brand = brand;
//   constructor({ brand, model, price }) {

//         this.model = model;
//         this.price = price;
//     }
//     getBrand() {
//         return this.#brand;
//     }
//     changeBrand(newBrand) {
//         this.#brand = newBrand;
//     }

//   // Change code above this line
// }

//================================================================================

// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get getBrand() {
//     return this.#brand;
//   }

//   set changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get getModel() {
//     return this.#model;
//   }

//   set updateModel(newModel) {
//     this.#model = newModel;
//   }

//   get getPrice() {
//     return this.#price;
//   }

//   set setPrice(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }

//================================================================================

// class Car {
//   // Change code below this line
//     static MAX_PRICE = 50000;

//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//     set price(newPrice) {
//         if (newPrice <= Car.MAX_PRICE) {
//             this.#price = newPrice;

//       }

//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

//================================================================================

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//     static checkPrice(price) {
//         if (price > this.#MAX_PRICE) {
//         return "Error! Price exceeds the maximum"
//         }
//         return "Success! Price is within acceptable limits"
// }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

//================================================================================

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line

// class Admin extends User {

//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser"
//     }
// }

//================================================================================

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line
//     constructor({ email, accessLevel }) {
//         super(email),
//         this.accessLevel = accessLevel
//     }

//   static AccessLevel = {
//     BASIC: "basic",
//       SUPERUSER: "superuser",
//   };

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser

//================================================================================
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line
//     blacklistedEmails = [];
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     }

//     blacklist(email) {
//         this.blacklistedEmails.push(email);
//     }
//     isBlacklisted(email) {
//         return this.blacklistedEmails.includes(email);
//     }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// const date = new Date();

// console.log(date);
// console.log(new Date(0));
// console.log("getDate(): ", date.getDate());
// console.log("getDay(): ", date.getDay());
// console.log("getMonth(): ", date.getMonth());
// console.log("getFullYear(): ", date.getFullYear());

// // Возвращает час
// console.log("getHours(): ", date.getHours());

// // Возвращает минуты
// console.log("getMinutes(): ", date.getMinutes());

// // Возвращает секунды
// console.log("getSeconds(): ", date.getSeconds());

// // Возвращает миллисекунды
// console.log("getMilliseconds(): ", date.getMilliseconds());

// const date = new Date();
// console.log("Date: ", date);

// // Возвращает день месяца от 1 до 31
// console.log("getUTCDate(): ", date.getUTCDate());

// // Возвращает день недели от 0 до 6
// console.log("getUTCDay(): ", date.getUTCDay());

// // Возвращает месяц от 0 до 11
// console.log("getUTCMonth(): ", date.getUTCMonth());

// // Возвращает год из 4 цифр
// console.log("getUTCFullYear(): ", date.getUTCFullYear());

// // Возвращает час
// console.log("getUTCHours(): ", date.getUTCHours());

// // Возвращает минуты
// console.log("getUTCMinutes(): ", date.getUTCMinutes());

// // Возвращает секунды
// console.log("getUTCSeconds(): ", date.getUTCSeconds());

// // Возвращает миллисекунды
// console.log("getUTCMilliseconds(): ", date.getUTCMilliseconds());

// const isSuccess = false;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });
// console.log(promise)

// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Will run first
// console.log("Before promise.then()");

// // Registering promise callbacks
// promise.then(
//   // onResolve will run third or not at all
//   value => {
//     console.log("onResolve call inside promise.then()");
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   // onReject will run third or not at all
//   error => {
//     console.log("onReject call inside promise.then()");
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// // Will run second
// console.log("After promise.then()");

// function sum(a, b) {
//   return a + b;
// }

// const res = sum(4, 6);
// console.log(res);

// console.log(Math.random()*(max-min)+min);

// const res = Math.random() * 100

// console.log(Math.round(res));

// const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue']
// const max = colors.length - 1;
// const min = 0;
// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);

// document.body.style.backgroundColor = color;

// const i = false && 4 && 7 && 'mango';
// console.log(i);

// const ili = false || 5 || null || 0;
// console.log(ili)

// const ne = !false
// console.log(ne)

// const x1 = 10;
// const x2 = 30;
// const number = 50;

// console.log(`Число ${number} попадает в отрезок до ${x1}`, number < x1)
// console.log(`Число ${number} попадает в отрезок до ${x2}`, number > x2)
// console.log(`Число ${number} попадает в отрезок до ${x1}`, number > x1 && number < x2);
// console.log(`Число ${number} попадает в отрезок до ${x1} или после ${x2}`, number < x1 || number > x2);

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('Можно открыть чат?', canOpenChat)

// const minSalary = 500;
// const maxSalary = 5000;
// const employes = 5;
// let totalSalary = 0;

// for (let i = 1; i <= employes; i += 1){
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`ЗП работника номер ${i} - ${salary}`)
//     totalSalary += salary
// }
// console.log(totalSalary)

// const min = 0;
// const max = 10;
// let total = 0;

// for (let i = min; i <= max; i += 1){

//     if (i % 2 === 0) {
//         console.log('четное', i)
//         total += i;
//     }

// }
// console.log('total',total)
// ========================================================================

// function findNumber(start, end, divisor) {
//   // Change code below this line
// //   let number;

//     for (let i = start; i < end; i += 1) {
//       console.log(i)
//       if (i % divisor === 0) {

//       return i;
//     }
//   }

//   return number;
//   // Change code above this line
// }

// // findNumber(2, 6, 5) //возвращает 5
// console.log(findNumber(8, 17, 3))
//==========================================================================

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let num of numbers) {
//     const number = num;
//     console.log('Это функции:', number)
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// console.log('Это вызов функции:', filterArray([1, 2, 3, 4, 5], 3))
// // filterArray([1, 2, 3, 4, 5], 3) //возвращает [4, 5]
//=============================================================================

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }
// // console.log(checkFruit("plum"))

// const test = checkFruit("pear");
// console.log(test)
//=======================================================================

// function filterArray(numbers, value) {
//    // Change code below this line
// let newArray = [];
//     for (let i = 0; i <= numbers.length; i += 1) {
//         if (numbers[i] > value) {
//             newArray.push(numbers[i]);
//         }

//     }
//     return newArray;

//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 4))
//=====================================================================

// function findLongestWord(string) {
//   // Change code below this line
//   const stringSpace = string.split(' ');
//   let longString = '';

//     for (let i = 0; i < stringSpace.length; i += 1){

//     if (stringSpace[i].length > longString.length) {
//       longString = stringSpace[i]
//       console.log(stringSpace[i])
//     }

//   }

// return longString;
//   // Change code above this line
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
// // findLongestWord("The quick brown fox jumped over the lazy dog") //возвращает jumped
//=======================================================================

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: 'Henry',
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   }
// };

// const { imgUrl, descr, rating, price } = apartment
// console.log(price, imgUrl)

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola"
// apartment.tags.push("trusted")

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = { country: "Jamaica", city: "Kingston" }

// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length -1];

// console.log('Исходный объект -', apartment);
// console.log('Рейтинг -', aptRating);
// console.log('Описание -', aptDescr);
// console.log('Цена -', aptPrice);
// console.log('Теги -', aptTags);
// console.log('последний тег -', lastTag);
// console.log('Имя -', ownerName);

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
// [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",

//   // Change code above this line
// };

// console.log([emailInputName])

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(bestScore)

// ================================================================================
// function findNeedle(haystack) {
//     console.log(haystack.indexOf("needle"))
//   return "found the needle at position " + haystack.indexOf("needle");
// }

// findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]);

//=================================================================================

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// function removeEveryOther(arr) {
//     let newArray = [];
//     for (let array of arr) {
//         if (array === 'Keep') {
//             newArray.push(array)
//             // console.log(newArray)

//         }

//     //   console.log([array])
//   }

//     return newArray;
// }

// console.log(newArray)
// // console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]))
// removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"])

// const abjA = {
//     x: 5,
//     showX() {
//         console.log('This v showthisX', this);
//         console.log(this.x);

//         const objB = {
//             y: 10,
//             showThis:() => {
//                 console.log('This v showthis', this)
//             }
//         }
//         objB.showThis()
//     }
// }

// abjA.showX()

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.forEach(function (number, index, array) {
//     console.log(number, index, array);
// });

// const doubleNums = numbers.map(number => {
//     console.log(number)
//     return number * 2
// });
// console.log('number', numbers)
// console.log('doubleNums' ,doubleNums)

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 345, points: 56, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 787, points: 34, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 543, points: 89, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 897, points: 94, online: true },
// ];

// const playerNames = players.map(player => {
//     console.log(player)
//     return player.name;
// });
// console.log('playerNames', playerNames)

// const updatePlayers = players.map(player => {
//     console.log(player)
//     return {
//         ...player,
//         points: player.points * 2,
//     };
// });
// console.table(updatePlayers)

// const playerId = 'player-3';

// const updatePlayers = players.map(player =>
//     playerId===player.id ? {...player, timePlayed: player.timePlayed +1000}:player,
// );
// console.table(updatePlayers)

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => {
//   console.log('number', number);
//   console.log('acc', acc);

//   return acc + number;
// }, 0);
// console.log(total);

// ============================================================

// const fruits = [
//   'apple',
//   'apple',
//   'plum',
//   'banana',
//   'pear',
//   'pear',
//   'orange',
//   'banana',
//   'kiwi',
//   'orange',
// ];

// const countFruit = list => {
//   const count = {};

//   list.map(f => {
//     if (!count[f]) {
//       count[f] = 1;
//     } else {
//       count[f]++;
//       console.log([f]);
//     }
//   });
//   return count;
// };
// console.log(countFruit(fruits));

// ===================codewars=========================================

// В вашем классе был тест, и вы его сдали. Поздравляем!
// Но вы амбициозный человек. Вы хотите знать, лучше ли вы, чем средний ученик в вашем классе.
// Вы получаете массив с результатами тестов ваших сверстников.
// Теперь подсчитайте среднее значение и сравните свой результат!
// Верните True, если вам лучше, иначе False!
// Примечание:
// Ваши баллы не включены в массив баллов вашего класса.
// Для расчета среднего балла вы можете добавить свой балл в данный массив!

// const classPoints = [12, 23, 34, 45, 56, 67, 78, 89, 90];

// function betterThanAverage(classPoints, yourPoints) {
//   const sum = classPoints.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   });
//   const average = sum / classPoints.length;

//   if (average > yourPoints) {
//     return false;
//   } else {
//     return true;
//   }
// }

// console.log(betterThanAverage(classPoints, 60));

//===================/codewars=========================================
// ===================codewars=========================================
// Натан любит кататься на велосипеде.
// Поскольку Натан знает, как важно избегать обезвоживания,
// он выпивает 0, 5 литра воды за час езды на велосипеде.
// Вам дано время в часах, и вам нужно вернуть количество литров, которое выпьет Натан,
// округленное до наименьшего значения.

// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

// function litres(time) {
//   return Math.floor(time * 0.5);
// }

// console.log(litres(3));
//===================/codewars=========================================
// ===================codewars=========================================
// Твоя работа
// Найдите сумму всех кратных n ниже m.
// Иметь ввиду
// n и m — натуральные числа (целые положительные)
// m исключено из кратных

// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

// function sumMul(n, m) {
//   if (n <= 0 || m <= 0) {
//     return 'INVALID';
//   }

//   let sum = 0;

//   for (let i = n; i < m; i += n) {
//     sum += i;
//   }

//   return sum;
// }

// console.log(sumMul(2, 9));
//===================/codewars=========================================

// ===================codewars=========================================
// Учитывая случайное неотрицательное число, вам необходимо вернуть цифры этого
// числа в массиве в обратном порядке.

// function digitize(n) {
//   return n.toString().split('').map(Number).reverse();
// }

// console.log(digitize(35231));
//===================/codewars=========================================
//=====================================================================
// ===================codewars=========================================
// После тяжелого квартала в офисе вы решаете немного отдохнуть в отпуске.
// Итак, вы забронируете рейс для себя и своей девушки и постараетесь оставить позади весь этот
// беспорядок.
// Вам понадобится арендованный автомобиль, чтобы передвигаться во время отпуска.

// Менеджер по прокату автомобилей делает вам несколько выгодных предложений.
// Каждый день аренды автомобиля стоит 40 долларов.Если вы арендуете автомобиль на 7 и более дней,
// вы получите скидку 50 долларов США.Альтернативно,
// если вы арендуете автомобиль на 3 или более дней, вы получите скидку 20 долларов США.

// Напишите код, который выдает общую сумму за разные дни(d).

// 1день = 40
// скидка на 7 и более дней 50
// скидна на 3 и более дня 20

// function rentalCarCost(d) {
//   if (d < 3) {
//     return d * 40;
//   }
//   if (d >= 7) {
//     return d * 40 - 50;
//   }
//   if (d <= 7 && d >= 3) {
//     return d * 40 - 20;
//   }
// }

// console.log(rentalCarCost(3));

//===================/codewars=========================================
//=====================================================================
// ===================codewars=========================================

// Набрать максимальное колличество очков при спуске с горы
// вход парам [[6], [7,10], [12,11,9], [90,25,13,14]]
// Рез 115

// function findPath(mountain) {
//   let point = mountain.map(subArray => console.log(subArray[0]));
//   // let point = mountain.map(subArray => Math.max(...subArray));
//   let sum = point.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     0
//   );
//   //   console.log(sum);
//   return mountain;
// }

// console.log(findPath([[6], [7, 10], [12, 11, 9], [90, 25, 13, 14]]));

// function maxScoreFromMountain(mountain) {
//   // Первый шаг: начинаем с предпоследнего ряда
//   for (let i = mountain.length - 2; i >= 0; i--) {
//     for (let j = 0; j < mountain[i].length; j++) {
//       // Выбираем большего из левого и правого соседа на следующем уровне
//       let leftNeighbor = mountain[i + 1][j];
//       console.log(leftNeighbor);
//       let rightNeighbor = mountain[i + 1][j + 1];
//       mountain[i][j] += Math.max(leftNeighbor, rightNeighbor);
//     }
//   }
//   // Результат находится в вершине горы
//   return mountain[0][0];
// }

// let mountain = [[6], [7, 10], [12, 11, 9], [90, 25, 13, 14]];
// let maxScore = maxScoreFromMountain(mountain);
// // console.log(maxScore);

//                   [6]
//                 [7, 10]
//               [12, 11, 9]
//            [90, 25, 13, 14]
//          [98, 50, 68, 75, 33]
//        [80, 40, 22, 8, 42, 25];
//      [45, 35, 12, 78, 55, 23,68];

// function findPath(mountain, currentRow = 0, currentColumn = 0) {
//   // Базовый случай: если достигли нижнего уровня горы
//   if (currentRow === mountain.length - 1) {
//     return mountain[currentRow][currentColumn];
//   }

//   // Рекурсивный случай: выбираем направление с максимальным количеством очков
//   const leftNumber = findPath(mountain, currentRow + 1, currentColumn);
//   const rightNumber = findPath(mountain, currentRow + 1, currentColumn + 1);

//   // Возвращаем сумму значения текущей клетки и максимального количества очков из выбранного направления
//   return (
//     mountain[currentRow][currentColumn] + Math.max(leftNumber, rightNumber)
//   );
// }

// let mountain = [[6], [7, 10], [12, 11, 9], [90, 25, 13, 14]];
// let maxScore = findPath(mountain);
// console.log(maxScore);

// const mountain = [[1], [1, 100], [1, 1, 1], [1, 1, 1, 1]];
// function maxPoints(mountain) {
//   if (!mountain || mountain.length === 0) {
//     return 0;
//   }

//   const rows = mountain.length;

//   // Создаем копию горы для вычислений
//   const dp = mountain.map(row => [...row]);

//   // Начинаем с предпоследнего ряда
//   for (let i = rows - 2; i >= 0; i--) {
//     for (let j = 0; j < mountain[i].length; j++) {
//       const left = dp[i + 1][j];
//       const right = dp[i + 1][j + 1] || 0;

//       dp[i][j] += Math.max(left, right);
//     }
//   }

//   // Возвращаем максимальное значение в верхней ячейке (вершине горы)
//   return dp[0][0];
// }
// // Выводим результат
// console.log('Максимальное количество очков:', maxPoints(mountain));

// function maxScoreFromMountain(mountain, row = 0, col = 0) {

//   if (row === mountain.length - 1) {
//     return mountain[row][col];
//   }

//   const leftScore = maxScoreFromMountain(mountain, row + 1, col);
//   const rightScore = maxScoreFromMountain(mountain, row + 1, col + 1);

//   return mountain[row][col] + Math.max(leftScore, rightScore);
// }

// let mountain = [[6], [7, 10], [12, 11, 9], [90, 25, 13, 14]];
// let maxScore = maxScoreFromMountain(mountain);
// console.log(maxScore);

// function findPath(mountain) {
//   if (!mountain || mountain.length === 0) {
//     return 0;
//   }

//   const rows = mountain.length;
//   const cols = mountain[rows - 1].length;
//   // Создаем таблицу для хранения максимального количества очков
//   const dp = new Array(rows).fill(null).map(() => new Array(cols).fill(0));
//   console.log(dp);
//   // Начинаем сверху горы
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < mountain[i].length; j++) {
//       // Для верхней строки просто сохраняем значение
//       if (i === 0) {
//         dp[i][j] = mountain[i][j];
//       } else {
//         // Выбираем максимальное количество очков из доступных соседних клеток
//         const left = j - 1 >= 0 ? dp[i - 1][j - 1] : 0;
//         // console.log('left', left);
//         const right = j < mountain[i - 1].length ? dp[i - 1][j] : 0;
//         // console.log('right', right);
//         dp[i][j] = mountain[i][j] + Math.max(left, right);
//       }
//     }
//   }

//   return Math.max(...dp[rows - 1]);
// }

// // Пример входных данных
// const mountain = [[6], [7, 10], [12, 11, 9], [90, 25, 13, 14]];

// // Выводим результат
// console.log('Максимальное количество очков:', findPath(mountain));

// function findPath(mountain) {
//   if (!mountain || mountain.length === 0) {
//     return 0;
//   }

//   const rows = mountain.length;
//   const cols = mountain[rows - 1].length;

//   const dp = new Array(rows).fill(null).map(() => new Array(cols).fill(0));
//   console.log(dp);

//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < mountain[i].length; j++) {
//       if (i === 0) {
//         dp[i][j] = mountain[i][j];
//       } else {
//         const left = j - 1 >= 0 ? dp[i - 1][j - 1] : 0;

//         const right = j < mountain[i - 1].length ? dp[i - 1][j] : 0;

//         dp[i][j] = mountain[i][j] + Math.max(left, right);
//       }
//     }
//   }

//   return Math.max(...dp[rows - 1]);
// }

// const mountain = [[6], [7, 10], [12, 11, 9], [90, 25, 13, 14]];

// Выводим результат
// console.log('Максимальное количество очков:', findPath(mountain));

// const date = new Date();

// console.log(`Today is ${date.getFullYear()}`);

//=============================================================================

// const array = ['a', 'b', 'c', 'd', 'e'];

// const someArray = array.some(test => test === 'c' || test === 'f');
// console.log(someArray);

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arrayReduce = array.reduce((total, value) => total + value);

// console.log(arrayReduce);

// const array = ['a', 'b', 'a', 'b', 'a', 'b'];

// const arrayEvery = array.every(ar => ar === 'a' || ar === 'b');
// console.log(arrayEvery);

// const array = [[1, 2], [3, 4], 5, [6, 7, [8, 9]]];
// const arrayFlat = array.flat(Infinity);
// console.log(arrayFlat);

// const array = [
//   { id: 1, name: 'john' },
//   { id: 2, name: 'Ali' },
//   { id: 3, name: 'Mass' },
//   { id: 4, name: 'Mass' },
// ];

// const arrayFilter = array.filter(el => el.id === 2);
// console.log(arrayFilter);

// const arrayForEach = array.forEach(el => console.log(el.name + el.id));

// const arrayFindIndex = array.findIndex(el => el.name === 'Ali');
// console.log(arrayFindIndex);

// const arrayFind = array.find(el => el.id === 3);
// console.log(arrayFind.name);

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arrayFill = array.fill(0, 1, 7);
// console.log(arrayFill);

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const slice = array.slice(1, 6);
// console.log(slice);
// console.log(array);

// const userData = {
//   name: 'John',
//   age: 25,
//   isOnline: true,
// };

// // const object = Object.values(userData);
// // console.log(object);

// const object = Object.entries(userData);
// console.log(object);

// const promise = new Promise(function (res, rej) {
//   console.log('res', res);
//   console.log('rej', rej);
// });
// console.log(promise);
// console.log('First log');

// setTimeout(() => {
//   console.log('Second log');
// });

// console.log('Third log');

// console.log(setTimeout(2000));

//===========JWT Token=================

// import jwt from 'jsonwebtoken';

// const payload = { id: 123456, username: 'Larson' };
// const secret = 'secret word';
// const token = jwt.sign(payload, secret);
// const decode = jwt.decode(token);
// const verify = jwt.verify(token, secret);
// console.log('Token:', token);
// console.log('Decode:', decode);
// console.log('Verify:', verify);

//==================

// import express from 'express';

// const router = express.Router();

// router.post('/registration', async (req, res, next) => {
//   const { username, email, password } = req.body;
//   const user = await User.findOne({ email });
//   if (user) {
//     return res.status(409).json({
//       status: 'error',
//       code: 409,
//       message: 'Email is already in use',
//       data: 'Conflict',
//     });
//   }
//   try {
//     const newUser = new User({ username, email });
//     newUser.setPassword(password);
//     await newUser.save();
//     res.status(201).json({
//       status: 'success',
//       code: 201,
//       data: {
//         message: 'Registration successful',
//       },
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// ==================================
// function stringToArray(string){

// return string.split(' ')

// }

// stringToArray("Robin Singh")

// // ["Robin", "Singh"]
// =======================================

// cap — это количество людей, которое может вместить автобус, исключая водителя.
// on — количество людей в автобусе, не считая водителя.
// wait — это количество людей, ожидающих посадки в автобус, не считая водителя.
// Если места достаточно, верните 0, а если нет, верните количество пассажиров, которых он не сможет взять.

// function enough(cap, on, wait) {

// const bus = cap - on - wait

// if (bus < 0 ) {
//   return bus * -1
// }else {
//   return 0
// }

// console.log(bus);

// }
// console.log(enough(100,60,50));
// console.log(enough(10,5,5));
// console.log(enough(20,5,5));
// enough(100,60,50)
// enough(10,5,5)
// enough(20,5,5)

// // enough(10, 5, 5), 0);
// // enough(100, 60, 50), 10);
// // enough(20, 5, 5), 0);

// Вычислите, сколько лет назад отец был вдвое старше сына (или через сколько лет он будет вдвое старше). Ответ всегда больше или равен 0, независимо от того, было ли это в прошлом или в будущем.

// function twiceAsOld(dadYearsOld, sonYearsOld) {

// return Math.abs(sonYearsOld * 2 - dadYearsOld)
// }

// console.log(twiceAsOld(36,7));
// console.log(twiceAsOld(42,21));
// console.log(twiceAsOld(22,1));
// twiceAsOld(36,7) , 22)
// twiceAsOld(42,21) , 0)
// twiceAsOld(22,1) , 20)

// Учитывая месяц как целое число от 1 до 12, верните, к какому кварталу года он принадлежит, как целое число.

// Например: месяц 2 (февраль) является частью первого квартала; 6-й месяц (июнь) является частью второго квартала; и месяц 11 (ноябрь) является частью четвертого квартала.

// const quarterOf = (month) => {

//   if (month <= 3)
//     return 1
//     else if (month)

// }

// console.log(quarterOf(3));  //1
// console.log(quarterOf(4));  //2
// console.log(quarterOf(8));  //3
// console.log(quarterOf(11)); //4

// const username = "Poly";
// const message = "Welcome " + username + '!';
// console.log(message);

// function multiply(x, y, z) {
//     console.log(`Result: ${x * y * z}`);
//   }

//   console.log("Log before multiply execution");
//   multiply(2, 3, 5); // "Result: 30"
//   console.log("Log after multiply execution");

// Завершите решение так, чтобы оно возвращало true, если первый переданный аргумент (строка) заканчивается вторым аргументом (также строкой).

// function solution(str, ending){
// console.log(str.endsWith(ending));

// }

// solution('abcde', 'cde') // returns true
// // solution('abcde', 'abc') // returns false

// function evenOrOdd(number) {
//   if(number %2===0) {
//     console.log('Even');
//     return 'Even'
//   }else {
//     console.log('Odd');
//     return 'Odd'
//   }
// }
// evenOrOdd(2)
// evenOrOdd(7)

/*
Тимми и Сара думают, что влюблены, но где они живут, 
они узнают об этом только тогда, когда сорвут каждый 
по цветку. Если у одного цветка четное количество лепестков, 
а у другого нечетное, это означает, что они влюблены.
*/

// function lovefunc(flower1, flower2){
//   const sum = flower1 + flower2
//   if (sum % 2 ===0) {
//     console.log('false');
//     return false
//   } else {
//     console.log('true');
//     return true
//   }

// }

//   lovefunc(1,4)   // true
//   lovefunc(2,2)   // false
//   lovefunc(0,1)   // true
//   lovefunc(0,0)   // false

/*
Ваши одноклассники попросили вас скопировать для них кое-какие документы. 
Вы знаете, что одноклассников n, а в документах m страниц.

Ваша задача — посчитать, сколько пустых страниц вам нужно. Если n < 0 или m < 0, вернуть 0.

*/

// function paperwork(n, m) {
//   if (n > 0 && m > 0) {
//     console.log(n*m);
//     return n*m
//   }else {
//     console.log('0');
//     return 0
//   }
// }

//     paperwork(5,5)    // 25, 'Failed at paperwork(5, 5)'
//     paperwork(5,-5)   // 0, 'Failed at paperwork(5, -5)'
//     paperwork(-5,-5)  // 0, 'Failed at paperwork(-5, -5)'
//     paperwork(-5,5)   // 0, 'Failed at paperwork(-5, 5)'
//     paperwork(5,0)    // 0, 'Failed at paperwork(5, 0)'

// function highAndLow(numbers){

//  const num = numbers.split(' ').map(Number)
//  const max = Math.max(...num).toString()
//  const min = Math.min(...num).toString()
//  const maxMin = max.concat(' ',min)

//  return maxMin
// console.log(maxMin);

// }
// highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4") // "42 -9"

// // highAndLow("1 2 3") // "3 1"

// function opposite(number) {
//     console.log(-number);
//   }

//   opposite(1)
//   opposite(4.25)
//   opposite(-5)

// function check(a, x) {
//     return a.includes(x)
//     console.log(a.includes(x));
//   }

//   check([66, 101], 66)  // true
//   check([101, 45, 75, 105, 99, 107])   // 107 true
//   check(['what', 'a', 'great', 'kata'], 'kat')  // false

// function descendingOrder(n){
//   let digits = n.toString().split('');
//   digits.sort((a, b) => b - a);
//   let result = parseInt(digits.join(''));
//   return result;
//   }

// //   descendingOrder(15) // 51
//   descendingOrder(1021)// 2110
// //   descendingOrder(123456789) // 987654321

// function isIsogram(str){
// 	return new Set(str.toUpperCase()).size === str.length;
// }

// //   isIsogram("Dermatoglyphics")// true
// //   isIsogram("isogram")// true
//   // false
// //   isIsogram("isIsogram") // false
// console.log(isIsogram("aba"));

// function findShort(s){

//     console.log(Math.min(...s.split(' ').map(s=>s.length)));
// }

// findShort("bitcoin take over the world maybe who knows perhaps") // 3

// // findShort("Let's travel abroad shall we")// 2

// function smash (words) {
//     console.log(words.join(' ').trim());

//    return words.join(' ').trim()
// };

// smash(["this", "is", "a", "really", "long", "sentence"])// "this is a really long sentence"
// smash(["hello", "world"]) // "hello world"

// // +
// const add = (x, y) => {

// };

// // -
// const subtract = (x, y) => {

// };

// // *
// const multiply = (x, y) => {

// };

// function add(x,y) {
//   return !y?x:add(x^y,(x&y)<<1);
// }
// function subtract(x,y) {
//   return ~add(~x,y);
// }
// function multiply(x,y) {
//   return y<0?~add(~0,multiply(x,~add(~0,y))):y&&add(y&1?x:0,multiply(x<<1,y>>1))
// }

// function grow(x){
// return x.reduce((a, b)=>a*b)
// console.log(sum);
// }

// grow([4, 1, 1, 1, 4]) // 16
// grow([2, 2, 2, 2, 2, 2])// 64

// function abbrevName(name){
//     let firstW = ''
//     const arr = name.split(' ')
//     for (let el of arr) {
//         if (el[0] === el[0].toLowerCase()){
//             firstW += el[0].toLowerCase() + '.';
//             continue
//         }else{
//             firstW += el[0] + '.';
//            continue
//         }

//     }
//     return firstW.slice(0, -1)
// }

// console.log(abbrevName("Sam Harris"));
// console.log(abbrevName("patrick feenan"))

// function reverseWords(str) {

//    let newString = ''
//    for (let i = str.length -1; i >=0;i--) {
//     newString +=str[i];
//    }
//    return newString
//   }

// //   reverseWords('The quick brown fox jumps over the lazy dog.')
// //   reverseWords('double  spaced  words')// 'elbuod  decaps  sdrow'
// //   reverseWords('apple')// 'elppa'

//   console.log(reverseWords('double  spaced  words'));

// const rps = (p1, p2) => {
//   if (p1 === p2) {
//     console.log('Draw!');
//     return 'Draw!'

//   } else if (p1 === 'scissors' && p2 === 'paper') {
//     console.log('Player 1 won!');
//     return 'Player 1 won!'

//   } else if (p1 === 'scissors' && p2 === 'rock'){
//     console.log('Player 2 won!');
//     return 'Player 2 won!'

//   }else if (p1 === 'paper' && p2 === 'rock'){
//     console.log('Player 1 won!');
//     return 'Player 1 won!'

//   }else if (p1 === 'paper' && p2 === 'scissors') {
//     console.log('Player 2 won!');
//     return 'Player 2 won!'

//   }else if (p1 === 'rock' && p2 === 'paper') {
//     console.log('Player 2 won!');
//     return 'Player 2 won!'

// }else if (p1 === 'rock' && p2 === 'scissors') {
//   console.log('Player 1 won!');
//   return 'Player 1 won!'
// }
// }
// rps('rock', 'rock') // draw
// rps('scissors', 'scissors') //draw

// rps('scissors', 'paper') //1
// rps('scissors', 'rock') //2
// rps('paper', 'rock') //1
// rps('paper', 'scissors') //1
// rps('rock', 'paper') //2
// rps('rock', 'scissors') //1

// напиши скрипт, который на вход принимает строку, на выход отдает массив строк со всеми возможными размещениями точек между букв

// пример:

// > abc

// [ ‘abc’, ‘a.bc’, ‘ab.c’, ‘a.b.c’]

// > abcd

// [ ‘abcd’, ‘a.bcd’, ‘ab.cd’, ‘a.b.cd’ … ]

// function floatingPoint(string) {
//   let arr = [string];
//   let n = arr.indexOf('.');

//   return n;
// }

// console.log(floatingPoint('abcd'));
//=================================================================
// function addDots(string) {
//   // Разделяем строку на массив символов
//   let chars = string.split('');

//   // Объединяем символы, добавляя точку между ними
//   let dottedString = chars.join('.');

//   return dottedString;
// }

// console.log(floatingPoint('hello')); // [ 'h.ello', 'he.llo', 'hel.lo', 'hell.o' ]
// Пояснение:

// Создание массива для результатов:

// Создаем пустой массив result для хранения всех комбинаций.
// Итерация по строке:

// Используем цикл for, начиная с 1 и до конца строки, чтобы вставить точку после каждой буквы.
// В каждой итерации создаем новую строку, вставляя точку после текущего символа. Для этого используем string.slice(0, i) для первой части строки и string.slice(i) для второй части строки.
// Сохранение комбинации:

// Добавляем полученную комбинацию в массив result.
// Возврат массива:

// Возвращаем массив с комбинациями.

// function floatingPoint(string) {
//   let result = [];

//   // Перемещаем точку по строке
//   for (let i = 1; i < string.length; i++) {
//     let movePoint = string.slice(0, i) + '.' + string.slice(i);
//     result.push(movePoint);
//   }
//   let chars = string.split('');

//   let dottedString = chars.join('.');
//   result.push(dottedString);

//   return result;
// }

// function floatingPoint(string) {
//   let result = [];
//   if (!string) {
//     return 'Enter the string';
//   }

//   for (let i = 1; i < string.length; i++) {
//     let firstPart = string.slice(0, i);
//     let secondPart = string.slice(i);
//     let concat = firstPart + '.' + secondPart;

//     result.push(concat);
//   }
//   let chars = string.split('');
//   let addPoint = chars.join('.');
//   result.push(addPoint);
//   if (string.length === 1) {
//     result.push(string + '.');
//   }

//   return result;
// }
// console.log(floatingPoint('  ')); // [ 'a.bcd', 'ab.cd', 'abc.d','a.b.c.d' ]

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.length);
// arr.length = 3;
// console.log(arr);

// const arr = [[[[1, 2, 3]], [4, 5], 6], 7, 8, 9];

// function spred(arr) {
//   const sp = arr.flat(Infinity);

//   return sp;
// }

// console.log(spred(arr));

//=======================================================

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// let person1 = new Person('Alice', 30);
// let person2 = new Person('Bob', 25);

// console.log(person1);
// console.log(person2);

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   insertAtBeginning(data) {
//     const newNode = new Node(data);
//     newNode.next = this.head;
//     this.head = newNode;
//   }

//   insertAtEnd(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//     } else {
//       let cur = this.head;
//       while (cur.next) {
//         cur = cur.next;
//       }
//       cur.next = newNode;
//     }
//   }

//   insertAfter(prevNode, data) {
//     if (!prevNode) {
//       console.log('Попереднього вузла не існує.');
//       return;
//     }
//     const newNode = new Node(data);
//     newNode.next = prevNode.next;
//     prevNode.next = newNode;
//   }

//   deleteNode(key) {
//     let cur = this.head;
//     if (cur && cur.data === key) {
//       this.head = cur.next;
//       cur = null;
//       return;
//     }
//     let prev = null;
//     while (cur && cur.data !== key) {
//       prev = cur;
//       cur = cur.next;
//     }
//     if (!cur) {
//       return;
//     }
//     prev.next = cur.next;
//     cur = null;
//   }

//   searchElement(data) {
//     let cur = this.head;
//     while (cur) {
//       if (cur.data === data) {
//         return cur;
//       }
//       cur = cur.next;
//     }
//     return null;
//   }

//   printList() {
//     let current = this.head;
//     while (current) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
// }

// // Створюємо зв'язаний список
// const llist = new LinkedList();

// // Вставляємо вузли в початок
// llist.insertAtBeginning(5);
// llist.insertAtBeginning(10);
// llist.insertAtBeginning(15);

// // Вставляємо вузли в кінець
// llist.insertAtEnd(20);
// llist.insertAtEnd(25);

// // Друк зв'язаного списку
// console.log("Зв'язний список:");
// llist.printList();

// // Видаляємо вузол
// llist.deleteNode(10);

// console.log("\\nЗв'язний список після видалення вузла з даними 10:");
// llist.printList();

// // Пошук елемента у зв'язаному списку
// console.log('\\nШукаємо елемент 15:');
// const element = llist.searchElement(15);
// if (element) {
//   console.log(element.data);
// }

// // Створення хеш-таблиці (Map)
// const hashTable = new Map();

// // Додавання елемента
// hashTable.set('key1', 'value1');
// hashTable.set('key2', 'value2');

// // Виведення результату
// console.log(hashTable); // Map(2) {'key1' => 'value1', 'key2' => 'value2'}

// function factorial(n) {
//   console.log('Виклик функції factorial з n = ', n);
//   if (n === 1) {
//     console.log('Базовий випадок, n = 1, повернення 1');
//     return 1;
//   } else {
//     const result = n * factorial(n - 1);
//     console.log('Повернення результату для n = ', n, ': ', result);
//     return result;
//   }
// }

// console.log(factorial(5));

// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }

// console.log(fibonacci(10));

// function sum(n) {
//   let count = 0;

//   for (let i = 0; i <= n; i++) {
//     count += i;
//   }
//   return count;
// }

// console.log(sum(10));
//===============================================================================
// const nameList = ['Катя', 'Тимур', 'Сейфитин', 'Инна', 'Юра', 'Оксана'];

// function getCombinations(arr) {
//   const results = [];

//   function generateCombinations(start, combo) {
//     if (combo.length >= 3) {
//       results.push(combo.slice());
//     }

//     for (let i = start; i < arr.length; i++) {
//       combo.push(arr[i]);
//       generateCombinations(i + 1, combo);
//       combo.pop();
//     }
//   }

//   generateCombinations(0, []);
//   return results;
// }

// const combinations = getCombinations(nameList);
// console.log(combinations);
// console.log('Всего нужно создать:', combinations.length, 'групп в Телеграмм');
//===================================================================================

// function filterArray(numbers, value) {
//   let newArr = [];
//   numbers.forEach(function (number) {
//     if (number > value) {
//       newArr.push(number);
//     }
//   }, value);
//   return newArr;
// }

// filterArray([1, 2, 3, 4, 5], 3);
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => (totalPrice += item));

//   return totalPrice;
// };
//===================================================================================

// console.log(0 == false);

// const fullName = 'Jacob Mercer';
// console.log(fullName.slice(0, 5));

// function normalizeInput(input, to) {
//   if (to === 'upper') {
//     return input.toUpperCase();
//   } else {
//     return input.toLowerCase();
//   }
// }
// console.log(normalizeInput("This ISN'T SpaM", 'upper'));

// function checkFileExtension(fileName, ext) {
//   return fileName.toLowerCase().endsWith(ext)
//     ? 'File extension matches'
//     : 'File extension does not match';
// }

// console.log(checkFileExtension('styles.css', '.css'));

// function createFileName(name, ext) {
//   const trim = name.trim();
//   return `${trim}.${ext}`;
// }
// console.log(createFileName(' order ', 'txt'));

// let count = 0;

// while (count < 10) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }

// function calculateTotal(number) {
//   let count = 0;
//   while (number) {
//     count += number;
//   }
//   return count;
// }
// console.log(calculateTotal(3));

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// function getLastElementMeta(array) {
//   let newArr = [];
//   const index = array.length - 1;
//   newArr.push(index);
//   const val = array[index];
//   newArr.push(val);
//   return newArr;
// }

// console.log(getLastElementMeta(['apple', 'peach', 'pear', 'banana']));

// [3, "banana"]

// function getExtremeElements(array) {
//   let newArr = [];

//   newArr.push(array[0]);
//   newArr.push(array[array.length - 1]);
//   return newArr;
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// function calculateEngravingPrice(message, pricePerWord) {
//   return message.split(' ').length * pricePerWord;
// }

// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// function getSlice(array, value) {
//   const find = array.indexOf(value);

//   return find < 0 ? [] : array.slice(0, find + 1);
// }

// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Poly'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Jacob'));

// function createArrayOfNumbers(min, max) {
//   let number = [];
//   for (let i = min; i <= max; i++) {
//     number.push(i);
//   }
//   return number;
// }
// console.log(createArrayOfNumbers(1, 10));

// function calculateTotalPrice(order) {
//   let count = 0;
//   for (let i = 0; i < order.length; i++) {
//     count += order[i];
//   }
//   return count;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function getEvenNumbers(start, end) {
//   let arr = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//       arr.push(i);
//     }
//   }
//   return arr;
// }

// console.log(getEvenNumbers(3, 11));

// function checkStorage(storage, item) {
//   const norm = item.toLowerCase();
//   return storage.includes(norm)
//     ? `${norm} is available to order!`
//     : 'Sorry! We are out of stock!';
// }
// console.log(checkStorage(['apple', 'plum', 'pear'], 'plUM'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'orange'));

// function getCommonElements(array1, array2) {
//   let newArr = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       console.log('x', array1[i]);
//       newArr.push(array1[i]);
//     }
//   }
//   return newArr;
// }

// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// function calculateTotalPrice(order) {
//   let count = 0;
//   for (const i of order) {
//     count += i;
//   }
//   return count;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: {
//     country: 'Jamaica',
//     city: 'Ocho Rios',
//   },
//   hobbies: ['swimming', 'music', 'sci-fi'],
// };

// const location = user.location;
// console.log(location); // {country: "Jamaica", city: "Ocho Rios"}

// const country = user.location.country;
// console.log(country); // "Jamaica"

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];

// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: 'Jamaica',
//   city: 'Kingston',
// };

// console.log(apartment);

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (key in apartment) {
// }

// for (let i = 0; i < reversedStr.length; i += 3) {
//   parts.push(reversedStr.slice(i, i + 3));
// }

// function number(num) {
//   let result = [];

//   result.push(num.slice(0, 1));

//   for (let i = 1; i < num.length; i += 3) {
//     result.push(num.slice(i, i + 3));
//   }

//   return result.join('.');
// }

// console.log(number('120000000000000'));

// function floatingPoint(string) {
//   let result = [];
//   if (!string) {
//     return 'Enter the string';
//   }

//   for (let i = 1; i < string.length; i++) {
//     let firstPart = string.slice(0, i);
//     let secondPart = string.slice(i);
//     let concat = firstPart + '.' + secondPart;

//     result.push(concat);
//   }
//   let chars = string.split('');
//   let addPoint = chars.join('.');
//   result.push(addPoint);
//   if (string.length === 1) {
//     result.push(string + '.');
//   }

//   return result;
// }
// console.log(floatingPoint('16516516516516')); // [ 'a.bcd', 'ab.cd', 'abc.d','a.b.c.d' ]
// ==================================================================
//  Определить сколько раз каждый элемент встречается в массиве.

// const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

// function countFruits(fruits) {
//   let fruitCount = {};
//   for (let i = 0; i < fruits.length; i++) {
//     if (fruitCount[fruits[i]]) {
//       fruitCount[fruits[i]] += 1;
//     } else {
//       fruitCount[fruits[i]] = 1;
//     }
//   }
//   return fruitCount;
// }
// console.log(countFruits(fruits));
// ========================================================================
// Создать массив который содержит только уникальные значения исходного массива.
// const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

// function uniq(fruits) {
//   let item = [];
//   for (let i = 0; i < fruits.length; i++) {
//     if (!item.includes(fruits[i])) {
//       item.push(fruits[i]);
//     }
//   }
//   return item;
// }
// console.log(uniq(fruits));

// ========================================================================
//  Создать функцию, которая группирует студентов по возрасту.

// const students = [
//   { name: 'alex', age: 20 },
//   { name: 'mike', age: 24 },
//   { name: 'masha', age: 20 },
//   { name: 'stas', age: 18 },
// ];

// const grouped = {};
// students.forEach(s => {
//   if (!grouped[s.age]) {
//     grouped[s.age] = [s];
//   } else {
//     grouped[s.age].push(s);
//   }
// });
// console.log(grouped);
// =======================================================================

// Дано число. Проверьте, отрицательное оно или нет.
// Выведите об этом информацию в консоль.
// const number = 2;
// console.log(number < 0 ? 'Число отрицательное' : 'Число положительное');
// =======================================================================
// Дано массив чисел отрицательных и положительных
// необходимо отсортировать отрицательные и положительные числа

// const numbers = [-1, -3, 4, 5, 9, -21, 23, 34, -78, 34, 56, 9, 10];

// function sortNumbers(array) {
//   let positive = [];
//   let negative = [];
//   array.forEach(number => {
//     if (number < 0) {
//       negative.push(number);
//     } else {
//       positive.push(number);
//     }
//   });
//   return { positive, negative };
// }
// console.log(sortNumbers(numbers));
// =======================================================================
// Дано число. Проверьте, четное оно или нет.

// const number = 4;
// console.log(number % 2 === 0 ? 'число чётное' : 'число не чётное');
// =======================================================================
// Даны два слова. Проверьте, что первые буквы этих слов совпадают.

// const words = ['Sam', 'small'];

// function checkWords(array) {

//   const a = array[0][0].toLowerCase();
//   const b = array[1][0].toLowerCase();

//   return a === b ? 'OK' : 'BAD';

// }
// console.log(checkWords(words));
// =======================================================================
// Дано слово. Получите его последнюю букву.
// Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

// const word = 'Слово';
// const word2 = 'Мячь';

// if (word2[word2.length - 1] === 'ь') {
//   console.log('Предпоследняя', word2[word2.length - 2]);
// } else {
//   console.log('Последняя', word2[word2.length - 1]);
// }
// =======================================================================
// Дано число. Выведите в консоль первую цифру этого числа.
// Дано число. Выведите в консоль последнюю цифру этого числа.
// const num = 35435;
// const string = num.toString();
// console.log(string[0]);
// console.log(string[string.length - 1]);
// =======================================================================
// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
// const num = 35435;
// const string = num.toString();
// const string2 = num.toString().length;
// const sum = Number(string[0]) + Number(string[string.length - 1]);

// console.log('Сумма', sum);
// console.log('Длина', string2);
// =======================================================================
// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

// const string = 'sdaass';
// const result = string.length === 1 ? 'Один символ' : string[string.length - 2];
// console.log(result);
// =======================================================================
// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
// const one = 12;
// const two = 5;

// const res = one % two === 0 ? 'OK' : 'BAD';
// console.log(res);
// console.log(one % two);
// =======================================================================
// Выведите в консоль все целые числа от 1 до 100.
// const min = 1;
// const max = 100;
// for (let i = min; i <= max; i++) {
//   console.log(i);
// }

// от 100 до 1.
// const min = 100;
// const max = 1;
// for (let i = min; i >= max; i--) {
//   console.log(i);
// }

// -100 до 0
// const min = -100;
// const max = 0;
// for (let i = min; i <= max; i++) {
//   console.log(i);
// }
// Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
// const min = 1;
// const max = 100;
// for (let i = min; i <= max; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }
// =======================================================================
// Найдите сумму всех целых чисел от 1 до 100.
// const min = 1;
// const max = 100;

// let sum = 0;
// for (let i = min; i <= max; i++) {
//   sum += i;
// }
// console.log(sum);
// =======================================================================
// Найдите сумму всех целых четных чисел в промежутке от 1 до 100.

// const min = 1;
// const max = 100;
// let even = 0;
// let odd = 0;
// for (let i = min; i <= max; i++) {
//   if (i % 2 === 0) {
//     even += i;
//   } else {
//     odd += i;
//   }
// }
// console.log('Чётные', even);
// console.log('Не чётные', odd);
// =======================================================================
// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.
// const str = 'qwerty';
// const a = str.split('');
// const b = str.split('').reverse();
// const rev = str.split('').reverse().join('');
// console.log(a);
// console.log(b);
// console.log(rev);

// for (const i of rev) {
//   console.log(i);
// }
// =======================================================================
// Дан массив с числами. Найдите сумму квадратов элементов этого массива.
// const arr = [2, 3, 4, 5, 6, 7, 8];

// for (const i of arr) {
//   let sum = i * i;
//   console.log(sum);
// }
// =======================================================================
// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
// const arr = [2, 3, 4, 5, 6, 7, 8, 25];

// for (const i of arr) {
//   let sqrt = Math.sqrt(i);
//   console.log(sqrt);
// }
// =======================================================================
// Дан массив с числами. Найдите сумму положительных элементов этого массива.
// const arr = [-1, -2, -3, -4, -6, -7, 2, 4];
// let sum = 0;
// arr.forEach(num => {
//   if (num <= 0) {
//     console.log('Число отрицательное');
//   } else {
//     sum += num;
//   }
// });
// console.log(sum);
//=======
// for (const i of arr) {
//   if (i < 0) {
//     console.log('Число отрицательное');
//   } else {
//     sum += i;
//   }
// }
// console.log(sum);
// =======================================================================
// Дан массив с числами. Найдите сумму тех элементов этого массива,
// которые больше нуля и меньше десяти.

// const arr = [-1, -2, -3, 0, 2, 3, 4, 10, 12, 13];
// let sum = 0;
// for (const i of arr) {
//   if (i > 0 && i < 10) {
//     sum += i;
//   }
// }
// console.log(sum);
// =======================================================================
// Дана строка:'abcde' Получите массив букв этой строки.
// const str = 'abcde';
// const arr = str.split('');
// console.log(arr);
// ==================
// Дано некоторое число:12345 Получите массив цифр этого числа.
// const num = 12345;
// const str = num.toString();
// const arr = str.split('');
// console.log(arr);
// =======================================================================
// Дано некоторое число:12345 Переверните его:
// const num = 12345;
// const str = num.toString();
// const arr = str.split('').reverse().join('');
// console.log(arr);
// =======================================================================
// Дано некоторое число:12345 Найдите сумму цифр этого числа.
// const num = 12345;
// const strNum = num.toString();
// let sum = 0;
// for (const i of strNum) {
//   sum += Number(i);
// }
// console.log(sum);
// =======================================================================
// Заполните массив целыми числами от 1 до 10.
// const arr = [];
// for (let i = 1; i <= 10; i++) {
//   arr.push(i);
// }
// console.log(arr);
// =======================================================================
// Заполните массив четными числами из промежутка от 1 до 100.
// const arr = [];
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     arr.push(i);
//   }
// }
// console.log(arr);
// =======================================================================
// Дан массив с дробями: [1.456, 2.125, 3.32, 4.1, 5.34]
// Округлите эти дроби до одного знака в дробной части.
// const arr = [1.446, 2.125, 3.32, 4.1, 5.34];
// const newArr = [];
// решение 1
// arr.forEach(num => {
//   const str = num.toString();
//   const newNum = str.slice(0, 3);
//   newArr.push(Number(newNum));
// });

// решение 2
// for (const i of arr) {
//   newArr.push(Number(i.toFixed(1)));
// }
// console.log(arr);
// console.log(newArr);

// =======================================================================
// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
// const arr = [
//   'http://asdasds',
//   'sdfsdfsf',
//   '2432434',
//   'uuuuuuuuuu',
//   'http://243243423',
// ];
// const newArr = [];
// const newArr2 = [];

// arr.forEach((string, index) => {
//   if (!string.startsWith('http://')) {
//     newArr2.push(string);
//   } else {
//     newArr.push(string);
//   }
// });
// console.log(newArr);
// console.log(newArr2);
// console.log(arr);
// =======================================================================
// Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
// const number = [2, 3, 4, 5, 7, 8, 9, 10];

// number.map(num => console.log(num * 1.1));
// =======================================================================
// Заполните массив случайными числами из промежутка от 1 до 100.
// const newArr = [];

// const random = Math.floor(Math.random() * (100 - 1) + 1);

// for (let i = 0; i < random; i++) {
//   const randomPush = Math.floor(Math.random() * 100);
//   newArr.push(randomPush);
// }
// console.log(newArr);
// =======================================================================
// Дано некоторое число:12345 Выведите в консоль все его символы с конца.
// const number = 12345;
// const str = number.toString();
// const reverse = str.split('').reverse().join('');
// console.log(reverse);
// =======================================================================
// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// По очереди выведите в консоль подмассивы из двух элементов нашего массива:
// const arr = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < arr.length; i += 2) {
//   const newArr = arr.slice(i, i + 2);
//     console.log(newArr);
// }
// =======================================================================
// Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// Слейте эти массивы в новый массив:
// const newArr = [...arr1, ...arr2];
// const newArr = arr1.concat(arr2);
// console.log(newArr);
// =======================================================================
// Дана некоторая строка. Найдите позицию первого нуля в строке.

// const str = 'a0sd23402304s0dfs';
// const newArr = str.split('');

// const index = newArr.indexOf('0');
// console.log(index);
// =======================================================================
// Выведите в консоль все числа в промежутке от 1 до 1000,
// сумма первой и второй цифры которых равна пяти.

// for (let i = 1; i <= 1000; i += 1) {
//   let str = i.toString();
//   let first = Number(str[0]);
//   let second = Number(str[1] || 0);

//   if (first + second === 5) {
//     console.log(i);
//   }
// }
// =======================================================================
// Дан массив. Удалите из него элементы с заданным значением.
// let array = ['qwe', '123', 222, true, 'rty', 'q'];
// const i = array.indexOf(true);
// array.splice(i, 1);
// console.log(array);
// =======================================================================
// Дан некоторый массив, например, вот такой:[1, 2, 3, 4, 5, 6]
// Найдите сумму первой половины элементов этого массива.
// const arr = [1, 2, 3, 4, 5, 6];
// const i = Math.floor((arr.length - 1) / 2);
// const newArr = arr.slice(0, i + 1);
// let sum = 0;
// for (const i of newArr) {
//   sum += i;
// }
// console.log(sum);
// =======================================================================
// Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.
// const arr = [-1, -2, -3, -4, 1, 2, 3, -5, 4, 5];
// let count = 0;
// for (const i of arr) {
//   if (i < 0) {
//     count += 1;
//   }
// }
// console.log(count);
// =======================================================================
// Дан массив с числами. Оставьте в нем только положительные числа.
// const arr = [-1, -2, -3, -4, 1, 2, 3, -5, 4, 5];
// for (let i = arr.length - 1; i >= 0; i--) {
//   if (arr[i] < 0) {
//     console.log('Значение', arr[i]);
//     console.log('Индексы', i);
//     arr.splice(i, 1);
//   }
// }
// // console.log(arr);
// // ===========
// // const positive = arr.filter(i => i >= 0);
// // console.log(positive);
// =======================================================================
// Дана строка. Удалите предпоследний символ из этой строки.
// const str = 'JavaScript';

// const index = str.length - 2;

// const newStr = str.slice(0, index) + str.slice(index + 1);
// console.log(newStr);
// =======================================================================
// Дан некоторый массив, например, вот такой:[1, 2, 3, 4, 5, 6]
// Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.
// const arr = [1, 2, 3, 4, 5, 6];
// const i = Math.floor((arr.length - 1) / 2);
// const first = arr.slice(0, i + 1).reduce((acc, val) => acc + val);
// const second = arr.slice(i + 1).reduce((acc, val) => acc + val);
// const result = first / second;
// console.log(first);
// console.log(second);
// console.log('Result', result);
// =======================================================================
// Даны два слова.Проверьте, что последняя буква первого слова совпадает
// с первой буквой второго слова.
// const words = ['javascript', 'theme'];
// const first = words[0];
// const second = words[1];
// if (first[first.length - 1] === second[0]) {
//   console.log('ok');
// } else {
//   console.log('bad');
// }
// ======================================================================= Уровень 2.3
// Дана некоторая строка. Найдите позицию третьего нуля в строке.
// const str = 'qwe0rt0yu0';
// const arr = str.split('');
// const i = arr.indexOf('0');
// console.log(i);

// const index = arr.findIndex(val => val === '0');
// console.log(index);

// возвращает все индексы удовлетворяющие условию
// arr.findIndex((val, index) => {
//   if (val === '0') {
//     console.log(index);
//   }
// });
// =======================================================================
// Даны числа, разделенные запятыми:'12,34,56'
// Найдите сумму этих чисел.
// const strNumber = '12,34,56';
// const arr = strNumber.split(',');
// let sum = 0;
// for (let num of arr) {
//   sum += parseInt(num);
// }
// console.log(sum);
// =======================================================================
// Дана дата в следующем формате:'2025-12-31'
// Преобразуйте эту дату в следующий объект:
// {
// 	year: '2025',
// 	month: '12',
// 	day: '31',
// }
// const date = '2025-12-31';
// const [year, month, day] = date.split('-');
// const objDate = {
//   year,
//   month,
//   day,
// };
// console.log(objDate);
// =======================================================================
// Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
// const someStr = 'sdf5sdf34fs443dsf43';
// let index = '';
// let number = 0;
// for (let i = 0; i < someStr.length; i++) {
//   if (!isNaN(someStr[i])) {
//     index = i;
//     number = someStr[i];
//     break;
//   }
// }
// console.log(index);
// console.log(parseInt(number));
// =======================================================================
// Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
// const date = {
//   year: '2025',
//   month: '12',
//   day: '31',
// };
// const keys = Object.keys(date);
// const value = Object.values(date);
// console.log(keys);
// console.log(value);
// =======================================================================
// Дано число. Выведите в консоль количество четных цифр в этом числе.
// const number = 32;
// const arrNum = [];
// for (let i = 1; i < number; i++) {
//   if (i % 2 === 0) {
//     arrNum.push(i);
//   }
// }
// console.log(arrNum.length - 1);
// =======================================================================
// Дана некоторая строка:'abcde'
// Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:
// 'AbCdE'

// const str = 'переведите в верхний регистр все нечетные буквы этой строки';

// for (let i = 0; i < str.length; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//     console.log(str[i].toUpperCase());

//     // i.toUpperCase();
//   }

//   //   console.log(i);
// }
// console.log(str);

// ======================================================================= 2,4
// Дана некоторая строка со словами:
// 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:
// 'Aaa Bbb Ccc'

// const str = 'aaa bbb ccc';
// const arrStr = str
//   .split(' ')
//   .map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1))
//   .join(' ');

// console.log(arrStr);

// ======================================================================= 2,5

// Дана некоторая строка, например, вот такая:

// '023m0df0dfg0'
// Получите массив позиций всех нулей в этой в строке.

// const str = '023m0df0dfg0';

// let arr = [];
// for (let i = 0; i < str.length; i++) {
//   if (str[i === 0]) {
//   }
//   console.log(str[i]);
// }

// =======================================================================
// Дана некоторая строка:'abcdefg'
// Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:'abdeg'

// let str = 'abcdefg';

// let result = str
//   .split('')
//   .filter((_, index) => (index + 1) % 3 !== 0)
//   .join('');

// console.log(result); // 'abdeg'
// =======================================================================

// Дан некоторый массив, например, вот такой:[1, 2, 3, 4, 5, 6]
// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.

// const arr = [1, 2, 3, 4, 5, 6];

// let even = 0;
// let notEven = 0;

// const newArr = arr.map(num => {
//   if (num % 2 === 0) {
//     even += num;
//   } else {
//     notEven += num;
//   }
// });

// console.log(even);
// console.log(notEven);
// console.log(even * notEven);
// ======================================================================= 2.6
// Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.

// const str = 'qwe3fg5hg7cbb3';
// const arr = str.split('');

// const newArr = [];
// const numberIndex = arr.map((item, index) => {
//   if (!isNaN(item)) {
//     newArr.push(index);
//   }
// });

// console.log(newArr);
// =======================================================================
// Дан массив с некоторыми числами, например, вот такой:
// [123, 456, 789]
// Напишите код, который перевернет числа в этом массиве по следующему принципу:
// [321, 654, 987]

// const arrNumber = [123, 456, 789];
// const newReverseArr = [];
// const reverseArr = arrNumber.map(item => {
//   const x = item.toString().split('').reverse().join('');
//   newReverseArr.push(x);
// });
// console.log(newReverseArr);
// =======================================================================
// Дана некоторая строка с числом:'1234567'
// Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее:
// '1 234 567'
