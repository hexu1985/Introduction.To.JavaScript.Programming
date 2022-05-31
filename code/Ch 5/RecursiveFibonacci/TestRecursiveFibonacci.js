/*
 * File: TestRecursiveFibonacci.js
 * -------------------------------
 * This file implements a simple test of the fib(n) function.
 */

"use strict";

/* Constants */

const MAX_TERM_INDEX = 25;

/* Test program */

function TestRecursiveFibonacci() {
   for (let i = 0; i <= MAX_TERM_INDEX; i++) {
      console.log("fib(" + i + ") = " + fib(i));
   }
}
