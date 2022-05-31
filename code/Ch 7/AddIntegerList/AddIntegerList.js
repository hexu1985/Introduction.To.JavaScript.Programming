/*
 * File: AddIntegerList.js
 * -----------------------
 * This program adds a list of integers entered on the console.
 */

"use strict";

function AddIntegerList() {
   let sum = 0;
   console.log("Enter a list of integers up to a blank line.");
   console.requestInput(" ? ", processLine);

   function processLine(line) {
      if (line === "") {
         console.log("The sum is " + sum + ".");
      } else {
         let value = Number(line);
         if (isNaN(value) || value !== Math.floor(value)) {
            console.log("Illegal integer");
         } else {
            sum += value;
         }
         console.requestInput(" ? ", processLine);
      }
   }
}
