
// One IIFE should accept a message element id and then remove 
// the correct element from the DOM. This IIFE should also remove 
// the corresponding message from the private array that was created 
// in the previous IIFE.

'use strict'

var Chatty = (function(originalChatty) {

console.log("originalChatty", originalChatty);

  originalChatty.deleteMessage = function(event){
    this.removeChild(event.target.parentNode);
  }

  return originalChatty;

})( Chatty || {} );


  // function watchForDelete() {
  //   var deleteButton = document.getElementsByClassName("del_button")
  //   for (var i = 0; i < deleteButton.length; i++) {
  //     deleteButton[i].addEventListener("click", deleteMessage);
  //   }
  // }
  // function deleteMessage(event) {
  //   var listParent = event.target.parentElement;
    
  //   originalChatty.removeChild(listParent);   
  // }
