const spanEl = document.querySelector('#name-output');

const inputEl = document.querySelector('#name-input');
inputEl.addEventListener("input", onChangeSpan);
function onChangeSpan(event) {
    if (inputEl.value.trim === "") {
        spanEl.textContent = Anonymous;
    } else {
        // spanEl.textContent = inputEl.value
        spanEl.textContent = event.currentTarget.value
    }
};

