// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


const allCategories = document.querySelectorAll('.item')

console.log('Number of categories:',allCategories.length)


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

allCategories.forEach(function (number, index, array) {
    
    console.log('Category:', number.firstElementChild.textContent);

    console.log('Elements:', number.lastElementChild.children.length);
    

});  