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


// ------- Event listener for text box enter ------------------------------------ //

let teBox = document.getElementById("tBox");
let teArea = document.getElementById("textArea");
teBox.addEventListener("keypress", function(e){

  if (e.keyCode === 13){
    e.preventDefault();
    Chatty.addMessage(teArea, teBox.value);
  }

});

// ------- Event listener and conditionals for dark-theme checkbox --------------- //

let largeCheck = document.getElementById("checkBoxLargeText");

largeCheck.addEventListener("click", function(){
  textArea.classList.toggle("largeText");
});

