/*
 * File: BruteForceGCD.js
 * ----------------------
 * This file implements a function that computes the greatest common
 * divisor of two integers.  This version uses the "brute force" approach
 * of trying every possibility.
 */

"use strict";

/*
 * Returns the greatest common divisor (gcd) of the two integers,
 * x and y.  This implementation of the "brute force" approach of
 * counting down from the smaller value until the answer is found.
 */

function gcd(x, y) {
   let guess = Math.min(x, y);
   while (x % guess !== 0 || y % guess !== 0) {
      guess--;
   }
   return guess;
}

/* Test program */

function TestGCD() {
   console.log("gcd(49, 63) -> " + gcd(49, 63) + " (should be 7)");
   console.log("gcd(51, 15) -> " + gcd(51, 15) + " (should be 3)");
   console.log("gcd(1000000, 1000005) -> " + gcd(1000000, 1000005) +
               " (should be 5)");
}
