/*
 * File: RecursiveFibonacci.js
 * ---------------------------
 * This file defines a recursive version of the function fib(n), which
 * computes the nth Fibonacci number.
 */

"use strict";

/*
 * Calculates and returns the nth number in the Fibonacci sequence, in which
 * fib(0) is 0, fib(1) is 1, and each subsequent term in the series is the
 * sum of the preceding two.
 */

function fib(n) {
   if (n === 0 || n === 1) {
      return n;
   } else {
      return fib(n - 1) + fib(n - 2);
   }
}
