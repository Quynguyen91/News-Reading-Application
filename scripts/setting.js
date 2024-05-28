'use strict'

const num_input_setting = document.querySelector('.form-control');
const btnSaveSetting = document.getElementById('btn-submit');
const CategorySelect = document.getElementById('input-category');
function validateInput () {
      const number = parseInt(num_input_setting.value.trim());
      if(!isNaN(number) && number !== '') {
            return number;
      }
      else {
            alert('Please enter a number!');
      }
}

btnSaveSetting.addEventListener('click', btnSaveSettingHandle);

function btnSaveSettingHandle() {
      const number = validateInput();
      const categoryValue = CategorySelect.value;
      currentUser.pageSize = number;
      currentUser.category = categoryValue;
      console.log('current', currentUser)
      saveToLocalstorage('currentUser', currentUser);
      // find index of currentUser in the userarray 
      const userIndex = userArr.findIndex(user => user.username === currentUser.username);
      // update users in userarray
      userArr[userIndex] = currentUser;
      // save to localstorage
      saveToLocalstorage('userArr', userArr);
      alert('Setting was completed.');
}