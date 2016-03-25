'use strict'
// This is the main iife that gets augmented by our individual js files

var Chatty = (function() {

  var myMessages = [];

  return {
    getArray: function() {
      return myMessages;
    }
  };

})();

// ------ Sends the message string (of JSON messages) to the DOM --------------- //

  let showMessages = function(ourText, ourId) {

    let messageArea = document.getElementById(ourId);

    messageArea.innerHTML = ourText;

  }

// ---------- Push JSON messages to myMessages array --------------------------//

  let gatherMessages = function(messages) {

    let messagesArray;

    messages.forEach(function (message, index) {

      messagesArray = Chatty.getArray();
      messagesArray.push(message);

    });

    buildMessages(messagesArray);
  }

// ------ Builds a message string from the JSON message data (loaded by load.js) --------------- //

  let buildMessages = function(items) {

    let ourMessages = "";

    items.forEach(function(item, index) {

     ourMessages += `<section id="message--${index}"> ${item.text}`;
     ourMessages += `<button id="btn--${index} class="del_button">Delete</button>`;
     ourMessages += `</section>`;
    });

    showMessages(ourMessages, "textArea");
  }


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

