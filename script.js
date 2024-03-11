// script.js
function validatePasswords() {
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm_password').value;

    if (password !== confirm_password) {
        alert("Passwords do not match!");
        return false; // Prevent form submission
    }

    return true; // Proceed with form submission
}