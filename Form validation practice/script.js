//checks username
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const zipcode = document.getElementById("zipCode");
const country = document.getElementById("country");
const pass = document.getElementById("password");
const passConfirm = document.getElementById("confirmpass");
const subbtn = document.getElementById("submit");

firstName

//check to see whether email is valid or not in order to submit the form
let validEmail = false;
let validZipCode = false;
let validPassword = false;

//checks for whether or not the names are empty 
function checkName(){
    if(firstName.value == ""){
        alert("first name is not valid");
        return false;
    }
    else if(lastName.value == ""){
        alert("last name is not valid");
        return false;
    }
}

//checks for valid email
email.addEventListener('input', () =>{
    //Valid email outline for user
    const validInput = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if(email.value.match(validInput)){
        console.log("email match");
        //When the email is valid there will be no popup msg
        email.setCustomValidity("");
        validEmail = true;
    }else{
        console.log("no match");
        //When the email is not valid there will be a popup msg 
        email.setCustomValidity("Email is not valid");
    }
    //need this in order have the popup show 
    email.reportValidity();
});

//checks for valid zipcode 
zipcode.addEventListener('input', ()=>{
    const constraints = {
        US:["^[0-9]{5}$", "United States ZIP must have 5 digits"],
        CH:["^[0-9]{6}$", "China ZiP must have 6 digits"],
        FR:["^(F-)?\\d{5}$", "France ZIP must have 5 digits"]
    }

    //turn the string into our a readable regex value
    //we are getting the country that the user has chosen and grabbed its regex from our constrains array
    const reg = new RegExp(constraints[country.value][0])

    //seeing if the user input matches the expressison
    if(zipcode.value.match(reg)){
        console.log("zipcode match")
        zipcode.setCustomValidity("");
        validZipCode = true;
    }else{
        console.log("Zipcode not matched")
        //here we are grabbing the message of value in the constraints array 
        zipcode.setCustomValidity(constraints[country.value][1]);
    }
    zipcode.reportValidity();
});

//checks for that both passwords match
passConfirm.addEventListener('input', ()=>{
    //need to double check because after you change the confirm password when it matches, it stops matching
    if(passConfirm.value.match(pass.value) && pass.value.match(passConfirm.value)){
        console.log(pass.value);
        console.log(passConfirm.value);
        console.log("password match")
        passConfirm.setCustomValidity("");
        validPassword = true;
    }else{
        console.log("Password not match")
        passConfirm.setCustomValidity("Passwords must match")
    }
    passConfirm.reportValidity();
})

//checks the whole form bebfore submitting
subbtn.addEventListener('click', (e) =>{
    if(checkName() == false){
        e.preventDefault();
    }
    else if(validEmail == false){
        alert("Email is not valid");
        e.preventDefault();
    }
    else if(validZipCode == false){
        alert("Zipcode is not valid");
        e.preventDefault();
    }
    else if(validPassword == false){
        alert("Passwords is not valid");
        e.preventDefault();
    }
});
