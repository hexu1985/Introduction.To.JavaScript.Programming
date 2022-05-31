/*
 * File: XSquaredMinusFive.js
 * --------------------------
 * The program defines the function f(x) = x * x - 5.
 */

"use strict";

function f(x) {
   return x * x - 5;
}

/* Test program */

function TestXSquaredMinusFive() {
   console.log("f(-4) -> " + f(-4));
   console.log("f(-3) -> " + f(-3));
   console.log("f(-2) -> " + f(-2));
   console.log("f(-1) -> " + f(-1));
   console.log("f(0) -> " + f(0));
   console.log("f(1) -> " + f(1));
   console.log("f(2) -> " + f(2));
   console.log("f(3) -> " + f(3));
   console.log("f(4) -> " + f(4));
}
