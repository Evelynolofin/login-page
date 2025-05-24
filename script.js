// Get the signup form and the message display element
const signupForm = document.getElementById("form");
const message = document.getElementById("message");

// Check if the current page is the Sign Up page
if (document.title === "Sign Up") {
  // Add an event listener to handle form submission the type you added in the submit button
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Get values from input fields and remove leading/trailing whitespace using .trim()
    // .trim() ensures that spaces before or after the actual text are not counted
    const name = document.getElementById("fullname-input").value.trim();
    const email = document.getElementById("email-input").value.trim();
    const number = document.getElementById("number-input").value.trim();

    // Get passwords without trimming its is advisable you dont trim passwords, as we usually don’t trim passwords to avoid altering actual input
    const password = document.getElementById("password-input").value;
    const retypePassword = document.getElementById(
      "retype-password-input"
    ).value;

    // Check if any field is empty
    if (!name || !email || !number || !password || !retypePassword) {
      message.textContent = "Please fill all fields"; // It should Showh this error message
      message.style.color = "red"; // Style the message in red
      return; // Stop further execution meaning nothing should happen after this
    }

    // Check if passwords match if not show an error message
    if (password !== retypePassword) {
      message.textContent = "Passwords do not match";
      message.style.color = "red";
      return;
    }

    // Check if the password meets minimum length
    if (password.length < 6) {
      message.textContent = "Password must be at least 6 characters";
      message.style.color = "red";
      return;
    }

    // If all validations pass, create a payload object with the form data
    const payload = {
      name,
      email,
      number,
      password,
    };

      // Log the payload to the console for debugging
      //   payload is an object containing the user's input data
    //   payload simplyy means the data the user inputs
    console.log("Signup Payload:", payload);

    // Show a success alert to the user
    alert("Signup successful!");

    // Redirect the user to the login page after successful signup
    window.location.href = "login.html";
  });
}