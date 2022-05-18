const spanEl = document.querySelector('#name-output');

const inputEl = document.querySelector('#name-input');
inputEl.addEventListener("input", onChangeSpan);
function onChangeSpan(event) {
    const el = event.target;
    if (el.value.trim() === "") {
        spanEl.textContent = "Anonymous";
    } else {
        // spanEl.textContent = inputEl.value
        spanEl.textContent = el.value
    }
};

