const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listContent = ingredients.map((ingredient) => {
  const listItemRef = document.createElement("li");
  listItemRef.textContent = ingredient;
  return listItemRef;
});

const parentList = document.querySelector("#ingredients");
parentList.append(...listContent)
