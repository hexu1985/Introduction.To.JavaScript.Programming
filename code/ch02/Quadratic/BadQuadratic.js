/*
 * File: BadQuadratic.js
 * ---------------------
 * This file defines the quadratic function, which purports to solve the
 * quadratic equation given the coefficients a, b, and c.  This version,
 * however, is buggy because it omits the parentheses around 2*a.
 */

"use strict";

function quadratic(a, b, c) {
   let root = Math.sqrt(b*b - 4*a*c);
   let x1 = (-b + root) / 2*a;
   let x2 = (-b - root) / 2*a;
   console.log("x1 = " + x1);
   console.log("x2 = " + x2);
}

/* Test program */

function TestQuadratic() {
   console.log("x^2 + 5x + 6 = 0");
   quadratic(1, 5, 6);
   console.log("");
   console.log("x^2 - 10x + 25 = 0");
   quadratic(1, -10, 25);
   console.log("");
   console.log("8x^2 - 6x + 1 = 0");
   quadratic(8, -6, 1);
}
