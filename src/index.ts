import { concatenation } from './concatenation.js';

const button = document.querySelector('button');
const firstInput = document.querySelector<HTMLInputElement>('#first');
const secondInput = document.querySelector<HTMLInputElement>('#second');

if (button && firstInput && secondInput) {
  button.addEventListener('click', () => {
    concatenation(firstInput.value, secondInput.value);
  });
}
