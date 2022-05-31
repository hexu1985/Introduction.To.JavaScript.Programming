/*
 * File: HoistingWithVar.js
 * ------------------------
 * This program tests scoping using hoisting and var.
 */

function HoistingWithVar() {
   var functions = [ ];
   for (var i = 0; i < 5; i++) {
      functions.push(echo);
      function echo() {
         return i;
      }
   }
   for (var j = 0; j < 5; j++) {
      console.log("functions[" + j + "]() -> " + functions[j]());
   }
}
