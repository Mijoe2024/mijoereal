// 🔹 Toggle Between Login & Signup
document.getElementById("signInBtn").addEventListener("click", function() {
    document.getElementById("signInForm").classList.remove("hidden");
    document.getElementById("signUpForm").classList.add("hidden");
    document.getElementById("formTitle").textContent = "Sign In";
    this.classList.add("active");
    document.getElementById("signUpBtn").classList.remove("active");
});

document.getElementById("signUpBtn").addEventListener("click", function() {
    document.getElementById("signInForm").classList.add("hidden");
    document.getElementById("signUpForm").classList.remove("hidden");
    document.getElementById("formTitle").textContent = "Sign Up";
    this.classList.add("active");
    document.getElementById("signInBtn").classList.remove("active");
});

// 🔹 Toggle Password Visibility
function togglePassword(inputId) {
    let input = document.getElementById(inputId);
    input.type = input.type === "password" ? "text" : "password";
}

// 🔹 Sign Up Form Validation
document.getElementById("signUpForm").addEventListener("submit", function(event) {
    let password = document.getElementById("signupPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        event.preventDefault();
    }
});
