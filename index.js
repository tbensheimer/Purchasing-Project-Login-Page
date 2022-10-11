const email = document.querySelector(".email-input");
const pass = document.querySelector(".password-input");
const alert = document.querySelector(".alert");
const form = document.querySelector(".form");
const passcode = document.querySelector(".passcode");
const passcodeDiv = document.querySelector(".passcode-group");
const passcodeInput = document.querySelector(".pass");
const forgotPass = document.querySelector(".forgot-pass");


passcode.addEventListener("click", () => {
passcodeDiv.classList.toggle("hidden");
passcodeInput.value = "";

if (!passcodeDiv.classList.contains("hidden")) {
passcode.innerHTML = "Hide Passcode";
}

if (passcodeDiv.classList.contains("hidden")) {
    passcode.innerHTML = "Use Passcode";
    }
});

function insertAlert() {
    alert.classList.add("alert-danger");
    return alert.classList.remove("hidden");
}

function removeAlert() {
    alert.classList.remove("alert-danger");
    return alert.classList.add("hidden");
}

function clear() {
    alert.innerHTML = "";
    email.value = "";
    pass.value = "";
    passcodeInput.value = "";
}


form.addEventListener("submit", e => {
e.preventDefault();



if (email.value === "" || email.value === null) {
    insertAlert();
    alert.innerHTML = "Enter your email";
    }

if (pass.value === "" || pass.value === null) {
    insertAlert();
    alert.innerHTML = "Enter your password";
    }

if (email.value === "" && pass.value === "") {
    insertAlert();
    alert.innerHTML = "Enter your Email and Password";
    }

if (email.value !== "" && !email.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    insertAlert();
    alert.innerHTML = "Enter a valid email address";
    } 


if (email.value !== "" && pass.value !== "" && passcodeDiv.classList.contains("hidden")) {
    removeAlert();       
    clear();
    }

if (!passcodeDiv.classList.contains("hidden") && passcodeInput.value === "") {
    insertAlert();
    alert.innerHTML = "Enter Passcode";
    }

if (email.value !== "" && pass.value !== "" && !passcodeDiv.classList.contains("hidden") && passcodeInput.value !== "") {
    removeAlert();       
     clear();
    }

});

