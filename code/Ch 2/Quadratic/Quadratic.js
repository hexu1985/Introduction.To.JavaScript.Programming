/*
 * File: Quadratic.js
 * ------------------
 * This file defines the quadratic function, which solves the quadratic
 * equation given the coefficients a, b, and c.
 */

"use strict";

function quadratic(a, b, c) {
   let root = Math.sqrt(b*b - 4*a*c);
   let x1 = (-b + root) / (2*a);
   let x2 = (-b - root) / (2*a);
   console.log("x1 = " + x1);
   console.log("x2 = " + x2);
}

/* Test program */

function TestQuadratic() {
   console.log("x^2 + 5x + 6 = 0 (roots should be -2 and -3):");
   quadratic(1, 5, 6);
   console.log("");
   console.log("x^2 + x - 12 = 0 (roots should be 3 and -4):");
   quadratic(1, 1, -12);
   console.log("");
   console.log("x^2 - 10x + 25 = 0 (roots should be 5 and 5):");
   quadratic(1, -10, 25);
   console.log("");
   console.log("8x^2 - 6x + 1 = 0 (roots should be 0.5 and 0.25):");
   quadratic(8, -6, 1);
}
