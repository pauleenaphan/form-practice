//checks username
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const zipcode = document.getElementById("zipCode");
const country = document.getElementById("country");
const subbtn = document.getElementById("submit");


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

//check to see whether email is valid or not in order to submit the form
let validEmail = false;

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

zipcode.addEventListener('input', ()=>{
    const constraints = {
        US:["^[0-9]{5}$", "United States ZIP must have 5 digits"],
        CH:["^[0-9]{6}$", "China ZiP must have 6 digits"],
        FR:["^(F-)?\\d{5}$", "France ZIP must have 5 digits"]
    }

    const reg = new RegExp(constraints[country.value][0])

    // console.log(constraints[country.value][0])
    if(zipcode.value.match(reg)){
        console.log("zipcode match")
        zipcode.setCustomValidity("");
    }else{
        console.log("zipcode not matched")
        zipcode.setCustomValidity(constraints[country.value][1]);
    }
    zipcode.reportValidity();
})

//checks the whole form bebfore submitting
subbtn.addEventListener('click', (e) =>{

    if(checkName() == false){
        e.preventDefault();
    }
    if(validEmail == false){
        alert("email is not valid");
        e.preventDefault();
    }
});
