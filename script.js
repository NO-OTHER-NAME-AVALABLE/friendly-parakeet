// Assignment code here
var nums = '0123456789';
var caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var low = 'abcdefghijklmnopqrstuvwxyz';
var special = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var confirmed = [];
var password = [];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var charAmmount = (window.prompt("how many characters would you like"));
if (window.confirm('would you like numbers')) confirmed.push(nums);
if (window.confirm('would you like capital letters')) confirmed.push(caps);
if (window.confirm('would you like lower case letters')) confirmed.push(low);
if (window.confirm('would you like special characters')) confirmed.push(special);
// Write password to the #password input
function writePassword() {


  
  generatePassword();
  function generatePassword() {
    var arrayNum = 0
    console.log(confirmed);
    for (var i = 0; i < charAmmount; i++) {
      arrayNum = Math.floor(Math.random() * confirmed.length);
      console.log(arrayNum);
      if (arrayNum == 0) {
        password.push(confirmed[0].charAt(Math.floor(Math.random() * confirmed[0].length)));
        console.log(password);
      } else if (arrayNum == 1) {
        password.push(confirmed[1].charAt(Math.floor(Math.random() * confirmed[1].length)));
        console.log(password);
      } else if (arrayNum == 2) {
        password.push(confirmed[2].charAt(Math.floor(Math.random() * confirmed[2].length)));
        console.log(password);
      } else if (arrayNum == 3) {
        password.push(confirmed[3].charAt(Math.floor(Math.random() * confirmed[3].length)));
        console.log(password);
      }
    }
  }
  password = password.join("");
  var passwordText = document.querySelector("#password"); 
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);