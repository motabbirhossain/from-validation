"use strict";

const myForm = document.getElementById('myForm');


myForm.addEventListener('submit', function (event) {
    event.preventDefault();

    var emailInput = document.getElementById('email').value;
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(emailInput)) {
        alert('Email is valid');
    } else {
        document.getElementById('error-message').textContent = 'Invalid email address';
    }
});
  