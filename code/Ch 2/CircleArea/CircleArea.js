/*
 * File: CircleArea.js
 * -------------------
 * The program defines the function circleArea, which calculates the area
 * of a circle from its radius.
 */

"use strict";

/* Constants */

const PI = 3.141592653;

/*
 * Calculates the area of a circle from its radius.
 */

function circleArea(r) {
   return PI * r * r;
}

/* Test program */

function TestCircleArea() {
   console.log("circleArea(1) -> " + circleArea(1));
   console.log("circleArea(10) -> " + circleArea(10));
}
