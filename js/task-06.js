// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, 
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
const input = document.querySelector('#validation-input');


input.addEventListener('input', onInputChange);
     


function onInputChange(event) {
    if (event.currentTarget.value.length < input.dataset.length) {
 input.classList.add('invalid');
         
    }
    else if (event.currentTarget.value.length == input.dataset.length) {
        input.classList.replace('invalid', 'valid');
        console.log('зараз має бути зелене')
      
    }
    else if (event.currentTarget.value.length > input.dataset.length) {
        input.classList.replace('valid', 'invalid');
         console.log('зараз має бути червоне')
    } 
    }
