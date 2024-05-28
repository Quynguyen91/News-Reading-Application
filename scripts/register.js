'use strict'
const registerFirstName = document.getElementById('input-firstname');
const registerLastName = document.getElementById('input-lastname');
const registerUsername = document.getElementById('input-username');
const registerPassword = document.getElementById('input-password');
const registerConfirmPass = document.getElementById('input-password-confirm');
const registerBtn = document.getElementById('btn-submit');

// check fistName input
function checkFullName(){
      if(registerFirstName.value.trim() && registerLastName.value.trim()){
            return true;
      }
      else return false;
}

// check username input
function checkUsername() {
      return (registerUsername.value.trim()) ? true : false;
}

// check username unique
function checkUserUnique(){
     return (!usernameArr.includes(registerUsername.value)) ? true : 
     (alert('the username should be unique.'), false);
}

// check password and confirmPassword
function checkPass(){
      if(registerPassword.value.trim().length >=8){
            return true;
      }
      else {
            alert('password should have at least 8 characters');
            return false;
      }
}

// check confirmPassword
function checkConfirmPass(){
     return (registerPassword.value === registerConfirmPass.value) ? true 
     : (alert('the password and confirmpassword should be the same'), false);
}

//validate user input data
function validate(){
      if(registerFirstName.value == '' || registerLastName.value == '' || registerUsername.value == ''
      || registerPassword.value == '' || registerConfirmPass.value == ''){
            alert('Please fill in all the information.');
      }
      // if(registerPassword.value.length < 8) {
      //       alert('The password should be greater than 8 characters.');
      // }

      // if(registerPassword.value !== registerConfirmPass.value){
      //       alert('The password and confirm password should be the same.');
      // }

      if(checkFullName() && checkUsername() && checkPass() && checkConfirmPass() && checkUserUnique()){
            console.log('thong tin hop le');
            return true;
      }

      else {
            console.log('chua hop le');
            // alert('Please fill in all the information.')
            return false;
      };
}

// handle register submit button
function handleRegisterBtn() {
      const userData = new User(
            registerFirstName.value,
            registerLastName.value,
            registerUsername.value,
            registerPassword.value,
            registerConfirmPass.value,
      )
      
      if(validate()){
            userArr.push(userData);
            saveToLocalstorage('userArr', userArr);

            usernameArr.push(userData.username);
            saveToLocalstorage('usernameArr', usernameArr);
            window.location.href = '../pages/login.html';
      }
      console.log(userArr);
}

registerBtn.addEventListener('click', handleRegisterBtn);
