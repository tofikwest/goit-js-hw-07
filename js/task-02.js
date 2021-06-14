const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const getIdIngred = document.getElementById('ingredients')


// for (let i = 0; i < ingredients.length; i++) {
//   const addIngred = document.createElement('li')
//   addIngred.textContent = ingredients[i]
//   getIdIngred.appendChild(addIngred)
// }
// console.log(getIdIngred)

const ingreMap = ingredients.map(ingridient => {
  const addIngred = document.createElement('li')
  addIngred.textContent = ingridient
  getIdIngred.appendChild(addIngred)
  return addIngred;
})
console.log(getIdIngred);