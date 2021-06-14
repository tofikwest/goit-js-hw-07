
let counterValue = 0;
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const value = document.getElementById('value')

const onIncrement = (event) => {
    incrementBtn.addEventListener('click', () => {
    value.textContent++
    counterValue++
    console.log(counterValue);
  
  })
}
const onDecrement = (event) => {
    decrementBtn.addEventListener('click', () => {
    value.textContent--
    counterValue--
    console.log(counterValue);
  
  })
}
onIncrement()
onDecrement()
