'use strict'

// function to save infor into localStorage
function saveToLocalstorage(key, value){
      localStorage.setItem(key, JSON.stringify(value));
}

// function to get infor from localstorage
function getFromLocalstorage(key) {
     return JSON.parse(localStorage.getItem(key));
}

// create userArr with its infor from localstorage
const userArr = getFromLocalstorage('userArr') || [];

// create array Username to contain all usernames to check unique
const usernameArr = getFromLocalstorage('usernameArr') || [];

// get currentUser from localstorage
const currentUser = getFromLocalstorage('currentUser');

// create array todoArray to contain todo list
const todoArray = getFromLocalstorage('todoArray') || [];

