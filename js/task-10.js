function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {

  let width = 30;
  let height = 30;
  const step = 10;

  if (divBoxes.hasChildNodes()) {
    width = parseInt(divBoxes.lastElementChild.style.width) + step;
    height = parseInt(divBoxes.lastElementChild.style.height) + step;

  }

  for (let i = 0; i < amount; i++) {

    const divEl = document.createElement('div');

    width += step;
    height += step;
    divEl.style.width = width + "px";
    divEl.style.height = height + "px";


    divEl.style.backgroundColor = getRandomHexColor();
    divBoxes.append(divEl);
  }
}

const divBoxes = document.querySelector("#boxes");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const input = document.querySelector("input");

buttonCreate.addEventListener('click', () => {
  createBoxes(input.value)


});





function destroyBoxes() {
  input.value = "";

  divBoxes.innerHTML = "";
}
buttonDestroy.addEventListener('click', destroyBoxes);