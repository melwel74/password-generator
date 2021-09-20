// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // Window alert to the user password length
   var passwordLength= prompt("enter password length")
   console.log(passwordLength)
    //Confirm if the user wants uppercase or lowercase special characters and numeric
   var upper=confirm("do you want your password to have uppercase?")
    var lowercase=confirm("do you want your password to have lowercase?")
   var specialCharacters= confirm("do you want your password to have special characters?")
    var numbers=confirm("do you want your password to have numbers?")
    if(!upper && !lowercase && !specialCharacters && !numbers) { 
      alert("Please select at lease one character type")
      generatePassword()
    }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Validate that user enter valid password length
let passwordLength= prompt("enter password length")

//make sure user clicks yes to one character type

generateBtn.addEventListener("click", writePassword);
