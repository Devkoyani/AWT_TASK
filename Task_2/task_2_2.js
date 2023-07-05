function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Reset error messages
    const errorElements = document.getElementsByClassName("error-message");
    for (let i = 0; i < errorElements.length; i++) {
      errorElements[i].textContent = "";
    }

    // Get form values
    const fullName = document.getElementById("fullname").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const state = document.getElementById("state").value.trim();
    const agreement = document.getElementById("agreement").checked;

    // Validation using regular expressions
    const nameRegex = /^[a-zA-Z\s]+$/;
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,10}$/;
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    if (!nameRegex.test(fullName)) {
      document.getElementById("fullname-error").textContent = "* Invalid full name";
      isValid = false;
    }

    if (!usernameRegex.test(username)) {
      document.getElementById("username-error").textContent = "* Invalid username";
      isValid = false;
    }

    if (!passwordRegex.test(password)) {
      document.getElementById("password-error").textContent = "* Invalid password";
      isValid = false;
    }

    if (password !== confirmPassword) {
      document.getElementById("confirm-password-error").textContent = "* Passwords do not match";
      isValid = false;
    }

    if (!gender) {
      document.getElementById("gender-error").textContent = "* Select a gender";
      isValid = false;
    }

    if (!phoneRegex.test(phone)) {
      document.getElementById("phone-error").textContent = "* Invalid phone number";
      isValid = false;
    }

    if (!emailRegex.test(email)) {
      document.getElementById("email-error").textContent = "* Invalid email address";
      isValid = false;
    }

    if (state === "") {
      document.getElementById("state-error").textContent = "* Select a state";
      isValid = false;
    }

    if (!agreement) {
      document.getElementById("agreement-error").textContent = "* You must agree to the terms";
      isValid = false;
    }

    if (isValid) {
      // Redirect to the login page
      window.location.href = "login.html";
    }
  }