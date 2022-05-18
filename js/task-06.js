const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener("blur", onChecksLength);


function onChecksLength(event) {
    inputEl.classList.remove('invalid');
    inputEl.classList.remove('valid');

    if (inputEl.value.length !== Number(inputEl.dataset.length)) {
        inputEl.classList.add('invalid');
    } else {
        inputEl.classList.add('valid');
    }


}

