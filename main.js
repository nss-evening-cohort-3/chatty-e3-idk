'use strict'
// This is the main iife that gets augmented by our individual js files

var Chatty = (function() {

  return {};

})();


let showMessages = function(ourText, elId) {
  let messageArea = document.getElementById(elId);

  messageArea.innerHTML = buildMessages(ourText);
}

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