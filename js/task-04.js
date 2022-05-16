const counterValueEl = document.querySelector('#value');



let counterValue = 0;
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

console.log(btnIncrement);
console.log(btnDecrement);

function onDecrementBtn() {
    counterValue -= 1;
    console.log(counterValue);
    counterValueEl.textContent = counterValue;
};

function onIncrementBtn() {
    counterValue += 1;
    console.log(counterValue);
    counterValueEl.textContent = counterValue;
};


btnDecrement.addEventListener("click", onDecrementBtn);
btnIncrement.addEventListener("click", onIncrementBtn);

