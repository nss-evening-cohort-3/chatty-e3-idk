'use strict';

var Chatty = (function(originalChatty) {

  function loadSuccess(){
    var myMessages = JSON.parse(this.responseText);

    showMessages(myMessages.messages, "messageArea");
  }

  function showMessages(thingOne, thingTwo) {
    console.log(thingOne);
  }


  function loadFailed () {
    alert("Sorry, that didn't work.");
  }

  let chatRequest = new XMLHttpRequest();

  chatRequest.addEventListener("load", loadSuccess);

  chatRequest.addEventListener("error", loadFailed);

  chatRequest.open("GET", "message.json");

  chatRequest.send();

  return originalChatty;

})( Chatty || {} );