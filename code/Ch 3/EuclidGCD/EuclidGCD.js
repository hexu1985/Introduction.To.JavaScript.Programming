/*
 * File: EuclidGCD.js
 * ------------------
 * This file implements a function that computes the greatest common
 * divisor of two integers.  This version uses Euclid's algorithm.
 */

"use strict";

/*
 * Returns the greatest common divisor (gcd) of the two integers,
 * x and y.  This implementation of the gcd method uses Euclid's
 * algorithm from Book VII of The Elements.
 */

function gcd(x, y) {
   let r = x % y;
   while (r !== 0) {
      x = y;
      y = r;
      r = x % y;
   }
   return y;
}

/* Test program */

function TestGCD() {
   console.log("gcd(49, 63) -> " + gcd(49, 63) + " (should be 7)");
   console.log("gcd(51, 15) -> " + gcd(51, 15) + " (should be 3)");
   console.log("gcd(1000000, 1000005) -> " + gcd(1000000, 1000005) +
               " (should be 5)");
}
