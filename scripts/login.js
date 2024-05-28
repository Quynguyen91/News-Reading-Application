'use strict'
const inputUsername = document.getElementById('input-username');
const inputPassword = document.getElementById('input-password');
const loginBtn = document.getElementById('btn-submit');


function validate(){
      if(inputUsername.value.trim().length <= 0 || inputPassword.value.trim().length <= 0){
           alert('Please fill in the username and password');
      }
}

const btnLoginHandle = () => {
      validate();
      const currentUser = userArr.find(user => user.username === inputUsername.value);
      if(currentUser) {
            if(currentUser.username == inputUsername.value && currentUser.password == inputPassword.value){
                  saveToLocalstorage('currentUser', currentUser);
                  window.location.href = '../index.html';
            }
            if(currentUser.username == inputUsername.value && currentUser.password !== inputPassword.value) {
                  alert('Password is wrong.');
            }
      }
      else{
            alert('user khong ton tai');
      }
}

loginBtn.addEventListener('click', btnLoginHandle);