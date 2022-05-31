/*
 * File: RaiseToPower.js
 * ---------------------
 * This program defines the function raiseToPower(x, n), which raises
 * x to the n power.  This version uses a more efficient divide-and-conquer
 * decomposition to compute the result in logarithmic time.
 */

"use strict";

/*
 * Raises x to the n power, where n is a nonnegative integer.
 */

function raiseToPower(x, n) {
   if (n === 0) {
      return 1;
   } else {
      let xHalf = raiseToPower(x, Math.floor(n / 2));
      if (n % 2 === 0) {
         return xHalf * xHalf;
      } else {
         return xHalf * xHalf * x;
      }
   }
}
