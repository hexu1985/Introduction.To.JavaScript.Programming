/*
 * File: LargestFactor.js
 * ----------------------
 * This function finds the largest factor of an integer using an algorithm
 * similar to one that Alan Turing used on the Machester Baby, the world's
 * first stored-program computer.
 */

"use strict";

/*
 * Finds the largest factor of an integer n, which must be greater than 1.
 */

function largestFactor(n) {
   let factor = n - 1;
   while (n % factor !== 0) {
      factor--;
   }
   return factor;
}

/* Test program */

function TestLargestFactor() {
   console.log("largestFactor(63) -> " + largestFactor(63) +
               " (should be 21)");
   console.log("largestFactor(262144) -> " + largestFactor(262144) +
               " (should be 131072)");
}
