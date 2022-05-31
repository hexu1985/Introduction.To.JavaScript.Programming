/*
 * File: CelsiusToFahrenheit.js
 * ----------------------------
 * This function converts a temperature from Celsius to Fahrenheit.
 */

"use strict";

function celsiusToFahrenheit(c) {
   return 9 / 5 * c + 32;
}

/* Test program */

function TestCelsiusToFahrenheit() {
   console.log("celsiusToFahrenheit(0) -> " + celsiusToFahrenheit(0));
   console.log("celsiusToFahrenheit(20) -> " + celsiusToFahrenheit(20));
   console.log("celsiusToFahrenheit(37) -> " + celsiusToFahrenheit(37));
   console.log("celsiusToFahrenheit(100) -> " + celsiusToFahrenheit(100));
   console.log("celsiusToFahrenheit(-40) -> " + celsiusToFahrenheit(-40));
}
