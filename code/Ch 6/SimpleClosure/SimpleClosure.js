/*
 * File: SimpleClosure.js
 * ----------------------
 * This file tests the simple example of closures used in the slides
 * for this chapter.
 */

"use strict";

/*
 * Displays on the console the result of calling the function f on
 * every integer between min and max, inclusive.
 */

function f(x, y) {
   function g(z) {
      return x * z;
   }
   return g(y);
}

/*
 * Test the code for the simple example of closures.
 */

function TestSimpleClosure() {
   console.log("f(6, 7) -> " + f(6, 7));
}
