
const searchLiCategories = document.querySelectorAll('.item');
console.log(`В списке ${searchLiCategories.length} категории.`);

const listEl = document.querySelectorAll('.item');
for (let i = 0; i < listEl.length; i++) {
  const catTitleEl = document.querySelectorAll(".item h2")[i].textContent;
  console.log(`Категория: ${catTitleEl}`);

  const catItemEl = document.querySelectorAll(".item ul")[i].children
    .length;
  console.log(`Количество элементов: ${catItemEl}`);
}
