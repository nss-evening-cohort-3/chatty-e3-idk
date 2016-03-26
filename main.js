'use strict'
// This is the main iife that gets augmented by the other js files

var Chatty = (function() {

  var myMessages = [];

  return {
    getArray: function() {
      return myMessages;
    }
  };

})();


// ------- Event listener and conditionals for dark-theme checkbox --------------- //

let darkCheck = document.getElementById("checkBoxDarkTheme");

darkCheck.addEventListener("click", function(){
  textArea.classList.toggle("darkTheme");
});


// ------- Event listener for text box enter (also clears input box) ----------------- //

let teBox = document.getElementById("tBox");
let teArea = document.getElementById("textArea");
teBox.addEventListener("keypress", function(e){

  if (e.keyCode === 13){
    e.preventDefault();
    Chatty.addMessagesToArray(teBox.value);
    teBox.value = "";
  }

});

// ------- Event listener and conditionals for dark-theme checkbox --------------- //

let largeCheck = document.getElementById("checkBoxLargeText");

largeCheck.addEventListener("click", function(){
  textArea.classList.toggle("largeText");
});

// ------- Event listener and conditionals clear messages addded --------------- //

// function addEventOnMessagesClearButton(){
//   console.log("inclearbutton");
//   let clearButtonListener = document.getElementsByClassName("btn btn-default")
//   clearButton = clearButtonListener.addEventListener("click", function(){
//     Chatty.addMessagesToArray();
//     clearButton.disabled=true;
//   })