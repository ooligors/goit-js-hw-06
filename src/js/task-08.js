const formEl = document.querySelector('.login-form');

const btnEl = document.querySelector('button');
const inputEmailEl = document.querySelector('input[name="email"]');
const inputPasswordEl = document.querySelector('input[name="password"]');

formEl.addEventListener("submit", onManageForm);
function onManageForm(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    console.log(formElements);



    console.log(formElements.email.value);
    // console.log(inputEl.name);
    if (formElements.email.value.trim() === "" || formElements.password.value.trim() === "") {
        alert('Всі поля повинні бути заповнені');
    } else {
        const user = {
            "email": formElements.email.value,
            "password": formElements.password.value,
        }
        console.log(user);

        event.currentTarget.reset();
    }
}