/*
 * File: HoistingWithLet.js
 * ------------------------
 * This program tests scoping using hoisting and let.
 */

function HoistingWithLet() {
   let functions = [ ];
   for (let i = 0; i < 5; i++) {
      functions.push(echo);
      function echo() {
         return i;
      }
   }
   for (let j = 0; j < 5; j++) {
      console.log("functions[" + j + "]() -> " + functions[j]());
   }
}
