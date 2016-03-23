'use strict'
// This is the main iife that gets augmented by our individual js files

var Chatty = (function() {

  return {};

})();

// ------ Sends the message string (of JSON messages) to the DOM --------------- //
let showMessages = function(ourText, elId) {
  let messageArea = document.getElementById(elId);

  messageArea.innerHTML = buildMessages(ourText);
}

// ------ Builds a message string from the JSON message data (loaded by load.js) --------------- //
let buildMessages = function(messages) {

  let ourMessages = "";

  messages.forEach(function (message, index) {
  let text  = message.text;
   ourMessages += "<section id='message--${index}'>" + text + " ";
   ourMessages += "<button id='btn--${index}' class='del_button'>Delete</button>";
   ourMessages += "</section>";
  });
  return ourMessages;
}

// ------- Event listener and conditionals for dark-theme checkbox --------------- //

let darkCheck = document.getElementById("checkBoxDarkTheme");

darkCheck.addEventListener("click", function(){
  if (darkCheck.checked) {
    textArea.setAttribute("class", "darkTheme");
  }
  else {
    textArea.removeAttribute("class", "darkTheme");
  }
});

// ------- Event listener and conditionals for dark-theme checkbox --------------- //

let largeCheck = document.getElementById("checkBoxLargeText");

largeCheck.addEventListener("click", function(){
  if (largeCheck.checked) {
    textArea.setAttribute("class", "largeText");
  }
  else {
    textArea.removeAttribute("class", "largeText");
  }
});



