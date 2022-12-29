"use strict";

const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirm-password");
const errorMessage = document.querySelector(".error-message");

const form = document.querySelector("form")

form.addEventListener("submit", validateForm);

function validateForm(event){
    let passwordValue = password.value;
    let confirmPasswordValue = confirmPassword.value;
    if(passwordValue != confirmPasswordValue){
        errorMessage.textContent = "Password doesn't match"
        event.preventDefault();
        return false
    }
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(passwordValue)){
        errorMessage.textContent = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
        event.preventDefault();
        return false;
    }else{
        errorMessage.textContent = "";
        return true
    }
}