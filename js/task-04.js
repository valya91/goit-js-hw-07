// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
const counterValue = document.querySelector('#value')
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
let counter = 0;

incrementBtn.addEventListener('click', () => {
    counter += 1;
    return counterValue.textContent = counter;
    
})
decrementBtn.addEventListener('click', () => {
    counter -= 1;
   return counterValue.textContent = counter;
   
})
