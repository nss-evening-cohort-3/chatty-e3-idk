'use strict'
// This is the main iife that gets augmented by our individual js files

var Chatty = (function() {

  return {};

})();

let mArea = document.getElementById("messageArea");
let tBox = document.getElementById("desc-input");
tBox.addEventListener("keyup", function(e){
  if (e.keyCode === 13){
    Chatty.addMessage(mArea, tBox.value);
  }
});