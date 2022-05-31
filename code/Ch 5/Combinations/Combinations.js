/*
 * File: Combinations.js
 * ---------------------
 * This file exports an implementation of the mathematical combinations
 * function C(n, k), which is the number of ways of selecting k objects
 * from a set of n distinct objects.
 */

"use strict";

/*
 * Returns the mathematical combinations function C(n, k), which is
 * the number of ways one can choose k elements from a set of size n.
 */

function combinations(n, k) {
   return fact(n) / (fact(k) * fact(n - k));
}

/*
 * Returns the factorial of n, which is the product of all the
 * integers between 1 and n, inclusive.
 */

function fact(n) {
   let result = 1;
   for (let i = 1; i <= n; i++) {
      result *= i;
   }
   return result;
}

/* Simple program to test the combinations function */

function TestCombinations() {
   console.log("combinations(1, 1) -> " + combinations(1, 1) +
               " (should be 1)");
   console.log("combinations(6, 0) -> " + combinations(6, 0) +
               " (should be 1)");
   console.log("combinations(6, 1) -> " + combinations(6, 1) +
               " (should be 6)");
   console.log("combinations(6, 2) -> " + combinations(6, 2) +
               " (should be 15)");
   console.log("combinations(6, 3) -> " + combinations(6, 3) +
               " (should be 20)");
   console.log("combinations(6, 4) -> " + combinations(6, 4) +
               " (should be 15)");
   console.log("combinations(6, 5) -> " + combinations(6, 5) +
               " (should be 6)");
   console.log("combinations(6, 6) -> " + combinations(6, 6) +
               " (should be 1)");
}
