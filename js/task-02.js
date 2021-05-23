const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',];

const ingredientsContainer = document.querySelector('#ingredients');
console.log(ingredientsContainer);
const elements = ingredients.map((ingredient) => {
    const ingredientEl=document.createElement('li');
    ingredientEl.textContent = ingredient;
    return ingredientEl;
});
console.log(elements);
ingredientsContainer.append(...elements);

// const ingredientEl = document.createElement('li');
// const ingredientsEls=
// ingredients.map((action) => {
//         console.log(ingredientEl.textContent = ingredient)
// });
    

// // console.log(ingredientEl.textContent);
// console.log(ingredientEl);
// document.body.append(ingredientEl);