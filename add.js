"use strict";

var Chatty = (function(originalChatty) {

  // ---- Message comes in (JSON or user input) and gets stored in the array  -------------- //

    originalChatty.addMessagesToArray = function(userMessage) {

    let messagesArray;

      messagesArray = Chatty.getArray();
      messagesArray.push(userMessage);

    originalChatty.buildMessages(messagesArray);
  };


  // ------ Sends the message string (built in the buildMessages function) to the DOM  ------- //
  // ------ This function gets called by the gatherMessages function in load.js  ------------- //

  originalChatty.showMessages = function(ourText, ourId) {

    let messageArea = document.getElementById(ourId);
    messageArea.innerHTML = ourText;

   originalChatty.addEventsOnDeleteButton();
  };

  return originalChatty;

})(Chatty || {});