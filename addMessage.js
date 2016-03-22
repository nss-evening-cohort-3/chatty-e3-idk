"use strict";
var Chatty = (function(originalChatty){
  originalChatty.addMessage = function(id, message){
    id.innerHTML += "<span class='message'>message<button class='dButton'>Delete</button></span>";
  };
  return originalChatty;
})(Chatty);