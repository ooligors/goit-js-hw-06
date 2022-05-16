const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener("blur", onChecksLength);
console.log(typeof (Number(inputEl.dataset.length)));
function onChecksLength(event) {
    if (inputEl.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid')
    } else {
        inputEl.classList.add('invalid')
    }
}

