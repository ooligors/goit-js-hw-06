function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
t
function createBoxes(amount) {
  divBoxes.innerHTML = "";
  // destroyBoxes();

  console.log(amount);
  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement('div');
    divEl.style.width = width + step * i + "px";
    divEl.style.height = height + step * i + "px";

    divEl.style.backgroundColor = getRandomHexColor();
    divBoxes.append(divEl)
    console.log(i);

  }
}
const width = 30;
const height = 30;
const step = 10;
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