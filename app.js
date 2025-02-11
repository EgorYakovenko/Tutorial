import fs from 'fs';

// let num1 = fs.readFileSync('readme.txt', 'utf-8');
// let num2 = fs.readFileSync('readme2.txt', 'utf-8');

// console.log(Number(num1) + Number(num2));
// ==============================================================
// let obj = {
//   'file1.txt': 'text1',
//   'file2.txt': 'text2',
//   'file3.txt': 'text3',
// };

// for (let key in obj) {
//   fs.writeFileSync(key, obj[key]);
// }
// ==============================================================

// let text = fs.readFileSync('readme.txt', 'utf-8');

// let num = parseInt(text);
// let newNum = num + 10;

// fs.writeFileSync('readme.txt', newNum.toString());

// console.log(newNum);
// ==============================================================
// try {
//   let text = fs.readFileSync('readme1.txt', 'utf-8');
//   console.log(text);
// } catch (err) {
//   console.log('Произошла ошибка', err);
// }
// ==============================================================
// fs.readFile('readme.txt', 'utf-8', function (err, data) {
//   const square = Math.pow(parseInt(data), 2);
//   console.log(square);
// });

// console.log('!!!');

// ==============================================================

// fs.readFile('readme1.txt', 'utf-8', function (err, data) {
//   if (!err) {
//     console.log(data);
//   } else {
//     console.log('Ошибка', err);
//   }
// });
// ==============================================================
// import { readFile } from 'fs/promises';

// const arr = ['readme.txt', 'readme2.txt', 'readme3.txt'];

// async function readFileAndSum(arr) {
//   try {
//     const readNameFile = arr.map(async nameFile => {
//       const data = await fs.readFile(nameFile, 'utf-8');
//       return parseInt(data);
//     });

//     const result = await Promise.all(readNameFile);
//     const sum = result.reduce((acc, val) => acc + val, 0);

//     console.log(sum);
//   } catch (error) {
//     console.error('Ошибка чтения файла', error);
//   }
// }
// readFileAndSum(arr);

// const arr = ['readme.txt', 'readme2.txt', 'readme3.txt'];
// let sum = 0;
// arr.map(nameFile => {
//   let x = fs.readFileSync(nameFile, 'utf-8');
//   let num = parseInt(x);
//   sum += num;
//   fs.writeFileSync('results.txt', sum.toString());
// });
// console.log(sum);

// ============================================================== 6стр №4
// import { writeFile } from 'fs/promises';

// async function createFile() {
//   try {
//     for (let i = 1; i <= 10; i++) {
//       const fileName = `file${i}.txt`;
//       const fileValue = i.toString();
//       await writeFile(fileName, fileValue, 'utf-8');
//       console.log(`Файл ${fileName} создан. Содержит ${fileValue}`);
//     }
//   } catch (error) {
//     console.log('Возникла ошибка', error);
//   }
// }
// createFile();
// ============================================================== 7стр №1

const x = fs.promises
  .readFile('results.txt', 'utf-8')
  .then(data => console.log(data))
  .catch(error => console.log('ERROR', error));
console.log('переменная', x);
