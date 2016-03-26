'use strict'

var Chatty = (function(originalChatty) {

 // ------- Event listener and conditionals for delete messages --------------- //

  originalChatty.addEventsOnDeleteButton = function() {
    let deleteButtonListener = document.getElementsByClassName("dButton");

  for (let i = 0; i < deleteButtonListener.length; i++) {
     let deleteButton = deleteButtonListener[i]

     deleteButton.addEventListener("click", Chatty.youClickedMe);
     };
  };

// ------- Event Delete the message selected --------------- //

  originalChatty.youClickedMe = function(event) {
    let listParent = event.target.parentElement;

    textArea.removeChild(listParent);
  };


 return originalChatty;

})( Chatty || {} );

