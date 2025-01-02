// script.js
function showLogin() {
    document.getElementById("login-f").style.display = "block";
    document.getElementById("register-f").style.display = "none";
}

function showRegister() {
    document.getElementById("login-f").style.display = "none";
    document.getElementById("register-f").style.display = "block";
}

function login(event) {
    event.preventDefault(); 
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    if (email && password) {
        window.location.href = "front_page.html";
    } else {
        alert("Please enter valid credentials");
    }
}
function register(event) {
    event.preventDefault(); 
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    if (name && email && password) {
        window.location.href = "front_page.html";
    } else {
        alert("Please complete all fields");
    }
}

