/*
 * File: InlineWithLet.js
 * ----------------------
 * This program tests scoping using inline functions and let.
 */

function InlineWithLet() {
   let functions = [ ];
   for (let i = 0; i < 5; i++) {
      functions.push(function() { return i; });
   }
   for (let j = 0; j < 5; j++) {
      console.log("functions[" + j + "]() -> " + functions[j]());
   }
}
