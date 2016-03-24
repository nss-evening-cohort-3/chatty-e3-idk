'use strict'

var Chatty = (function(originalChatty) {

  let loadSuccess= function(){

    var myMessages = JSON.parse(this.responseText);

    //showMessages(myMessages.messages);
    gatherMessages(myMessages.messages);
  }

  let loadFailed = function () {
    alert("Sorry, that didn't work.");
  }



  let chatRequest = new XMLHttpRequest();

  chatRequest.addEventListener("load", loadSuccess);

  chatRequest.addEventListener("error", loadFailed);

  chatRequest.open("GET", "message.json");

  chatRequest.send();

  return originalChatty;

})( Chatty || {} );