const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulEl = document.querySelector('ul');

const liArray = ingredients.map((ingredient) => {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = `${ingredient}`
  console.log(liEl);
  return liEl;
});

ulEl.append(...liArray);

console.log(ulEl);





