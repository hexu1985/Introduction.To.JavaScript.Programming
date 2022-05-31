/*
 * File: PrintFunctionTable.js
 * ---------------------------
 * This file defines printFunctionTable, which generates a console display
 * of the values of a client-supplied function.
 */

"use strict";

/*
 * Displays on the console the result of calling the function f on
 * every integer between min and max, inclusive.
 */

function printFunctionTable(f, min, max) {
   for (let i = min; i <= max; i++) {
      console.log("f(" + i + ") = " + f(i));
   }
}

/*
 * Test the printFunctionTable function.
 * The examples are the ones used in the chapter.
 */

function TestPrintFunctionTable() {
   let f = function(x) { return x * x - 5; };
   console.log("Calling printFunctionTable(f, -4, 4)");
   printFunctionTable(f, -4, 4);
   console.log("");
   console.log("Calling printFunctionTable(Math.sqrt, 0, 9)");
   printFunctionTable(Math.sqrt, 0, 9);
   console.log("");
   console.log("Calling printFunctionTable(function(x) { return x * x; }, " +
               "1, 5)");
   printFunctionTable(function(x) { return x * x; }, 1, 5);
}
