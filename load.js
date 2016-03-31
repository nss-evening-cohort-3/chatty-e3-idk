'use strict'

var Chatty = (function(originalChatty) {

  let loadSuccess= function(){

    var myMessages = JSON.parse(this.responseText);
    originalChatty.gatherMessages(myMessages.messages);
  }

  let loadFailed = function () {
    alert("Sorry, that didn't work.");
  }


  // --------- Iterates through the messagesArray and builds a message string ---------- //

  originalChatty.buildMessages = function(items) {

    let ourMessages = "";

    items.forEach(function(item, index) {

     ourMessages += `<section id="message--${index}"> ${item}`;
     ourMessages += `<button id="btn--${index}" class="dButton">Delete</button>`;
     ourMessages += `</section>`;
    });

    originalChatty.showMessages(ourMessages, "textArea");
  }


  // --------------   Adds each message to the messagesArray   -------------- //

  originalChatty.gatherMessages = function(messages) {

    let messagesArray;

    messages.forEach(function (message, index) {

      messagesArray = Chatty.getArray();
      messagesArray.push(message.text);

    });

    originalChatty.buildMessages(messagesArray);
  }

// --------------  Clears the messagesArray   -------------- //

  originalChatty.clearMessages = function() {

    let messagesArray;

      messagesArray = Chatty.getArray();
      messagesArray.length = 0;

  };


  // ---------------------   XHR event listeners   -------------------------- //

  let chatRequest = new XMLHttpRequest();

  chatRequest.addEventListener("load", loadSuccess);

  chatRequest.addEventListener("error", loadFailed);

  chatRequest.open("GET", "message.json");

  chatRequest.send();

  return originalChatty;

})( Chatty || {} );