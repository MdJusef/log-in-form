
const signin_button = document.querySelector("#signin-button");
const signup_button = document.querySelector("#signup-button");
const container = document.querySelector(".container");

signup_button.addEventListener('click' , () => {
    container.classList.add("sign-up-mode");
});

signin_button.addEventListener('click' , () => {
    container.classList.remove("sign-up-mode");
});