document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? 'Show' : 'Hide';
});

document.getElementById('accountForm').addEventListener('input', function() {
    validateForm();
});

document.getElementById('profilePicture').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('imagePreview');
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.innerHTML = `<img src="${e.target.result}" alt="Profile Picture Preview">`;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('submitButton').addEventListener('click', function() {
    alert("Form Submitted Successfully!");
});

document.getElementById('cancelButton').addEventListener('click', function() {
    window.history.back();
});

function validateForm() {
    let isValid = true;

    // Username validation
    const username = document.getElementById('username').value;
    const usernameError = document.getElementById('usernameError');
    if (username === "") {
        usernameError.textContent = "Username is required.";
        isValid = false;
    } else {
        usernameError.textContent = "";
    }

    // Password validation
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Invalid email format.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Role validation
    const role = document.getElementById('role').value;
    const roleError = document.getElementById('roleError');
    if (role === "") {
        roleError.textContent = "Role is required.";
        isValid = false;
    } else {
        roleError.textContent = "";
    }

    // Enable or disable the submit button
    document.getElementById('submitButton').disabled = !isValid;
}
