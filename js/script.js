const form = document.querySelector('#form');
const fName = document.querySelector('#fName');
const fNameIcon = document.getElementById('fNameIcon');
const fNameMessage = document.getElementById('fNameMessage');
const lName = document.querySelector('#lName');
const email = document.querySelector('#email');
const emailIcon = document.querySelector('#emailIcon');
const emailMessage = document.querySelector('#emailMessage');
const password = document.querySelector('#password');
const passwordIcon = document.querySelector('#passwordIcon');
const passwordMessage = document.querySelector('#passwordMessage');

form.addEventListener('submit', (e) => {
   e.preventDefault();

   checkInputValues();
});

function checkInputValues(){
  const fNameValue = fName.value.trim();
  const lNameValue = lName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if( fNameValue === '' || fNameValue === null ){
    showErrorMessage(fNameIcon, fNameMessage);
  }else {
    showSuccessMessage(fNameIcon, fNameMessage);
  }

  if( lNameValue === '' || lNameValue === null ){
    showErrorMessage(lNameIcon, lNameMessage);
  }else {
    showSuccessMessage(lNameIcon, lNameMessage);
  }

  if( emailValue === '' || emailValue === null ){
    showErrorMessage(emailIcon, emailMessage);
  }else {
    showSuccessMessage(emailIcon, emailMessage);
  }

  if( passwordValue === '' || passwordValue === null ){
    showErrorMessage(passwordIcon, passwordMessage);
  }else {
    showSuccessMessage(passwordIcon, passwordMessage);
  }
}

function showErrorMessage(input, message) {
  input.classList.add('error');
  message.classList.add('error');
}

function showSuccessMessage(input, message){
  input.classList.remove('error');
  message.classList.remove('error');
}


