
// One IIFE should accept a message element id and then remove 
// the correct element from the DOM. This IIFE should also remove 
// the corresponding message from the private array that was created 
// in the previous IIFE.

'use strict'

var Chatty = (function(originalChatty) {

console.log("originalChatty", originalChatty);

  originalChatty.delete = function(event){
    

  if(event.target.id ==="button") {
      this.removeChild(event.target.parentNode);
    }
  }

  console.log("delete");
  return originalChatty;

})( Chatty || {} );


 // ------- Event listener and conditionals for delete messages --------------- //

function addeventsonDeleteButton() {
let deleteButtonListener = document.getElementsByClassName("dButton")

console.log("deletebutton", deleteButtonListener);
console.log("length", deleteButtonListener.length);

for (let i = 0; i < deleteButtonListener.length; i++) {
   let deleteButton = deleteButtonListener[i]
   console.log("deltebuttontest", deleteButton );
   deleteButton.addEventListener("click", youClickedMe);
   console.log("deletebutton", deleteButtonListener[i]);
   };
 };

// ------- Event Delete the message selected --------------- //

 function youClickedMe(event){
    let listParent = event.target.parentElement;
    console.log("youClickedMe", event.target.parentElement );
    console.log("listParent", listParent );
    textArea.removeChild(listParent);  
 };


// ------- Event listener and conditionals clear messages addded --------------- //

function addEventOnMessagesClearButton(){
  console.log("inclearbutton");
  let clearButtonListener = document.getElementsByClassName("btn btn-default")
  clearButton = clearButtonListener.addEventListener("click", function(){
    Chatty.addMessagesToArray();
    clearButton.disabled=true;
  })
};