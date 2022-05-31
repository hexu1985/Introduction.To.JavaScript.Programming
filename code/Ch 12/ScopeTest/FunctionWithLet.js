/*
 * File: FunctionWithLet.js
 * ------------------------
 * This program tests scoping using a separate function and let.
 */

function FunctionWithLet() {
   let functions = [ ];
   for (let i = 0; i < 5; i++) {
      functions.push(createEchoFunction(i));
   }
   for (let j = 0; j < 5; j++) {
      console.log("functions[" + j + "]() -> " + functions[j]());
   }
   function createEchoFunction(n) {
      return function() { return n; };
   }
}
