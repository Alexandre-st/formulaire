// Selector for the form for the submit
const form = document.querySelector('.form');
// Selector for the pseudo
const pseudo = document.querySelector('input[name="pseudo"]');
const smallPseudo = document.querySelector('.form-pseudo small');
// Selector for the mail
const mail = document.querySelector('input[name="email"]');
const smallMail = document.querySelector('.form-email small');
// Selector for the password
const password = document.querySelector('input[name="password"]');
const smallPassword = document.querySelector('.form-password small');
// Selector to check Password
const passwordCheck = document.querySelector('input[name="password-check"]');
const smallPasswordCheck = document.querySelector(".form-password-check small");
// Selector for the progress bar
const red = document.querySelector(".progress :nth-of-type(1)");
const yellow = document.querySelector(".progress :nth-of-type(2)");
const green = document.querySelector(".progress :nth-of-type(3)");

// Regex
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
const regexPassword = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z!@#$%^&*]{8,}$/;

// To verify the pseudo
const checkPseudo = () => {
  if (!pseudo.value) {
    smallPseudo.textContent = "Can't be empty !";
  } else if (pseudo.value.length < 3 || pseudo.value.length > 10) {
    smallPseudo.textContent = "Must be more than 3 and less than 10 characters !";
    document.querySelector(".form-pseudo .border").classList.add("border-error");
  } else {
    smallPseudo.textContent = '';
    document.querySelector(".form-pseudo .border").classList.remove("border-error");
    document.querySelector(".form-pseudo .border").classList.add("border-validate");
  }
};

// To verify the mail
const checkEmail = () => {
  console.log(mail.value);
  if (!mail.value) {
    smallMail.textContent = "Can't be empty !";
  } else if (mail.value.match(regexEmail)) {
    // console.log(mail.value);
    smallMail.textContent = '';
    document.querySelector(".form-email .border").classList.remove("border-error");
    document.querySelector(".form-email .border").classList.add("border-validate");
  } else {
    smallMail.textContent = 'Your email is incorrect';
    document.querySelector(".form-email .border").classList.add("border-error");
  }
};

// To verify the password 
const checkPassword = () => {
  // console.log(password.value);
  if (!password.value) {
    smallPassword.textContent = "Can't be empty !";
  } else if (password.value.match(regexPassword)) {
    smallPassword.textContent = "";
    document.querySelector(".form-password .border").classList.remove("border-error");
      document.querySelector(".form-password .border").classList.add("border-validate");
  } else {
    smallPassword.textContent = "Need to be more complex";
    document.querySelector(".form-password .border").classList.add("border-error");
  }
};

// To check is the password is strong
const strongPassword = () => {
  console.log(password.value.length);
  if (!password.value.match(regexPassword)) {
    // Red progress (Besoin de cibler uniquement le premier enfant)
    red.classList.remove('green-bar');
    red.classList.remove('yellow-bar');
    yellow.classList.remove('yellow-bar');
    yellow.classList.remove('green-bar');
    green.classList.remove('green-bar');
    red.classList.add('red-bar');
  } else if (password.value.length < 12) {
    // Yellow progress (Besoin de cibler les deux premiers enfants)
    red.classList.remove("green-bar");
    yellow.classList.remove("green-bar");
    green.classList.remove("green-bar");
    red.classList.add("yellow-bar");
    yellow.classList.add("yellow-bar");
  } else {
    // Green progress (Selectionner tous les enfants)
    red.classList.add("green-bar");
    yellow.classList.add("green-bar");
    green.classList.add("green-bar");
  }
};

// To check if the password correspond
const verifyPassword = () => {
  if (passwordCheck.value === password.value) {
    smallPasswordCheck.textContent = '';
    document.querySelector(".form-password-check .border").classList.remove("border-error");
    document.querySelector(".form-password-check .border").classList.add("border-validate");
  } else {
    smallPasswordCheck.textContent = 'Your confirmation password is incorrect';
     document.querySelector(".form-password-check .border").classList.add("border-error");
  }
};

// The list for the listeners 
mail.addEventListener('keyup', checkEmail);
pseudo.addEventListener('keyup', checkPseudo);
password.addEventListener('keyup', function() {
  checkPassword();
  strongPassword();
});
passwordCheck.addEventListener('keyup', verifyPassword);