// Add an event listener for "keypress"
// detect when the return key has been pressed in the message field.
//
// When return key is detected, you'll create a new message (see details below).
//

// One IIFE should accept an element `id`, and the user message, and then add the user's message - along with the delete button - to the specified parent element. Each message should be stored in a private array in this IIFE. This IIFE should expose a function to read all messages, and delete a single message.

"use strict";
var Chatty = (function(originalChatty) {

  // Message comes in and gets stored in the array

  // Messages from the array get added to the DOM


  originalChatty.getMessage = function(elId, message){
    
    return allMessages;
  };

  originalChatty.addMessage = function(messages, elId){
    // iterate through the messages array
    messages.forEach(function (message, index) {
      // create a new div
      let messageDiv = document.createElement("div");
      // set innerHTML of the div (to message text with delete button)
      messageDiv.innerHTML = "<span id='message--${index}' class='message'>message<button class='dButton'>Delete</button></span>";
      // append the div to the parent div (elId)
      elId.appendChild(messageDiv);

     var thisMessage = document.getElementById("message--" + i);

    // Now, when we add the event listeners they stay added
    addClickEvent(ourCard);
  };



  return originalChatty;

})(Chatty || {});