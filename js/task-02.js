const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulEl = document.querySelector('ul');

const ingredientsHtml = ingredients.map((ingredient) => {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = `${ingredient}`

  return liEl.outerHTML;
}).join('');


ulEl.innerHTML = ingredientsHtml;

console.log(ulEl);









