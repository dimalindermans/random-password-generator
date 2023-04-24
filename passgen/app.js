const generateBtn = document.querySelector(".btn-generate");
const passwordLengthRange = document.querySelector("#password-length");
const passwordLengthDisplay = document.querySelector("#password-length-display");
const includeUppercaseCheckbox = document.querySelector("#include-uppercase");
const includeLowercaseCheckbox = document.querySelector("#include-lowercase");
const includeNumbersCheckbox = document.querySelector("#include-numbers");
const includeSymbolsCheckbox = document.querySelector("#include-symbols");
const passwordField1 = document.querySelector("#password1");
const passwordField2 = document.querySelector("#password2");
const copyBtn1 = document.querySelector("#copy1");
const copyBtn2 = document.querySelector("#copy2");
const icon1 = document.querySelector("#icon1");
const icon2 = document.querySelector("#icon2");

// Input range functionality

let passwordLength = passwordLengthRange.value;

passwordLengthRange.addEventListener('input', () => {
  passwordLengthDisplay.textContent = passwordLengthRange.value;
  passwordLength = passwordLengthRange.value;
});

// Define the characters to use for each type of character

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

/* **********************************
********GENERATE A RANDOM PASSWORD********
************************************* */
function generatePassword() {
  let password = "";
  let allowedChars = "";

  // Determine which character types to include
  if (includeUppercaseCheckbox.checked) {
    allowedChars += uppercaseChars;
  }
  if (includeLowercaseCheckbox.checked) {
    allowedChars += lowercaseChars;
  }
  if (includeNumbersCheckbox.checked) {
    allowedChars += numberChars;
  }
  if (includeSymbolsCheckbox.checked) {
    allowedChars += symbolChars;
  }

  // Generate the password
  for (let i = 0; i < passwordLength; i++) {
    password += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
  }

  // Set the default colors and hover state of the copy buttons that are changed after copy icon is clicked 

  icon1.style.color = "#4ADF86";
  icon2.style.color = "#4ADF86";

  icon1.addEventListener('mouseenter', function() {
    icon1.style.color = "#D5D4D8"; 
  });
  
  icon1.addEventListener('mouseleave', function() {
    icon1.style.color = '#4ADF86'; 
  });

  icon2.addEventListener('mouseenter', function() {
    icon2.style.color = '#D5D4D8'; 
  });
  
  icon2.addEventListener('mouseleave', function() {
    icon2.style.color = '#4ADF86'; 
  });

  // Return the password
  
  return password;
}

// Update the password fields with new passwords when the Generate passwords button is clicked
generateBtn.addEventListener("click", () => {
  passwordField1.value = generatePassword();
  passwordField2.value = generatePassword();
});

/* **********************************
********FUNCTIONALITY OF THE COPY BUTTONS********
************************************* */

function copyPassword1() {
  const passwordInput = passwordField1.value;
  //copy the generated password
  navigator.clipboard.writeText(passwordInput);
  
  //change color of the copy button and removing the hover state  
  icon1.style.color = "#177BD8";
  icon1.addEventListener('mouseenter', function() {
    icon1.style.color = "#177BD8"; 
  });
  
  icon1.addEventListener('mouseleave', function() {
    icon1.style.color = "#177BD8"; 
  });

  //set the default color and hover state to another copy button
  icon2.style.color = "#4ADF86";

  icon2.addEventListener('mouseenter', function() {
    icon2.style.color = "#D5D4D8"; 
  });
  
  icon2.addEventListener('mouseleave', function() {
    icon2.style.color = "#4ADF86"; 
  });
}

function copyPassword2() {
  const passwordInput = passwordField2.value;
  navigator.clipboard.writeText(passwordInput);
  icon2.style.color = "#177BD8";
  icon2.addEventListener('mouseenter', function() {
    icon2.style.color = "#177BD8"; 
  });
  
  icon2.addEventListener('mouseleave', function() {
    icon2.style.color = "#177BD8"; 
  });

  icon1.style.color = "#4ADF86";

  icon1.addEventListener('mouseenter', function() {
    icon1.style.color = "#D5D4D8"; 
  });
  
  icon1.addEventListener('mouseleave', function() {
    icon1.style.color = "#4ADF86"; 
  });
}

copyBtn1.addEventListener("click", copyPassword1);

copyBtn2.addEventListener("click", copyPassword2);

