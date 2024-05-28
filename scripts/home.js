'use strict'
const modal_login = document.getElementById('login-modal');
const welcomemsg = document.getElementById('welcome-message');
const logoutBtn = document.getElementById('btn-logout');

if(currentUser) {
      modal_login.style.display = 'none';
      welcomemsg.innerText = `welcome ${currentUser.firstName}`;
}

// user log out
logoutBtn.addEventListener('click', ()=>{
      localStorage.removeItem('currentUser');
      window.location.href = '../pages/login.html';
})