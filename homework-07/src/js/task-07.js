const refs = {
  input: document.querySelector('input#font-size-control'),
  text: document.querySelector('#text'),
}
// console.log(refs.text);
refs.input.addEventListener('input', onChangeValue)

function onChangeValue() {
  let inputValueRef = +refs.input.value
  refs.text.style.fontSize = `${inputValueRef}px`
  console.log(refs.text.style.fontSize);
}