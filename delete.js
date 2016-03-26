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
    let messagesArray;

    let listParent = event.target.parentElement;
    let messageId = listParent.getAttribute('id').split("--")[1];

    textArea.removeChild(listParent);
    messagesArray = Chatty.getArray();

    messagesArray.splice(messageId, 1);

  };

 return originalChatty;

})( Chatty || {} );


// messagesArray.splice(id, 0)
