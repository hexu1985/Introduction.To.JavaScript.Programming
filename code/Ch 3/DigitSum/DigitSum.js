/*
 * File: DigitSum.js
 * -----------------
 * The file defines the function digitSum, which sums the digits in a number.
 */

"use strict";

/*
 * Returns the sum of the digits in n, which must be a nonnegative integer.
 */

function digitSum(n) {
   let sum = 0;
   while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
   }
   return sum;
}

/* Test program */

function TestDigitSum() {
   console.log("digitSum(0) -> " + digitSum(0) + " (should be 0)");
   console.log("digitSum(1) -> " + digitSum(1) + " (should be 1)");
   console.log("digitSum(123456789) -> " + digitSum(123456789) +
               " (should be 45)");
   console.log("digitSum(1729) -> " + digitSum(1729) + " (should be 19)");
}
