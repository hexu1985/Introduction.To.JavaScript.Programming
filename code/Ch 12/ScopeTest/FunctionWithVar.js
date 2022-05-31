/*
 * File: FunctionWithVar.js
 * ------------------------
 * This program tests scoping using a separate function and var.
 */

function FunctionWithVar() {
   var functions = [ ];
   for (var i = 0; i < 5; i++) {
      functions.push(createEchoFunction(i));
   }
   for (var j = 0; j < 5; j++) {
      console.log("functions[" + j + "]() -> " + functions[j]());
   }
   function createEchoFunction(n) {
      return function() { return n; };
   }
}
