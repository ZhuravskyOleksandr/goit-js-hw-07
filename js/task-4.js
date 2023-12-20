'use strict';

const form = document.querySelector('.login-form');

form.addEventListener('submit', fillingForm);

function fillingForm(event) {
    event.preventDefault();
    const info = {};
    
    const currentForm = event.currentTarget;
    const email = currentForm.elements.email.value;
    const password = currentForm.elements.password.value;
    

    if (email === '' || password === '') {
        return alert('All form fields must be filled in');
    }
    
    info.email = email;
    info.password = password;

    console.log(info);
    currentForm.reset();
};
