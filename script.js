const form = document.getElementById("form")
const fullname_input = document.getElementById("fullname-input")
const email_input = document.getElementById("email-input")
const number_input = document.getElementById("number-input")
const password_input = document.getElementById("password-input")
const retype_password_input = document.getElementById("retype-password-input")

form.addEventListener("submit",(e) =>{
    // e.preventDefault() prevent submit
    let errors=[]

    if(fullname_input){
        errors = getSignupFormErrors(fullname_input.value, email_input.value, number_input.value, password_input.value, retype_password_input.value)
    }
    else{
        errors = getLoginFormErrors(email_input.value, password_input.value)
    }
})

let getSignupFormErrors =(fullname, email, password, retype_password_input) =>{
    let errors=[]

    if(password.length < 8){
        errors.push("password must have at least 8 characters")
        password_input.parentElement.classList.add("incorrect")
    }
    if(password !== retype_password_input){
        errors.push("password does not match")
        password_input.parentElement.classList.add("incorrect")
        retype_password_input.parentElement.classList.add("incorrect")
    }
    
}

const allInputs =[fullname_input, email_input, password_input, retype_password_input] .filter(input => input != null)

allInputs.forEach(input =>{
    input.addEventListener("input",() =>{
        if(input.parentElement.classList.contains("incorrect")){
            input.parentElement.classList.remove("incorrect")
        }
    })
})

function getLoginFormErrors(email, password){
    let errors = []

    if (password === " " || password == null){
        errors.push('password is required')
        password_input.parentElement.classList.add("incorrect")
    }
    if (email === " " || email == null){
        errors.push('email is required')
        email_input.parentElement.classList.add("incorrect")
    }
}