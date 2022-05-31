/*
 * File: WhileWithLet.js
 * ---------------------
 * This program tests scoping using inline functions and a let embedded in
 * a while loop.
 */

function WhileWithLet() {
   let functions = [ ];
   {
      let i = 0;
      while (i < 5) {
         functions.push(function() { return i; });
         i++;
      }
   }
   for (let j = 0; j < 5; j++) {
      console.log("functions[" + j + "]() -> " + functions[j]());
   }
}
