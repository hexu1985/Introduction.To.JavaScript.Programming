/*
 * File: InlineWithVar.js
 * ----------------------
 * This program tests scoping using inline functions and var.
 */

function InlineWithVar() {
   var functions = [ ];
   for (var i = 0; i < 5; i++) {
      functions.push(function() { return i; });
   }
   for (var j = 0; j < 5; j++) {
      console.log("functions[" + j + "]() -> " + functions[j]());
   }
}
