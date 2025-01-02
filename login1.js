// Predefined users
const users = [
    { email: "reddyammuleshwari@gmail.com", password: "Ammu@123" },
    { email: "test@gmail.com", password: "testpass" }
];

// Show login form
function showLogin() {
    document.getElementById("login-f").style.display = "block";
    document.getElementById("register-f").style.display = "none";
}

// Show register form
function showRegister() {
    document.getElementById("login-f").style.display = "none";
    document.getElementById("register-f").style.display = "block";
}

// Login function
function login(event) {
    event.preventDefault(); 
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Validate credentials
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        alert("Login successful!");
        window.location.href = "front_page.html"; 
    } else {
        alert("Invalid email or password");
    }
}

// Register function
function register(event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    // Check if email is already registered
    const userExists = users.some(u => u.email === email);
    if (userExists) {
        alert("User already registered with this email");
    } else {
        // Add new user
        users.push({ email, password });
        alert("Registration successful! Please log in.");
        showLogin(); 
    }
}

document.getElementById('login-f').addEventListener('submit', login);
document.getElementById('register-f').addEventListener('submit', register);
