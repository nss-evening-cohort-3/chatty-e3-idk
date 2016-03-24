"use strict";
Chatty = (function(originalChatty){
  originalChatty.addMessage = function(id, message){
    id.innerHTML += "<div class='message'>" + message + "<button class='dButton'>Delete</button></div>";
    
  };
  return originalChatty;
})(Chatty);