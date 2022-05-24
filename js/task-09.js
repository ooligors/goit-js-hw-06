function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector("body");
const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

function changeColorBtn() {

  bodyEl.style.backgroundColor = getRandomHexColor();
  // spanEl.style.color = bodyEl.style.backgroundColor;
  spanEl.textContent = getRandomHexColor();
  console.log(bodyEl.style.backgroundColor);
  console.log(getRandomHexColor());
  console.log(spanEl);
  console.log(spanEl.textContent);
}
buttonEl.addEventListener("click", changeColorBtn);