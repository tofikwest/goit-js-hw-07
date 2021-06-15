
let counterValue = 0;
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const value = document.getElementById('value')

incrementBtn.addEventListener('click', () => {
counterValue++
value.textContent = counterValue;
})

decrementBtn.addEventListener('click', () => {
counterValue--
value.textContent = counterValue;
})