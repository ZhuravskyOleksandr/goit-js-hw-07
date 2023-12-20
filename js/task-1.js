'use strict';

const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

//========================================================

categories.forEach(category => {
    const categoryTitle = category.querySelector('h2');

    const categoryItems = category.querySelectorAll('li');

    console.log(`Category: ${categoryTitle.textContent}`);
    console.log(`Items: ${categoryItems.length}`);
});