const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const getIdIngred = document.getElementById('ingredients')

const ingreMap = ingredients.map(ingridient => {
  const addIngred = document.createElement('li')
  addIngred.textContent = ingridient

  return addIngred;
})
getIdIngred.append(...ingreMap)

console.log(getIdIngred);