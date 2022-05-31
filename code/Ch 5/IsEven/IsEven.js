/*
 * File: IsEven.js
 * ---------------
 * The program defines the function isEven, which checks whether a number
 * is even.
 */

"use strict";

/*
 * Returns true if x is even and false if x is odd.
 */

function isEven(x) {
   return isDivisibleBy(x, 2);
}

/*
 * Returns true if x is divisible by y and false otherwise.
 */

function isDivisibleBy(x, y) {
   return x % y === 0;
}

/* Simple program to test the isEven function */

function TestIsEven() {
   console.log("isEven(-2) -> " + isEven(-2) + " (should be true)");
   console.log("isEven(-1) -> " + isEven(-1) + " (should be false)");
   console.log("isEven(0) -> " + isEven(0) + " (should be true)");
   console.log("isEven(1) -> " + isEven(1) + " (should be false)");
   console.log("isEven(2) -> " + isEven(2) + " (should be true)");
   console.log("isEven(1000) -> " + isEven(1000) + " (should be true)");
   console.log("isEven(2001) -> " + isEven(2001) + " (should be false)");
}
