/*
 * File: AdditiveSequenceFibonacci.js
 * ----------------------------------
 * This file defines a recursive version of the function fib(n), which
 * computes the nth Fibonacci number.  This implementation uses a
 * helper function called additiveSequence to avoid making unnecessary
 * recursive calls.  As a result, the fib(n) function runs in linear
 * time.
 */

"use strict";

/*
 * Calculates and returns the nth number in the Fibonacci sequence, in which
 * fib(0) is 0, fib(1) is 1, and each subsequent term in the series is the
 * sum of the preceding two.
 */

function fib(n) {
   return additiveSequence(n, 0, 1);
}

/*
 * Returns the nth term in an additive sequence in which the first
 * two terms are t0 and t1.
 */

function additiveSequence(n, t0, t1) {
   if (n === 0) return t0;
   if (n === 1) return t1;
   return additiveSequence(n - 1, t1, t0 + t1);
}

