import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const FEEDBACK_KEY = 'feedback-form-state';

function saveInLocalStorage() {
    const savedData = {
        email: emailInput.value,
        message: messageInput.value,
    };
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(savedData));

}

function populateForm() {
    const storedState = localStorage.getItem(FEEDBACK_KEY);
    if (storedState) {
        const state = JSON.parse(storedState);
        emailInput.value = state.email;
        messageInput.value = state.message;
    };
};

form.addEventListener('input' , throttle(saveInLocalStorage, 500));
window.addEventListener('DOMContentLoaded' , populateForm);
form.addEventListener('submit' , (ev) => {
    ev.preventDefault();

    const currentState = {
        email: emailInput.value,
        message: messageInput.value,
    };

    console.log(currentState);
    localStorage.removeItem(FEEDBACK_KEY);
    form.reset();
})



