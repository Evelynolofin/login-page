let prevent = document.getElementById("signup").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("fullname-input")
let email = document.getElementById("email-input")
let number = document.getElementById("number-input")
let password = document.getElementById("password-input")
let retype_password = document.getElementById("retype-password-input")
let message = document.getElementById("message")

if(!name || !email || !number || !password || !retype_password){
    message.textContent = "please fill all fields"
    message.style.color = "red"
}

if(password !== retype_password){
    message.textContent = "password do not match"
    message.style.color = "red"
}

if(password.length <= 6){
    message.textContent = "password must be at least 6 characters"
    message.style.color = "red"
}

    // message.textContent = "Signup successful!"
    // message.style.color = "green"
})


