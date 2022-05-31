/*
 * File: IsDivisibleBy.js
 * ----------------------
 * The program defines the function isDivisibleBy, which checks if one
 * number is divisible by another.
 */

"use strict";

/*
 * Returns true if x is divisible by y and false otherwise.
 */

function isDivisibleBy(x, y) {
   return x % y === 0;
}

/* Simple program to test the isDivisibleBy function */

function TestIsDivisibleBy() {
   console.log("isDivisibleBy(63, 7) -> " + isDivisibleBy(63, 7) +
               " (should be true)");
   console.log("isDivisibleBy(0, 7) -> " + isDivisibleBy(0, 7) +
               " (should be true)");
   console.log("isDivisibleBy(63, 2) -> " + isDivisibleBy(63, 2) +
               " (should be false)");
}
