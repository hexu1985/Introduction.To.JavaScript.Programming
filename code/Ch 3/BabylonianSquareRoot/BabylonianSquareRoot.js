/*
 * File: BabylonianSquareRoot.js
 * -----------------------------
 * This file implements a function sqrt that calculates square roots
 * using the Babylonian method.
 */

"use strict";

/* Define a constant specifying how close the value needs to be */

const TOLERANCE = 0.000000000000001;

/*
 * Calculates the square root of n using the Babylonian method, which
 * operates as follows:
 *
 * 1. Choose a guess g (any value will do; this code uses n / 2).
 * 2. Compute a new guess by averaging g and n / g.
 * 3. Repeat step 2 until the error is less than the desired tolerance.
 */

function sqrt(n) {
   let g = n / 2;
   while (Math.abs(n - g * g) > TOLERANCE) {
      g = (g + n / g) / 2;
   }
   return g;
}

/* Test program */

function TestSqrt() {
   console.log("sqrt(1) -> " + sqrt(1));
   console.log("sqrt(2) -> " + sqrt(2));
   console.log("sqrt(9) -> " + sqrt(9));
   console.log("sqrt(1764) -> " + sqrt(1764));
}
