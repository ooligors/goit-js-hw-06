const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
console.log(inputEl.value);
inputEl.addEventListener("input", onChangeFontsize);
function onChangeFontsize() {
    spanEl.style.fontSize = inputEl.value + "px";
}
