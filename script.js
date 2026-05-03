function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById("time").innerText = time;
}

setInterval(updateTime, 1000);
// SIGNUP
function signup() {
    let email = document.getElementById("newEmail").value;
    let password = document.getElementById("newPassword").value;

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Account created!");
    window.location.href = "login.html";
}

// LOGIN
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid login!");
    }
}

// LOGOUT
function logout() {
    alert("Logged out!");
    window.location.href = "index.html";
}