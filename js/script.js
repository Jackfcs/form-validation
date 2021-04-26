//Name Validation
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
fnameError = document.getElementById("fname-error");
lnameError = document.getElementById("lname-error");

fname.addEventListener("input", (event) => {
  if (fname.validity.valid) {
    fnameError.textContent = "";
    fnameError.className = "error";
  } else {
    displayError(
      fname,
      fnameError,
      "Enter your first name",
      "",
      "Name can't contain numbers"
    );
  }
});

lname.addEventListener("input", (event) => {
  if (lname.validity.valid) {
    lnameError.textContent = "";
    lnameError.className = "error";
  } else {
    displayError(
      lname,
      lnameError,
      "Enter your last name",
      "",
      "Name can't contain numbers"
    );
  }
});

//Email Validation
const email = document.getElementById("email");
emailError = document.getElementById("email-error");

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    displayError(
      email,
      emailError,
      "You need to enter an e-mail address.",
      "Entered value needs to be an e-mail address.",
      ""
    );
  }
});

//Postcode validation

const post = document.getElementById("postcode");
postError = document.getElementById("post-error");

post.addEventListener("input", () => {
  if (post.validity.valid) {
    postError.textContent = "";
    postError.className = "error";
  } else {
    displayError(
      post,
      postError,
      "Enter your post code.",
      "",
      "Enter a valid post code."
    );
  }
});

//Password validation
const pWord = document.getElementById("password");
pWordError = document.getElementById("password-error");

pWord.addEventListener("input", () => {
  if (pWord.validity.valid) {
    pWordError.textContent = "";
    pWordError.className = "error";
  } else {
    displayError(
      pWord,
      pWordError,
      `Enter your password. It must contain:
      A lower case letter.
      An uppercase letter.
      A number
      It must be minimum 8 characters`,
      "",
      `Enter your password. It must contain:
      A lower case letter.
      An uppercase letter.
      A number
      It must be minimum 8 characters`
    );
  }
});

const confirmPword = document.getElementById("c-password");
const confirmPwordError = document.getElementById("c-password-error");
let passwordPattern;

confirmPword.addEventListener("input", () => {
  confirmPword.setCustomValidity("invalid-field");
  passwordPattern = pWord.value;
  const confirmPValue = confirmPword.value;
  if (confirmPValue != passwordPattern) {
    confirmPwordError.textContent = "Passwords must match";
    confirmPwordError.className = "error active";
  }
  if (confirmPValue == "") {
    confirmPwordError.textContent = "Confirm password";
    confirmPwordError.className = "error active";
  }
  if (confirmPValue === passwordPattern) {
    confirmPword.setCustomValidity("");
    confirmPwordError.classList.remove("active");
    confirmPwordError.textContent = "";
  }
});

//Validate country

const options = document
  .getElementById("countries")
  .getElementsByTagName("option");
const country = document.getElementById("country");
const countryList = document.getElementById("countries");

let optionsArr = [];

for (let i = 0; i < options.length; i++) {
  optionsArr.push(options[i].value);
}

country.addEventListener("input", () => {
  country.setCustomValidity("invalid-field");
  let value = country.value;
  for (let i = 0; i < optionsArr.length; i++) {
    if (value.toLowerCase() == optionsArr[i].toLowerCase()) {
      country.setCustomValidity("");
    }
  }
});

//Submit form without errors
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  for (let i = 0; i < form.length; i++) {
    if (form[i].validity.valid == false) {
      e.preventDefault();
      alert("Form completed incorrectly. Amend mistakes");
    }
  }
});

function displayError(input, errorDiv, valMis, typMis, patMis) {
  if (input.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    errorDiv.innerHTML = `${valMis}`;
  } else if (input.validity.typeMismatch) {
    // If the field text isn't valid
    errorDiv.textContent = `${typMis}`;
  } else if (input.validity.patternMismatch) {
    // If the field text isn't valid
    errorDiv.textContent = `${patMis}`;
  }

  // Set the styling appropriately
  errorDiv.className = "error active";
}
