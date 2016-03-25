// Add an event listener for "keypress"
// detect when the return key has been pressed in the message field.
//
// When return key is detected, you'll create a new message (see details below).
//

// One IIFE should accept an element `id`, and the user message, and then add the user's message
// - along with the delete button - to the specified parent element. 
// Each message should be stored in a private array in this IIFE.
// This IIFE should expose a function to read all messages, and delete a single message.

"use strict";
var Chatty = (function(originalChatty) {

  // Message comes in and gets stored in the array

  // Messages from the array get added to the DOM




  originalChatty.showMessages = function(ourText, ourId) {

    let messageArea = document.getElementById(ourId);

    messageArea.innerHTML = ourText;

  }



  return originalChatty;

})(Chatty || {});