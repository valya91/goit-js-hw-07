// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4




const categoryEl = document.querySelector('#categories')
const itemsEl = categoryEl.querySelectorAll('.item');
console.log(`В списке ${itemsEl.length} категории.`);
itemsEl.forEach((itemEl) => {
console.log(`Категория: ${itemEl.querySelector('h2').textContent}`);
 console.log(`Количество элементов: ${itemEl.querySelectorAll('li').length}`)
});

