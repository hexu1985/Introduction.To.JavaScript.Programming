/*
 * File: RaiseToPower.js
 * ---------------------
 * This program defines the function raiseToPower(x, n), which raises
 * x to the n power.
 */

"use strict";

/*
 * Raises x to the n power, where n is a nonnegative integer.
 */

function raiseToPower(x, n) {
   if (n === 0) {
      return 1;
   } else {
      return x * raiseToPower(x, n - 1);
   }
}
