/*
 * File: Distance.js
 * -----------------
 * The file defines the function distance, which uses the Pythagorean
 * theorem to calculate the distance from the origin to the point (x, y).
 */

"use strict";

/*
 * Calculates the distance from the origin to the point (x, y).
 */

function distance(x, y) {
   return Math.sqrt(x * x + y * y);
}

/* Test program */

function TestDistance() {
   console.log("distance(0, 0) -> " + distance(0, 0));
   console.log("distance(4, 0) -> " + distance(4, 0));
   console.log("distance(0, -2) -> " + distance(0, -2));
   console.log("distance(3, 4) -> " + distance(3, 4));
   console.log("distance(5, 12) -> " + distance(5, 12));
}
